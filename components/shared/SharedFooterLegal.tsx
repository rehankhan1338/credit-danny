import Link from "next/link";

/**
 * The compact site footer used by the live legal pages (privacy policy,
 * terms and conditions): logo, quick links, copyright and legal links.
 * Markup lifted from the live creditdanny.com pages; hover styles live in
 * public/assets/css/pages/legal.css (.er-foot / .scp2).
 */
export default function SharedFooterLegal() {
  return (
    <footer style={{ "background": "rgb(0, 0, 0)", "padding": "44px 40px" }} className="er-foot">
      <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "40px", "flexWrap": "wrap" }}>
        <img decoding="async" width="1394" height="261" src="/assets/img/logo-white.png" alt="Credit Danny" style={{ "height": "26px", "width": "auto", "display": "block" }} />
        <nav style={{ "display": "flex", "alignItems": "center", "gap": "32px", "fontSize": "13px", "color": "rgba(255, 255, 255, 0.62)" }}>
          <Link href="/plans/" className="scp2" style={{ "color": "inherit", "transition": "color 0.18s", "cursor": "pointer" }}>
            {"Plans"}
          </Link>
          <Link href="/about/" className="scp2" style={{ "color": "inherit", "transition": "color 0.18s", "cursor": "pointer" }}>
            {"About"}
          </Link>
          <Link href="/transformations/" className="scp2" style={{ "color": "inherit", "transition": "color 0.18s", "cursor": "pointer" }}>
            {"Transformations"}
          </Link>
          <Link href="/#reviews" className="scp2" style={{ "color": "inherit", "transition": "color 0.18s", "cursor": "pointer" }}>
            {"Reviews"}
          </Link>
          <Link href="/get-started/" className="scp2" style={{ "color": "inherit", "transition": "color 0.18s", "cursor": "pointer" }}>
            {"Contact"}
          </Link>
        </nav>
      </div>
      <div style={{ "maxWidth": "1280px", "margin": "32px auto 0px", "paddingTop": "22px", "borderTop": "1px solid rgba(255, 255, 255, 0.09)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px", "flexWrap": "wrap", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.38)" }} className="er-legal">
        <span>{"© 2026 Elevate Financial Services, LLC"}</span>
        <div style={{ "display": "flex", "gap": "26px" }}>
          <Link href="/privacy-policy/" className="scp2" style={{ "color": "inherit", "transition": "color 0.18s", "cursor": "pointer" }}>
            {"Privacy Policy"}
          </Link>
          <Link href="/terms-and-conditions/" className="scp2" style={{ "color": "inherit", "transition": "color 0.18s", "cursor": "pointer" }}>
            {"Terms and Conditions"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
