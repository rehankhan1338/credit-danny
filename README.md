# creditdanny.com — Next.js migration

Static WordPress export → **Next.js 16 (App Router, TypeScript strict, fully SSG)**.
Every page, metadata string, JSON-LD payload, heading, alt text and anchor is
verified character-for-character against the original HTML (see *Verification*).

## URL scheme — read this first

The live ranking URLs **already end in a trailing slash** (`/about/` → 200;
`/about.html` → 404 on production — verified 2026-08-17). This repo therefore
uses `trailingSlash: true` and **no ranking URL changes at all**. Canonicals
are byte-identical to production. The `.html` → `/page/` redirects in
`next.config.ts` are defensive coverage for old backlinks/mirrors, one hop
each, `permanent: true`.

One deliberate exception: `mentorship/apply.html` carried a stale canonical
(`/mentorship/apply/`, which 301s on live). Its route, canonical, og:url and
JSON-LD now use the URL that actually resolves: **`/mentorship-apply/`**.

Two source pages deviate from the one-H1 ideal and are preserved as-is:
`home-buying-blueprint` has 2 h1s, `mentorship` has 0.

## The blog: hybrid — Next serves it, WordPress feeds it

Post detail pages (/{slug}/) and /category/credit-insights/ are served BY
NEXT with WordPress as the data source:
- posts: each WP-rendered page is fetched hourly (ISR) and its head SEO
  (Rank Math titles/descriptions/JSON-LD — not available via REST) plus the
  #cdb article region are re-served verbatim inside the Next shell
  (app/[slug]/page.tsx + lib/wp-post.ts). New posts render on first visit,
  no redeploy. Edits in wp-admin appear within the hour.
- the Credit Insights archive builds its listing from the WP REST API
  (lib/wp.ts), same cadence.
Still WordPress via proxy: /blog/, the other two category archives,
/author/*, feeds, Rank Math sitemaps, /wp-content/uploads/*. proxy.ts
rewrites the single-segment WP paths (/blog/, /feed/, root sitemap XMLs)
before routing so the [slug] post route cannot shadow them.

> ### ⚠️ Before pointing DNS at this deployment
> Set the env var `WP_ORIGIN` to a hostname that still reaches WordPress
> directly (e.g. `https://origin.creditdanny.com`). The default is
> `https://creditdanny.com`, which is correct for previews **but becomes a
> proxy loop after cutover** if left unchanged.
> Also keep the WP origin serving `sitemap_index.xml` + post/category/author
> sitemaps; Next serves `page-sitemap.xml` itself (lastmods frozen at the
> live values from 2026-08-17 — bump entries in
> `app/page-sitemap.xml/route.ts` when a page meaningfully changes).

Hosting must be a Node build (`next build` + `next start`, or Vercel). A pure
static export would silently drop the redirects, the proxy and the
case-insensitivity shim.

## Layout of the code

- `app/<page>/page.tsx` — flat routes under a **single root layout**
  (`app/layout.tsx` → `components/Shell.tsx`), which is what makes link
  clicks client-side navigations instead of full reloads. `<body>`
  server-renders the class set shared by all 19 pages — audited to be the
  only classes any CSS/JS references (incl. `.elementor-kit-27255861`) —
  and each page's `components/BodyClass.tsx` restores its exact original
  class string before paint. `components/behaviors/BehaviorsGate.tsx`
  remounts the behavior suite per pathname (the modules scan the DOM on
  mount) and fires the Meta Pixel PageView on route changes (GA4 enhanced
  measurement and Clicky track history changes themselves).
- `components/shared/` — header/footer/nav blocks extracted where byte-identical
  across 2+ pages (7 components, auto-extracted by hash).
- `components/behaviors/` — the React port of `assets/js/main.js` (SmartBar,
  FullScreenMenu, SmoothScroll, Modal, PannedSlots, PlayMarks, Counters,
  StickyStrip, Reveal, HeroSound, LottiePlayers), mounted once in Shell.
- `components/effects/` — ports of the 7 per-page scripts
  (`assets/js/pages/*.js`), mounted by their pages.
- `proxy.ts` — case-insensitivity shim: live nginx serves `/TEAM/` = `/team/`
  at 200; Next is case-sensitive, so uppercase variants 308 to the lowercase
  canonical (an improvement over live's duplicate-content 200s), folding the
  `.html` mapping into the same hop.
- `public/assets/**`, `public/wp-content/**` — every image/video/font at its
  original path. **Do not rename or move.**
- Root `*.html` files — the migration source of truth. Not served (only
  `public/` is). Keep them: the verification suite diffs against them.
- `scripts/convert.mjs` — the HTML→TSX converter that generated the pages.
  Re-run with `npm run convert` only if you edit the source HTML.

## Third-party scripts

GA4, Clicky, Meta Pixel, Wistia, GoHighLevel forms, Trustindex and the
SearchAtlas/OTTO optimizer load via `next/script` (`afterInteractive`) or a
post-hydration effect (`components/OttoSeo.tsx`). Payloads are byte-identical
to the original; only the injection point moved, because several of them
mutate the DOM and executing during parse raced React hydration into
intermittent #418 errors. Verified: zero hydration/console errors on all 19
pages (`scripts/verify-console.mjs`, headless Chrome).

The tiny pre-paint JS-detection one-liners (`ca-js`/`pl-js`/… on `<html>`)
remain raw inline scripts — the reveal CSS needs them before first paint —
with `suppressHydrationWarning` on `<html>` to match.

`assets/css/legacy-elementor.css` (the two legal pages) is served
byte-identical via `<link>` rather than the bundler: the export mangled some
selectors and browsers' CSS error recovery must stay exactly as it is today.

## Commands

```
npm run dev          # dev server
npm run build        # production build (all pages SSG)
npm start            # serve production build
npm run lint         # eslint (flat config; next lint was removed in Next 16)
npm run convert      # regenerate pages from the root *.html sources

# with `npm start` running on :3100:
node scripts/verify-seo.mjs        # 19/19 SEO parity vs original HTML
node scripts/verify-redirects.mjs  # every legacy URL: one permanent hop
node scripts/verify-console.mjs    # headless-Chrome console/hydration sweep
node scripts/verify-spa-nav.mjs    # proves link clicks navigate without reload
```

## Performance measures (2026-09-03)

- **Hero video** — `components/HeroVideo.tsx` paints a poster
  (`assets/img/site-video-header-poster.webp`) and attaches the re-encoded
  `assets/video/site-video-header_new-720.mp4` (3.6 MB, was 18 MB) only after
  the window `load` event. The original mp4 is kept on disk but unreferenced.
- **Third-party scripts** — Wistia (`components/WistiaLoader.tsx`),
  Trustindex and Lottie load when their element nears the viewport; GA4,
  Clicky, Meta Pixel and the GoHighLevel `form_embed.js` use `lazyOnload`;
  OTTO waits for idle time. Payload URLs and IDs are unchanged.
- **Images** — the 44 base64 data-URIs that were inlined in the markup live in
  `assets/img/inline-<hash>.webp`; heavy PNG/JPGs have WebP siblings (originals
  kept, per the do-not-rename rule); `<img>`s carry intrinsic `width`/`height`
  where the inline style already fixes the height. Iframes are `loading="lazy"`.
- **Fonts** — the `@font-face` `url()`s point at `/assets/fonts/…` (immutable
  cache header) so `components/Shell.tsx` can preload podium + poppins 400/700.
- Re-generate WebP siblings / posters with `sharp` (already a dependency of
  Next) — see the git history of this section's commit for the one-off scripts.
