"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { ChangeEvent, FormEvent, PointerEvent as ReactPointerEvent, RefObject } from "react";

/**
 * Native React port of Gravity Form 21 — "Free Credit Repair + $5,000
 * Giveaway" — the form the WordPress /5kgiveaway-entry/ page embeds.
 *
 * Same two pages, same field ids and input names, same required rules, and
 * the same signature payload the GF Signature add-on expects
 * (`input_21_16_data` = PNG data URL + ";background-color:#FFFFFF"). Each
 * page step and the final submit go through /api/gravity-forms/21/submit/,
 * which replays them to WordPress as a classic postback, so validation
 * messages, the entry, the notifications and the redirect confirmation all
 * still come from Gravity Forms.
 */

const FORM_ID = 21;
const ENDPOINT = `/api/gravity-forms/${FORM_ID}/submit/`;
const AGREEMENT_PDF = "/wp-content/uploads/2026/08/Credit-Danny-Contract.pdf";

const CONSENT_9_TEXT =
  "I understand that I must maintain a Smart Credit account throughout the credit repair process.";
const CONSENT_15_TEXT =
  "I have fully read my service agreement and agree with the terms and conditions within this customized plan. I also understand I have 30 days to cancel my service with Credit Danny by emailing admin@creditdanny.com";

/** Field ids per form page — a page-1 error returned on final submit sends the user back to page 1. */
const PAGE_ONE_FIELDS = new Set(["3", "4", "20", "7", "8"]);

/** GF "allow field to be populated dynamically" parameter names → input names. */
const PREPOPULATE: Array<[param: string, input: string]> = [
  ["firstname", "input_3"],
  ["lastname", "input_4"],
  ["email", "input_20"],
  ["utm_source", "input_22"],
  ["utm_medium", "input_23"],
  ["utm_campaign", "input_24"],
  ["utm_content", "input_25"],
];

const US_STATES = [
  "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana",
  "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
  "U.S. Virgin Islands", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
  "Armed Forces Americas", "Armed Forces Europe", "Armed Forces Pacific",
];

type Values = Record<string, string>;
type Errors = Record<string, string>;
type ApiResponse =
  | { ok: true; complete: true; redirect?: string; message?: string }
  | { ok: true; complete: false; page: number }
  | { ok: false; errors: Errors; page?: number }
  | { error: string };

/** useSyncExternalStore subscribe for a value that never changes after load. */
const subscribeNever = () => () => {};

const GENERIC_ERROR = "Something went wrong while sending your entry. Please try again.";
const REVIEW_ERROR = "There was a problem with your submission. Please review the fields below.";

