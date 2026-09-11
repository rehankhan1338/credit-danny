import Link from "next/link";

/**
 * The Elementor site header (template 27261936) used by the pages still built
 * from Elementor templates: privacy policy, terms and conditions, credit
 * education. Lifted verbatim from the legal pages; only the self-referencing
 * "#" anchors on dropdown parents were made page-independent.
 */
export default function SharedHeaderElementor() {
  return (
  <header data-elementor-type="header" data-elementor-id="27261936" className="elementor elementor-27261936 elementor-location-header" data-elementor-post-type="elementor_library">
    <div className="elementor-element elementor-element-36a3c8c2 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent" data-id="36a3c8c2" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"gradient\",\"sticky\":\"top\",\"sticky_on\":[\"desktop\",\"tablet\",\"mobile\"],\"sticky_offset\":0,\"sticky_effects_offset\":0,\"sticky_anchor_link_offset\":0}"}>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-7cf38cab e-con-full e-flex e-con e-child" data-id="7cf38cab" data-element_type="container" data-e-type="container">
          <div className="elementor-element elementor-element-b734cf2 e-con-full e-flex e-con e-child" data-id="b734cf2" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-53c28703 elementor-widget elementor-widget-image" data-id="53c28703" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
              {" "}
              <Link href="/">
                {" "}
                <img fetchPriority="high" width="1394" height="261" src="/assets/img/credit-danny-logo_white.png" className="attachment-full size-full wp-image-27262670" alt={"Text reads \"CREDIT DANNY\" in bold, white uppercase letters against a transparent background."} srcSet="/assets/img/credit-danny-logo_white.png 1394w, /assets/img/credit-danny-logo_white-300x56.png 300w, /assets/img/credit-danny-logo_white-1024x192.png 1024w, /assets/img/credit-danny-logo_white-768x144.png 768w" sizes="(max-width: 1394px) 100vw, 1394px" />
                {" "}
              </Link>
              {" "}
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-7895f86 e-con-full e-flex e-con e-child" data-id="7895f86" data-element_type="container" data-e-type="container">
          <div className="elementor-element elementor-element-7a5dc780 elementor-nav-menu__align-start elementor-widget-mobile__width-inherit elementor-hidden-tablet elementor-hidden-mobile elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="7a5dc780" data-element_type="widget" data-e-type="widget" data-settings={"{\"layout\":\"horizontal\",\"submenu_icon\":{\"value\":\"<i class=\\\"fas fa-caret-down\\\" aria-hidden=\\\"true\\\"><\\/i>\",\"library\":\"fa-solid\"},\"toggle\":\"burger\"}"} data-widget_type="nav-menu.default">
            <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
              <ul id="menu-1-7a5dc780" className="elementor-nav-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268754">
                  <Link href="/plans/" className="elementor-item">
                    {"Our Plans & Pricing"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27267231">
                  <Link href="/blueprint/" className="elementor-item">
                    {"Credit Blueprint"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27269515">
                  <Link href="/sponsorship/" className="elementor-item">
                    {"Free Credit Repair"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-27261970">
                  <Link href="#" className="elementor-item elementor-item-anchor">
                    {"More"}
                  </Link>
                  {" "}
                  <ul className="sub-menu elementor-nav-menu--dropdown">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268963">
                      <Link href="/accelerator/" className="elementor-sub-item">
                        {"Credit Accelerator"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27267507">
                      <Link href="/blueprint-strategy/" className="elementor-sub-item">
                        {"Book a Consultation"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261969">
                      <Link href="/about/" className="elementor-sub-item">
                        {"About Credit Danny"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261971">
                      <Link href="/transformations/" className="elementor-sub-item">
                        {"Testimonials"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-27262560">
                      <Link href="/#reviews" className="elementor-sub-item elementor-item-anchor">
                        {"Reviews"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261978">
                      <Link href="/home-buying-blueprint/" className="elementor-sub-item">
                        {"90 Day Home Buying Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-27262561">
                      <Link href="/#guarantee" className="elementor-sub-item elementor-item-anchor">
                        {"Money Back Guarantee"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27262716">
                      <a href="https://creditdanny.com/blog/" className="elementor-sub-item">
                        {"The Credit Danny Blog"}
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27270321">
                      <Link href="/mentorship/" className="elementor-sub-item">
                        {"Credit Danny Mentorship"}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {" "}
            </nav>
            <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Menu Toggle" aria-expanded="false">
              {" "}
              <svg className="cd-icon cd-icon-menu-bar" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
              <svg className="cd-icon cd-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z" />
              </svg>
              {" "}
            </div>
            <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
              <ul id="menu-2-7a5dc780" className="elementor-nav-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268754">
                  <Link href="/plans/" className="elementor-item" tabIndex={-1}>
                    {"Our Plans & Pricing"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27267231">
                  <Link href="/blueprint/" className="elementor-item" tabIndex={-1}>
                    {"Credit Blueprint"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27269515">
                  <Link href="/sponsorship/" className="elementor-item" tabIndex={-1}>
                    {"Free Credit Repair"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-27261970">
                  <Link href="#" className="elementor-item elementor-item-anchor" tabIndex={-1}>
                    {"More"}
                  </Link>
                  {" "}
                  <ul className="sub-menu elementor-nav-menu--dropdown">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268963">
                      <Link href="/accelerator/" className="elementor-sub-item" tabIndex={-1}>
                        {"Credit Accelerator"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27267507">
                      <Link href="/blueprint-strategy/" className="elementor-sub-item" tabIndex={-1}>
                        {"Book a Consultation"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261969">
                      <Link href="/about/" className="elementor-sub-item" tabIndex={-1}>
                        {"About Credit Danny"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261971">
                      <Link href="/transformations/" className="elementor-sub-item" tabIndex={-1}>
                        {"Testimonials"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-27262560">
                      <Link href="/#reviews" className="elementor-sub-item elementor-item-anchor" tabIndex={-1}>
                        {"Reviews"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261978">
                      <Link href="/home-buying-blueprint/" className="elementor-sub-item" tabIndex={-1}>
                        {"90 Day Home Buying Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-27262561">
                      <Link href="/#guarantee" className="elementor-sub-item elementor-item-anchor" tabIndex={-1}>
                        {"Money Back Guarantee"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27262716">
                      <a href="https://creditdanny.com/blog/" className="elementor-sub-item" tabIndex={-1}>
                        {"The Credit Danny Blog"}
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27270321">
                      <Link href="/mentorship/" className="elementor-sub-item" tabIndex={-1}>
                        {"Credit Danny Mentorship"}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {" "}
            </nav>
          </div>
        </div>
        <div className="elementor-element elementor-element-20e9dcc9 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-id="20e9dcc9" data-element_type="container" data-e-type="container">
          <div className="elementor-element elementor-element-495902fe elementor-align-center elementor-widget elementor-widget-button" data-id="495902fe" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
            {" "}
            <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href="/get-started/">
              {" "}
              <span className="elementor-button-content-wrapper">
                {" "}
                <span className="elementor-button-text">
                  {"Get Started"}
                </span>
                {" "}
              </span>
              {" "}
            </Link>
            {" "}
          </div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-62dafc5 elementor-hidden-desktop e-flex e-con-boxed e-con e-parent" data-id="62dafc5" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"gradient\",\"sticky\":\"top\",\"sticky_on\":[\"desktop\",\"tablet\",\"mobile\"],\"sticky_offset\":0,\"sticky_effects_offset\":0,\"sticky_anchor_link_offset\":0}"}>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-616865e e-con-full e-flex e-con e-child" data-id="616865e" data-element_type="container" data-e-type="container">
          <div className="elementor-element elementor-element-f9bd879 e-con-full e-flex e-con e-child" data-id="f9bd879" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-fa8116c elementor-widget elementor-widget-image" data-id="fa8116c" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
              {" "}
              <Link href="/">
                {" "}
                <img fetchPriority="high" width="1394" height="261" src="/assets/img/credit-danny-logo_white.png" className="attachment-full size-full wp-image-27262670" alt={"Text reads \"CREDIT DANNY\" in bold, white uppercase letters against a transparent background."} srcSet="/assets/img/credit-danny-logo_white.png 1394w, /assets/img/credit-danny-logo_white-300x56.png 300w, /assets/img/credit-danny-logo_white-1024x192.png 1024w, /assets/img/credit-danny-logo_white-768x144.png 768w" sizes="(max-width: 1394px) 100vw, 1394px" />
                {" "}
              </Link>
              {" "}
            </div>
          </div>
          <div className="elementor-element elementor-element-3149216 e-con-full e-flex e-con e-child" data-id="3149216" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-99fba2b elementor-align-justify elementor-mobile-align-right elementor-hidden-desktop elementor-widget elementor-widget-button" data-id="99fba2b" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
              {" "}
              <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href="/get-started/">
                {" "}
                <span className="elementor-button-content-wrapper">
                  {" "}
                  <span className="elementor-button-text">
                    {"Get Started"}
                  </span>
                  {" "}
                </span>
                {" "}
              </Link>
              {" "}
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-b968be5 e-con-full e-flex e-con e-child" data-id="b968be5" data-element_type="container" data-e-type="container">
          <div className="elementor-element elementor-element-9eb3f70 elementor-nav-menu__align-start elementor-widget-mobile__width-inherit elementor-hidden-tablet elementor-hidden-mobile elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="9eb3f70" data-element_type="widget" data-e-type="widget" data-settings={"{\"layout\":\"horizontal\",\"submenu_icon\":{\"value\":\"<i class=\\\"fas fa-caret-down\\\" aria-hidden=\\\"true\\\"><\\/i>\",\"library\":\"fa-solid\"},\"toggle\":\"burger\"}"} data-widget_type="nav-menu.default">
            <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
              <ul id="menu-1-9eb3f70" className="elementor-nav-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268754">
                  <Link href="/plans/" className="elementor-item">
                    {"Our Plans & Pricing"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27267231">
                  <Link href="/blueprint/" className="elementor-item">
                    {"Credit Blueprint"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27269515">
                  <Link href="/sponsorship/" className="elementor-item">
                    {"Free Credit Repair"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-27261970">
                  <Link href="#" className="elementor-item elementor-item-anchor">
                    {"More"}
                  </Link>
                  {" "}
                  <ul className="sub-menu elementor-nav-menu--dropdown">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268963">
                      <Link href="/accelerator/" className="elementor-sub-item">
                        {"Credit Accelerator"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27267507">
                      <Link href="/blueprint-strategy/" className="elementor-sub-item">
                        {"Book a Consultation"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261969">
                      <Link href="/about/" className="elementor-sub-item">
                        {"About Credit Danny"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261971">
                      <Link href="/transformations/" className="elementor-sub-item">
                        {"Testimonials"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-27262560">
                      <Link href="/#reviews" className="elementor-sub-item elementor-item-anchor">
                        {"Reviews"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261978">
                      <Link href="/home-buying-blueprint/" className="elementor-sub-item">
                        {"90 Day Home Buying Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-27262561">
                      <Link href="/#guarantee" className="elementor-sub-item elementor-item-anchor">
                        {"Money Back Guarantee"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27262716">
                      <a href="https://creditdanny.com/blog/" className="elementor-sub-item">
                        {"The Credit Danny Blog"}
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27270321">
                      <Link href="/mentorship/" className="elementor-sub-item">
                        {"Credit Danny Mentorship"}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {" "}
            </nav>
            <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Menu Toggle" aria-expanded="false">
              {" "}
              <svg className="cd-icon cd-icon-menu-bar" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
              <svg className="cd-icon cd-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z" />
              </svg>
              {" "}
            </div>
            <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
              <ul id="menu-2-9eb3f70" className="elementor-nav-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268754">
                  <Link href="/plans/" className="elementor-item" tabIndex={-1}>
                    {"Our Plans & Pricing"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27267231">
                  <Link href="/blueprint/" className="elementor-item" tabIndex={-1}>
                    {"Credit Blueprint"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27269515">
                  <Link href="/sponsorship/" className="elementor-item" tabIndex={-1}>
                    {"Free Credit Repair"}
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-27261970">
                  <Link href="#" className="elementor-item elementor-item-anchor" tabIndex={-1}>
                    {"More"}
                  </Link>
                  {" "}
                  <ul className="sub-menu elementor-nav-menu--dropdown">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268963">
                      <Link href="/accelerator/" className="elementor-sub-item" tabIndex={-1}>
                        {"Credit Accelerator"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27267507">
                      <Link href="/blueprint-strategy/" className="elementor-sub-item" tabIndex={-1}>
                        {"Book a Consultation"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261969">
                      <Link href="/about/" className="elementor-sub-item" tabIndex={-1}>
                        {"About Credit Danny"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261971">
                      <Link href="/transformations/" className="elementor-sub-item" tabIndex={-1}>
                        {"Testimonials"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-27262560">
                      <Link href="/#reviews" className="elementor-sub-item elementor-item-anchor" tabIndex={-1}>
                        {"Reviews"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261978">
                      <Link href="/home-buying-blueprint/" className="elementor-sub-item" tabIndex={-1}>
                        {"90 Day Home Buying Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-27262561">
                      <Link href="/#guarantee" className="elementor-sub-item elementor-item-anchor" tabIndex={-1}>
                        {"Money Back Guarantee"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27262716">
                      <a href="https://creditdanny.com/blog/" className="elementor-sub-item" tabIndex={-1}>
                        {"The Credit Danny Blog"}
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27270321">
                      <Link href="/mentorship/" className="elementor-sub-item" tabIndex={-1}>
                        {"Credit Danny Mentorship"}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {" "}
            </nav>
          </div>
          <div className="elementor-element elementor-element-397a78d elementor-mobile-align-center elementor-tablet-align-center elementor-hidden-desktop elementor-widget elementor-widget-button" data-id="397a78d" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
            {" "}
            <Link className="elementor-button elementor-button-link elementor-size-sm" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI3MjY5MDM2IiwidG9nZ2xlIjpmYWxzZX0%3D">
              {" "}
              <span className="elementor-button-content-wrapper">
                {" "}
                <span className="elementor-button-icon">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="512" viewBox="0 0 512 512" width="512" data-name="Layer 1">
                    <path d="m35.021 218.979h441.958a37.021 37.021 0 0 1 0 74.042h-441.958a37.021 37.021 0 0 1 0-74.042zm441.958 32h-441.958a5.022 5.022 0 0 0 0 10.044h441.958a5.022 5.022 0 0 0 0-10.044zm-441.958-175.022h441.958a37.022 37.022 0 0 1 0 74.043h-441.958a37.022 37.022 0 0 1 0-74.043zm441.958 32h-441.958a5.022 5.022 0 0 0 0 10.043h441.958a5.022 5.022 0 0 0 0-10.043zm-441.958 254.043h441.958a37.022 37.022 0 0 1 0 74.043h-441.958a37.022 37.022 0 0 1 0-74.043zm441.958 32h-441.958a5.022 5.022 0 0 0 0 10.043h441.958a5.022 5.022 0 0 0 0-10.043zm-441.958-276h441.958a5.022 5.022 0 0 0 0-10.043h-441.958a5.022 5.022 0 0 0 0 10.043zm441.958 132.978h-441.958a5.022 5.022 0 0 0 0 10.044h441.958a5.022 5.022 0 0 0 0-10.044zm0 143.022h-441.958a5.022 5.022 0 0 0 0 10.043h441.958a5.022 5.022 0 0 0 0-10.043z" fillRule="evenodd" />
                  </svg>
                  {" "}
                </span>
                {" "}
              </span>
              {" "}
            </Link>
            {" "}
          </div>
        </div>
        <div className="elementor-element elementor-element-0a62a52 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-id="0a62a52" data-element_type="container" data-e-type="container">
          <div className="elementor-element elementor-element-cec8624 elementor-align-center elementor-widget elementor-widget-button" data-id="cec8624" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
            {" "}
            <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href="https://creditdanny.com/find-plan">
              {" "}
              <span className="elementor-button-content-wrapper">
                {" "}
                <span className="elementor-button-text">
                  {"Get Started"}
                </span>
                {" "}
              </span>
              {" "}
            </a>
            {" "}
          </div>
        </div>
      </div>
    </div>
  </header>

  );
}