/** {date_mdy} — the default the hidden "Current Date" field renders with. */
function todayMdy(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getMonth() + 1)}/${p(d.getDate())}/${d.getFullYear()}`;
}

/** Mirror the GF "standard" phone mask: 10 US digits → (###) ###-####. */
function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  const ten = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (ten.length !== 10) return raw;
  return `(${ten.slice(0, 3)}) ${ten.slice(3, 6)}-${ten.slice(6)}`;
}

/* ============================================================ signature */

type SignaturePadHandle = { toDataUrl: () => string; clear: () => void };
type Point = [x: number, y: number];

const SIG_W = 400;
const SIG_H = 180;

function paintStrokes(ctx: CanvasRenderingContext2D, strokes: Point[][]) {
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#000";
  ctx.fillStyle = "#000";
  for (const stroke of strokes) {
    if (stroke.length === 1) {
      ctx.beginPath();
      ctx.arc(stroke[0][0], stroke[0][1], 1, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }
    ctx.beginPath();
    ctx.moveTo(stroke[0][0], stroke[0][1]);
    for (let i = 1; i < stroke.length; i++) ctx.lineTo(stroke[i][0], stroke[i][1]);
    ctx.stroke();
  }
}

function SignaturePad({
  id,
  padRef,
  invalid,
  describedBy,
  onInk,
}: {
  id: string;
  padRef: RefObject<SignaturePadHandle | null>;
  invalid: boolean;
  describedBy?: string;
  onInk: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokes = useRef<Point[][]>([]);
  const drawing = useRef(false);
  const [hasInk, setHasInk] = useState(false);

  // Backing store follows the rendered size × devicePixelRatio; drawing is in
  // a fixed 400×180 logical space so the exported PNG matches GF's canvas.
  const redraw = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const dpr = window.devicePixelRatio || 1;
    const w = c.clientWidth || SIG_W;
    const h = Math.round((w * SIG_H) / SIG_W);
    c.width = Math.round(w * dpr);
    c.height = Math.round(h * dpr);
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.setTransform((dpr * w) / SIG_W, 0, 0, (dpr * h) / SIG_H, 0, 0);
    paintStrokes(ctx, strokes.current);
  }, []);

  useEffect(() => {
    redraw();
    const c = canvasRef.current;
    if (!c || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => redraw());
    ro.observe(c);
    return () => ro.disconnect();
  }, [redraw]);

  useEffect(() => {
    padRef.current = {
      toDataUrl: () => {
        if (!strokes.current.length) return "";
        const out = document.createElement("canvas");
        out.width = SIG_W;
        out.height = SIG_H;
        const ctx = out.getContext("2d");
        if (!ctx) return "";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, SIG_W, SIG_H);
        paintStrokes(ctx, strokes.current);
        return `${out.toDataURL("image/png")};background-color:#FFFFFF`;
      },
      clear: () => {
        strokes.current = [];
        setHasInk(false);
        redraw();
      },
    };
    return () => {
      padRef.current = null;
    };
  }, [padRef, redraw]);

  const toLogical = (e: ReactPointerEvent<HTMLCanvasElement>): Point => {
    const r = e.currentTarget.getBoundingClientRect();
    return [
      Math.max(0, Math.min(SIG_W, ((e.clientX - r.left) * SIG_W) / r.width)),
      Math.max(0, Math.min(SIG_H, ((e.clientY - r.top) * SIG_H) / r.height)),
    ];
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    drawing.current = true;
    strokes.current.push([toLogical(e)]);
    redraw();
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    e.preventDefault();
    const stroke = strokes.current[strokes.current.length - 1];
    stroke.push(toLogical(e));
    const ctx = e.currentTarget.getContext("2d");
    if (ctx && stroke.length >= 2) {
      const a = stroke[stroke.length - 2];
      const b = stroke[stroke.length - 1];
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.stroke();
    }
  };
  const onPointerUp = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    drawing.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    if (!hasInk) setHasInk(true);
    onInk();
  };

  return (
    <div className="gwe-sig">
      <canvas
        ref={canvasRef}
        id={id}
        className="gwe-sig-canvas"
        role="img"
        aria-label={`Signature pad${invalid ? " (required)" : ""}. Sign using your mouse, finger or stylus.`}
        aria-describedby={describedBy}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      />
      <div className="gwe-sig-bar">
        <span className="gwe-sig-hint">Sign above using your mouse or finger</span>
        <button type="button" className="gwe-sig-clear" onClick={() => padRef.current?.clear()} disabled={!hasInk}>
          Clear Signature
        </button>
      </div>
    </div>
  );
}

/* ===================================================== agreement modal */

function AgreementViewer() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const show = () => {
    // Phones/tablets don't scroll PDFs inside an iframe — send them to the file.
    if (window.matchMedia("(max-width: 640px), (pointer: coarse)").matches) {
      window.open(AGREEMENT_PDF, "_blank", "noopener");
      return;
    }
    returnFocus.current = document.activeElement as HTMLElement | null;
    setLoaded(false);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("gwe-modal-open");
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab") {
        // keep focus inside the dialog (link ⇄ close button)
        const first = linkRef.current;
        const last = closeRef.current;
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const timer = window.setTimeout(() => setLoaded(true), 4000); // safety net
    return () => {
      document.body.classList.remove("gwe-modal-open");
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
      returnFocus.current?.focus?.();
    };
  }, [open]);

  return (
    <>
      <button type="button" className="gwe-agree-btn" onClick={show}>
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
        View Service Agreement
      </button>
      {open && (
        <div
          className="gwe-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gwe-agree-title"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false); // backdrop click
          }}
        >
          <div className="gwe-modal__panel" role="document">
            <div className="gwe-modal__head">
              <h2 className="gwe-modal__title" id="gwe-agree-title">
                Service Agreement
              </h2>
              <div className="gwe-modal__actions">
                <a ref={linkRef} className="gwe-modal__link" href={AGREEMENT_PDF} target="_blank" rel="noopener">
                  Open in new tab ↗
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  className="gwe-modal__close"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="gwe-modal__body">
              {!loaded && <div className="gwe-modal__fallback">Loading the agreement…</div>}
              <iframe
                className="gwe-modal__frame"
                title="Credit Danny Service Agreement"
                src={`${AGREEMENT_PDF}#view=FitH`}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ================================================================ form */

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <div className="gwe-error" id={id} role="alert">
      {message}
    </div>
  );
}

function Required() {
  return <span className="gwe-req">(Required)</span>;
}

export default function GiveawayEntryForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState<Values>({
    "input_8.6": "United States",
    "input_9.2": CONSENT_9_TEXT,
    "input_9.3": "14",
    "input_15.2": CONSENT_15_TEXT,
    "input_15.3": "14",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const [alert, setAlert] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const sigRef = useRef<SignaturePadHandle | null>(null);

  // Dynamic population from the query string (names, email, UTM tags). The
  // query string is client-only (empty during prerender/hydration, real value
  // right after), so it is read as an external store and merged at render
  // time instead of copied into state — `values` only holds what the user
  // typed, and wins over the prepopulated defaults.
  const search = useSyncExternalStore(
    subscribeNever,
    () => window.location.search,
    () => ""
  );
  const prepop = useMemo(() => {
    const q = new URLSearchParams(search);
    const found: Values = {};
    for (const [param, input] of PREPOPULATE) {
      const val = q.get(param);
      if (val) found[input] = val;
    }
    return found;
  }, [search]);

  const set = (name: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const val = e.target.value;
    setValues((prev) => ({ ...prev, [name]: val }));
  };
  const setChecked = (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.checked ? "1" : "";
    setValues((prev) => ({ ...prev, [name]: val }));
  };
  const clearError = (fieldId: string) =>
    setErrors((prev) => {
      if (!(fieldId in prev)) return prev;
      const next = { ...prev };
      delete next[fieldId];
      return next;
    });

  const scrollToTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  async function send(payload: { inputs: Values; sourcePage: number; targetPage: number }): Promise<ApiResponse> {
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as ApiResponse | null;
      return data ?? { error: GENERIC_ERROR };
    } catch {
      return { error: GENERIC_ERROR };
    }
  }

  function apply(res: ApiResponse) {
    if ("error" in res) {
      setAlert(res.error || GENERIC_ERROR);
      scrollToTop();
      return;
    }
    if (!res.ok) {
      setErrors(res.errors);
      setAlert(REVIEW_ERROR);
      if (Object.keys(res.errors).some((id) => PAGE_ONE_FIELDS.has(id))) setStep(1);
      scrollToTop();
      return;
    }
    if (res.complete) {
      if (res.redirect) {
        window.location.assign(res.redirect);
        return;
      }
      setDone(res.message || "Thanks for contacting us! We will get in touch with you shortly.");
      scrollToTop();
      return;
    }
    setErrors({});
    setAlert(null);
    setStep(2);
    scrollToTop();
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setAlert(null);
    const base: Values = { ...prepop, ...values, input_19: todayMdy() };
    const res =
      step === 1
        ? await send({ inputs: base, sourcePage: 1, targetPage: 2 })
        : await send({
            inputs: { ...base, [`input_${FORM_ID}_16_data`]: sigRef.current?.toDataUrl() ?? "" },
            sourcePage: 2,
            targetPage: 0,
          });
    setBusy(false);
    apply(res);
  }

  function onPrevious() {
    setAlert(null);
    setStep(1);
    scrollToTop();
  }

  const v = (name: string) => values[name] ?? prepop[name] ?? "";
  const err = (fieldId: string) => errors[fieldId];
  const fieldClass = (fieldId: string, extra = "") =>
    `gwe-field${extra ? ` ${extra}` : ""}${err(fieldId) ? " gwe-field--invalid" : ""}`;
  const describedBy = (fieldId: string) => (err(fieldId) ? `validation_message_${FORM_ID}_${fieldId}` : undefined);

  if (done) {
    return (
      <div className="gwe-form" ref={topRef}>
        <h2 className="gform_title">Free Credit Repair + $5,000 Giveaway</h2>
        <div className="gwe-confirm" role="status">
          {done}
        </div>
      </div>
    );
  }

  return (
    <div className="gwe-form" ref={topRef}>
      <h2 className="gform_title">Free Credit Repair + $5,000 Giveaway</h2>

      <div className="gwe-progress">
        <p className="gwe-progress-title" aria-live="polite">
          Step {step} of 2
        </p>
        <div
          className="gwe-progress-bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={step === 1 ? 50 : 100}
        >
          <div className="gwe-progress-fill" style={{ width: step === 1 ? "50%" : "100%" }} />
        </div>
      </div>

      <form id={`gform_${FORM_ID}`} onSubmit={onSubmit} noValidate>
        {alert && (
          <div className="gwe-alert" role="alert">
            {alert}
          </div>
        )}

        {step === 1 && (
          <div className="gwe-fields">
            <div className={fieldClass("3", "gwe-field--half")}>
              <label className="gwe-label" htmlFor={`input_${FORM_ID}_3`}>
                First Name
                <Required />
              </label>
              <input
                className="gwe-input"
                id={`input_${FORM_ID}_3`}
                name="input_3"
                type="text"
                autoComplete="given-name"
                value={v("input_3")}
                onChange={(e) => {
                  set("input_3")(e);
                  clearError("3");
                }}
                aria-required="true"
                aria-invalid={!!err("3")}
                aria-describedby={describedBy("3")}
              />
              <FieldError id={`validation_message_${FORM_ID}_3`} message={err("3")} />
            </div>

            <div className={fieldClass("4", "gwe-field--half")}>
              <label className="gwe-label" htmlFor={`input_${FORM_ID}_4`}>
                Last Name
                <Required />
              </label>
              <input
                className="gwe-input"
                id={`input_${FORM_ID}_4`}
                name="input_4"
                type="text"
                autoComplete="family-name"
                value={v("input_4")}
                onChange={(e) => {
                  set("input_4")(e);
                  clearError("4");
                }}
                aria-required="true"
                aria-invalid={!!err("4")}
                aria-describedby={describedBy("4")}
              />
              <FieldError id={`validation_message_${FORM_ID}_4`} message={err("4")} />
            </div>

            <div className={fieldClass("20", "gwe-field--half")}>
              <label className="gwe-label" htmlFor={`input_${FORM_ID}_20`}>
                Email
                <Required />
              </label>
              <input
                className="gwe-input"
                id={`input_${FORM_ID}_20`}
                name="input_20"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={v("input_20")}
                onChange={(e) => {
                  set("input_20")(e);
                  clearError("20");
                }}
                aria-required="true"
                aria-invalid={!!err("20")}
                aria-describedby={describedBy("20")}
              />
              <FieldError id={`validation_message_${FORM_ID}_20`} message={err("20")} />
            </div>

            <div className={fieldClass("7", "gwe-field--half")}>
              <label className="gwe-label" htmlFor={`input_${FORM_ID}_7`}>
                Phone
                <Required />
              </label>
              <input
                className="gwe-input"
                id={`input_${FORM_ID}_7`}
                name="input_7"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(###) ###-####"
                value={v("input_7")}
                onChange={(e) => {
                  set("input_7")(e);
                  clearError("7");
                }}
                onBlur={(e) => {
                  const formatted = formatPhone(e.target.value);
                  if (formatted !== e.target.value) setValues((prev) => ({ ...prev, input_7: formatted }));
                }}
                aria-required="true"
                aria-invalid={!!err("7")}
                aria-describedby={describedBy("7")}
              />
              <FieldError id={`validation_message_${FORM_ID}_7`} message={err("7")} />
            </div>

            <fieldset className={fieldClass("8")} aria-describedby={describedBy("8")}>
              <legend className="gwe-label">
                Address
                <Required />
              </legend>
              <div className="gwe-address">
                <div className="gwe-sub gwe-sub--full">
                  <input
                    className="gwe-input"
                    id={`input_${FORM_ID}_8_1`}
                    name="input_8.1"
                    type="text"
                    autoComplete="address-line1"
                    value={v("input_8.1")}
                    onChange={(e) => {
                      set("input_8.1")(e);
                      clearError("8");
                    }}
                    aria-required="true"
                    aria-invalid={!!err("8")}
                  />
                  <label className="gwe-sublabel" htmlFor={`input_${FORM_ID}_8_1`}>
                    Street Address
                  </label>
                </div>
                <div className="gwe-sub gwe-sub--full">
                  <input
                    className="gwe-input"
                    id={`input_${FORM_ID}_8_2`}
                    name="input_8.2"
                    type="text"
                    autoComplete="address-line2"
                    value={v("input_8.2")}
                    onChange={set("input_8.2")}
                  />
                  <label className="gwe-sublabel" htmlFor={`input_${FORM_ID}_8_2`}>
                    Address Line 2
                  </label>
                </div>
                <div className="gwe-sub">
                  <input
                    className="gwe-input"
                    id={`input_${FORM_ID}_8_3`}
                    name="input_8.3"
                    type="text"
                    autoComplete="address-level2"
                    value={v("input_8.3")}
                    onChange={(e) => {
                      set("input_8.3")(e);
                      clearError("8");
                    }}
                    aria-required="true"
                    aria-invalid={!!err("8")}
                  />
                  <label className="gwe-sublabel" htmlFor={`input_${FORM_ID}_8_3`}>
                    City
                  </label>
                </div>
                <div className="gwe-sub">
                  <select
                    className="gwe-input"
                    id={`input_${FORM_ID}_8_4`}
                    name="input_8.4"
                    autoComplete="address-level1"
                    value={v("input_8.4")}
                    onChange={(e) => {
                      set("input_8.4")(e);
                      clearError("8");
                    }}
                    aria-required="true"
                    aria-invalid={!!err("8")}
                  >
                    <option value=""></option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <label className="gwe-sublabel" htmlFor={`input_${FORM_ID}_8_4`}>
                    State
                  </label>
                </div>
                <div className="gwe-sub">
                  <input
                    className="gwe-input"
                    id={`input_${FORM_ID}_8_5`}
                    name="input_8.5"
                    type="text"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    value={v("input_8.5")}
                    onChange={(e) => {
                      set("input_8.5")(e);
                      clearError("8");
                    }}
                    aria-required="true"
                    aria-invalid={!!err("8")}
                  />
                  <label className="gwe-sublabel" htmlFor={`input_${FORM_ID}_8_5`}>
                    ZIP Code
                  </label>
                </div>
              </div>
              <FieldError id={`validation_message_${FORM_ID}_8`} message={err("8")} />
            </fieldset>
          </div>
        )}

        {step === 2 && (
          <div className="gwe-fields">
            <div className="gwe-field gwe-page2-intro">
              <h2>YOUR CUSTOM SERVICE AGREEMENT</h2>
              <p>Please review your agreement before signing</p>
              <AgreementViewer />
            </div>

            <fieldset className={fieldClass("9")}>
              <legend className="gwe-label">
                Credit Monitoring Consent
                <Required />
              </legend>
              <div className="gwe-consent">
                <input
                  id={`input_${FORM_ID}_9_1`}
                  name="input_9.1"
                  type="checkbox"
                  value="1"
                  checked={v("input_9.1") === "1"}
                  onChange={(e) => {
                    setChecked("input_9.1")(e);
                    clearError("9");
                  }}
                  aria-required="true"
                  aria-invalid={!!err("9")}
                  aria-describedby={describedBy("9")}
                />
                <label htmlFor={`input_${FORM_ID}_9_1`}>{CONSENT_9_TEXT}</label>
              </div>
              <FieldError id={`validation_message_${FORM_ID}_9`} message={err("9")} />
            </fieldset>

            <fieldset className={fieldClass("15")}>
              <legend className="gwe-label">
                Service Agreement Acknowledgement
                <Required />
              </legend>
              <div className="gwe-consent">
                <input
                  id={`input_${FORM_ID}_15_1`}
                  name="input_15.1"
                  type="checkbox"
                  value="1"
                  checked={v("input_15.1") === "1"}
                  onChange={(e) => {
                    setChecked("input_15.1")(e);
                    clearError("15");
                  }}
                  aria-required="true"
                  aria-invalid={!!err("15")}
                  aria-describedby={describedBy("15")}
                />
                <label htmlFor={`input_${FORM_ID}_15_1`}>{CONSENT_15_TEXT}</label>
              </div>
              <FieldError id={`validation_message_${FORM_ID}_15`} message={err("15")} />
            </fieldset>

            <div className={fieldClass("16")}>
              <label className="gwe-label" htmlFor={`input_${FORM_ID}_16`}>
                Signature
                <Required />
              </label>
              <SignaturePad
                id={`input_${FORM_ID}_16`}
                padRef={sigRef}
                invalid={!!err("16")}
                describedBy={describedBy("16")}
                onInk={() => clearError("16")}
              />
              <FieldError id={`validation_message_${FORM_ID}_16`} message={err("16")} />
            </div>
          </div>
        )}

        <div className="gwe-footer">
          {step === 2 && (
            <button type="button" className="gwe-btn gwe-btn--secondary" onClick={onPrevious} disabled={busy}>
              Previous
            </button>
          )}
          <button type="submit" className="gwe-btn" disabled={busy}>
            {busy ? "Please wait…" : step === 1 ? "Next" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
