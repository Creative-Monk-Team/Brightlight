import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar1.module.css";

// ASSETS (kept only those actually used)
import BrightlightBlueLogo from "../assets/brlightlight-icon.webp";
import LocationIcon from "../assets/location-white.png";
import EmailIcon from "../assets/mail-white.png";
import EmailBlue from "../assets/mailBlue.png";
import LocationBlue from "../assets/locationBlue.png";
import Search from "../assets/search.svg";
import TikTokIcon from "../assets/tiktok.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import FacebookIcon from "../assets/facebook.svg";
import YouTubeIcon from "../assets/youtube.svg";
import Facebookblue from "../assets/facebookBlue.png";
import Youtubeblue from "../assets/youtubeBlue.png";
import Instagramblue from "../assets/instagramBlue.png";
import Linkedinblue from "../assets/linkedinBlue.png";
import Tiktokblue from "../assets/tiktokBlue.png";
import whiteLogo from "../assets/brightlight-logo-white.png";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

/* ------------------------------
   1) SINGLE SOURCE OF TRUTH: MENU
   Edit here to add/remove/rename links.
   Structure keys:
   - id, label, href (optional if purely a toggle in desktop)
   - children: [] (nested)
   - nestedContainer: "permanent" | "double" (override which dropdown box class to use for this node’s children on desktop)
---------------------------------*/
const SERVICES_MENU = [
  {
    id: "pr",
    label: "Permanent Residency",
    href: "/permanent-residency",
    nestedContainer: "permanent",
    children: [
      {
        id: "express-entry",
        label: "Express Entry",
        href: "/express-entry",
        nestedContainer: "double",
        children: [
          { id: "fswp", label: "FSWP", href: "/federal-skilled-worker-program" },
          { id: "fstp", label: "FSTP", href: "/federal-skilled-trades-program" },
          { id: "cec", label: "CEC", href: "/canadian-experience-class" },
          {
            id: "category-based",
            label: "Category Based",
            href: "/category-based",
            nestedContainer: "double",
            children: [
              { id: "cat-french", label: "French Language Proficiency", href: "/french-targeted-draw" },
              { id: "cat-health", label: "Healthcare Occupations", href: "/healthcare-targeted-draw" },
              { id: "cat-stem", label: "STEM Occupations", href: "/stem-targeted-draw" },
              { id: "cat-trade", label: "Trade Occupations", href: "/trade-occupation-targeted-draw" },
              { id: "cat-transport", label: "Transport Occupation Targeted Draws", href: "/transport-occupation-targeted-draw" },
              { id: "cat-agri", label: "Agriculture and Agri-Food Occupation", href: "/agriculture-agri-food-occupation" },
            ],
          },
        ],
      },
      {
        id: "pilot",
        label: "Pilot Program",
        href: "/pilot-programs",
        nestedContainer: "double",
        children: [{ id: "agri-food", label: "Agri Food Pilot", href: "/agri-food-pilot-program" }],
      },
      {
        id: "pnp",
        label: "Provincial Nominee Programs (PNP)",
        href: "/pnp",
        nestedContainer: "double",
        children: [
          {
            id: "bcpnp",
            label: "BCPNP",
            href: "/bc-pnp",
            nestedContainer: "double",
            children: [
              { id: "bcpnp-skilled", label: "Skilled Worker", href: "/skilled-worker-stream" },
              { id: "bcpnp-health", label: "Health Authority", href: "/health-authority-stream" },
              { id: "bcpnp-elss", label: "Entry Level and Semi-Skilled (ELSS)", href: "/entry-level-semi-skilled" },
              { id: "bcpnp-ig", label: "International Graduate", href: "/international-graduate-program" },
              { id: "bcpnp-ipg", label: "International Post-Graduate", href: "/international-post-graduate-program" },
              { id: "bcpnp-priorities", label: "Program Priorities", href: "/priorities-program" },
            ],
          },
        ],
      },
      {
        id: "other-pr",
        label: "Other PR Pathways",
        href: "#",
        nestedContainer: "double",
        children: [
          { id: "rnip", label: "RNIP (Rural and Northern Immigration Pilot)", href: "/rnip" },
          { id: "rcip", label: "RCIP (Rural Community Immigration Pilot)", href: "/rcip" },
        ],
      },
    ],
  },

  {
    id: "temporary",
    label: "Temporary Residency",
    href: "/temporary-resident",
    nestedContainer: "permanent",
    children: [
      { id: "super-visa", label: "Super Visa", href: "/super-visa" },
      {
        id: "visitor-visa",
        label: "Visitor Visa",
        href: "/visitor-visa",
        nestedContainer: "double",
        children: [
          { id: "business-visitor", label: "Business Visitor Visa", href: "/business-visitor-visa" },
          { id: "dual-intent", label: "Dual Intent Visa", href: "/dual-intent-visa" },
          { id: "reconsideration", label: "Reconsideration for Refusal", href: "/reconsideration" },
        ],
      },
      { id: "trp", label: "Temporary Resident Permits", href: "/temporary-resident-permit-draft" },
      { id: "restoration", label: "Restoration", href: "/restoration-status-draft" },
      { id: "extend-stay", label: "Extend Stay", href: "/extensions-draft" },
      { id: "flagpoling", label: "Flagpoling", href: "/flagpoling" },
      {
        id: "spousal-owp",
        label: "Spousal Open Work Permit",
        href: "/spousal-open-work-permit",
        nestedContainer: "double",
        children: [
          { id: "owp-spouse-worker", label: "Open Work Permit - For Spouse of Worker", href: "/common-law-partner-temporary" },
          { id: "owp-spouse-student", label: "Open Work Permit - For Spouse of Student", href: "/cby" },
          { id: "owp-pr-inland", label: "PR Open Work Permit, Inland", href: "/open-work-permit-for-spouse-inland" },
          { id: "owp-franco", label: "Francophone Mobility Program", href: "/francophone-mobility-program" },
        ],
      },
    ],
  },

  {
    id: "student",
    label: "Student Visa",
    href: "/student-visa",
    nestedContainer: "permanent",
    children: [
      {
        id: "outside-canada",
        label: "Outside Canada",
        href: "/outside-canada",
        nestedContainer: "double",
        children: [
          { id: "sds", label: "SDS", href: "/sds" },
          { id: "non-sds", label: "NON SDS", href: "/non-sds" },
        ],
      },
      {
        id: "inside-canada",
        label: "Inside Canada",
        href: "/inside-canada",
        nestedContainer: "double",
        children: [
          { id: "visitor-to-student", label: "Visitor to Student", href: "/visitor-to-student" },
          { id: "dli-change", label: "DLI Change", href: "/change-college-program" },
        ],
      },
      { id: "minor", label: "Study Permit For Minor", href: "/study-permit-minors" },
    ],
  },

  {
    id: "family",
    label: "Family Reunification & Sponsorship",
    href: "/family-reunification-sponsorship",
    nestedContainer: "permanent",
    children: [
      {
        id: "spousal-sponsorship",
        label: "Spousal Sponsorship",
        href: "/spouse-common-law-sponsership",
        // in original this nested box also used 'permanent' class
        nestedContainer: "permanent",
        children: [
          { id: "spouse-inland", label: "Inside Canada", href: "/spouse-inland" },
          { id: "spouse-outland", label: "Outside Canada", href: "/spouse-outland" },
          { id: "same-sex", label: "Same Sex", href: "/same-sex" },
        ],
      },
      { id: "parents", label: "Parents / Grandparents", href: "/parents-grandparents" },
      { id: "dependent-children", label: "Dependent Children", href: "/dependent-children" },
      { id: "hc", label: "H & C", href: "/humanitarian-compassionate" },
      { id: "orphan", label: "Orphan", href: "/orphan" },
      { id: "adoption", label: "Adoption", href: "/adoption" },
      { id: "lonely-canadian", label: "Lonely Canadian", href: "/lonely-canadian" },
    ],
  },

  {
    id: "work",
    label: "Work Permit",
    href: "/work-permit",
    nestedContainer: "permanent",
    children: [
      {
        id: "lmia",
        label: "LMIA",
        href: "/lmia-reviewed",
        nestedContainer: "double",
        children: [
          { id: "lmia-wage", label: "High Wage / Low Wage", href: "/low-wage-lmia" },
          { id: "lmia-agri", label: "Agriculture", href: "/agriculture-stream-lmia" },
          { id: "lmia-global", label: "Global Talent Stream", href: "/global-stream-lmia" },
          { id: "lmia-caregiver", label: "Caregiver LMIA", href: "/in-home-caregiver-program-lp" },
        ],
      },
      {
        id: "open-work",
        label: "Open Work Permit",
        href: "/open-work-permit",
        nestedContainer: "double",
        children: [
          { id: "bowp", label: "BOWP – Bridging Open Work Permit", href: "/bridging-open-work-permit-lp" },
          { id: "pgwp", label: "PGWP – Post Graduate Open Work Permit", href: "/pgwp" },
          { id: "sowp", label: "SOWP – Spousal Open Work Permit", href: "/spousal-open-work-permit" },
          { id: "franco", label: "Francophone Mobility Program", href: "/francophone-mobility-program" },
          { id: "vulnerable", label: "Vulnerable Worker", href: "/open-work-vulnerable-lp" },
          { id: "dep-child", label: "Dependent Child of Worker", href: "/openWork-dependent-children" },
        ],
      },
      {
        id: "spousal-permit",
        label: "Spousal Permit",
        href: "/spouse-common-law-sponsership",
        nestedContainer: "double",
        children: [
          { id: "spousal-worker", label: "Open Work Permit - For Spouse of Worker", href: "/spousal-open-work-permit" },
          { id: "spousal-student", label: "Open Work Permit - For Spouse of Student", href: "/cby" },
          { id: "spousal-pr", label: "Open Work Permit - For Spouse of PR", href: "/open-work-permit" },
        ],
      },
      { id: "franco-standalone", label: "Francophone Mobility Program", href: "/francophone-mobility-program" },
    ],
  },

  // Standalone links within Services dropdown (same order)
  { id: "lmia-standalone", label: "LMIA", href: "/lmia-reviewed" },
  { id: "franco-standalone2", label: "Francophone Mobility Program", href: "/francophone-mobility-program" },

  {
    id: "caregiver",
    label: "Caregiver",
    href: "/pathways-for-caregiver",
    nestedContainer: "permanent",
    children: [
      { id: "care-in-lmia", label: "Inside - With LMIA", href: "/in-home-caregiver-program-lp" },
      { id: "care-pr", label: "PR Pathways for Care-Giver", href: "/permanent-residence-pathways-caregivers-lp" },
    ],
  },

  // Single-link groups preserved
  {
    id: "pr-renewal",
    label: "PR Renewal",
    href: "/pr-renewal",
    nestedContainer: "permanent",
    children: [{ id: "pr-renewal-link", label: "PR Renewal", href: "/pr-renewal" }],
  },
  {
    id: "citizenship",
    label: "Citizenship",
    href: "/citizenship",
    nestedContainer: "permanent",
    children: [{ id: "citizenship-link", label: "Citizenship", href: "/citizenship" }],
  },

  {
    id: "other-services",
    label: "Other Services",
    href: "#",
    nestedContainer: "permanent",
    children: [
      { id: "reconsideration2", label: "Reconsideration of Refusal Decision", href: "/reconsideration" },
      { id: "additional-doc", label: "Additional Document Request", href: "/additional-document" },
      { id: "pfl", label: "PFL", href: "/reply-to-pfl-page" },
    ],
  },
];

// Calculators config (for both desktop & mobile dropdown)
const CALCULATORS = [
  { id: "fswp-calc", label: "FSWP Calculator", href: "/federal-skilled" },
  { id: "clb-calc", label: "CLB Calculator", href: "/clb-ilets-calculator" },
  { id: "bcpnp-calc", label: "BCPNP Calculator", href: "/bcpnp-calculator" },
  { id: "draws-history", label: "Previous Draws History", href: "/previous-draw-history" },
];

/* ------------------------------
   2) Small helper for many toggles
---------------------------------*/
function useDisclosureMap() {
  const [open, setOpen] = useState({});
  const set = (id, val) => setOpen((m) => ({ ...m, [id]: val }));
  const isOpen = (id) => !!open[id];
  const onEnter = (id) => () => set(id, true);
  const onLeave = (id) => () => set(id, false);
  const toggle = (id) => (e) => {
    e?.preventDefault?.();
    setOpen((m) => ({ ...m, [id]: !m[id] }));
  };
  return { isOpen, onEnter, onLeave, toggle };
}

/* ------------------------------
   3) Desktop Services Menu (hover)
   Reuses classes exactly as before
---------------------------------*/
function DesktopServices({ menu, h }) {
  const renderChildrenBox = (parent, content) => {
    const cls =
      parent.nestedContainer === "permanent"
        ? styles.permanentNestedSection
        : styles.doubleNested; // "double" default
    return (
      <div
        className={`${cls} ${h.isOpen(parent.id) ? styles.showNested : ""}`}
        onMouseEnter={h.onEnter(parent.id)}
        onMouseLeave={h.onLeave(parent.id)}
      >
        {content}
      </div>
    );
  };

  const renderNode = (node) => {
    if (!node.children) {
      // simple link directly inside dropdown
      return <Link key={node.id} href={node.href}>{node.label}</Link>;
    }

    // node with children: wrap in relativeDiv + Link, and its box (permanent/double)
    return (
      <div key={node.id} className={`${styles.relativeDiv} ${styles.flex}`}>
        <Link
          href={node.href || "#"}
          onMouseEnter={h.onEnter(node.id)}
          onMouseLeave={h.onLeave(node.id)}
        >
          {node.label}
        </Link>
        {renderChildrenBox(
          node,
          node.children.map((child) =>
            child.children ? (
              // child with its own nested (always rendered as a "double" style box)
              <div key={child.id} className={`${styles.relativeDiv} ${styles.flex}`}>
                <Link
                  href={child.href || "#"}
                  onMouseEnter={h.onEnter(child.id)}
                  onMouseLeave={h.onLeave(child.id)}
                >
                  {child.label}
                </Link>
                <div
                  className={`${styles.doubleNested} ${h.isOpen(child.id) ? styles.showNested : ""}`}
                  onMouseEnter={h.onEnter(child.id)}
                  onMouseLeave={h.onLeave(child.id)}
                >
                  {child.children.map((leaf) =>
                    leaf.children ? (
                      // third level with its own "double" box
                      <div key={leaf.id} className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href={leaf.href || "#"}
                          onMouseEnter={h.onEnter(leaf.id)}
                          onMouseLeave={h.onLeave(leaf.id)}
                        >
                          {leaf.label}
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${h.isOpen(leaf.id) ? styles.showNested : ""}`}
                          onMouseEnter={h.onEnter(leaf.id)}
                          onMouseLeave={h.onLeave(leaf.id)}
                        >
                          {leaf.children.map((last) => (
                            <Link key={last.id} href={last.href}>
                              {last.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link key={leaf.id} href={leaf.href}>
                        {leaf.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link key={child.id} href={child.href}>
                {child.label}
              </Link>
            )
          )
        )}
      </div>
    );
  };

  return <>{menu.map(renderNode)}</>;
}

/* ------------------------------
   4) Sidebar Services Menu (click)
   Reuses classes exactly as before
---------------------------------*/
function SidebarServices({ menu, h }) {
  const renderChildrenBox = (open, content) => (
    open ? <div className={styles.subDropdownContent}>{content}</div> : null
  );

  const renderSubChildrenBox = (open, content) =>
    open ? <div className={styles.subSubDropdownContent}>{content}</div> : null;

  const renderNode = (node, isTop = true) => {
    if (!node.children) {
      // simple link
      return <Link key={node.id} href={node.href}>{node.label}</Link>;
    }

    if (isTop) {
      // top-level within SERVICES dropdown
      return (
        <div key={node.id} className={styles.subDropdown}>
          <Link href="#" onClick={h.toggle(node.id)}>
            {node.label} <span className={styles.arrow}>▼</span>
          </Link>
          {renderChildrenBox(
            h.isOpen(node.id),
            <>
              {/* when a group also has an href, first include that link like original markup */}
              {node.href ? <Link href={node.href}>{node.label}</Link> : null}
              {node.children.map((child) =>
                child.children ? (
                  <div key={child.id} className={styles.subSubDropdown}>
                    <Link href="#" onClick={h.toggle(child.id)}>
                      {child.label} <span className={styles.arrow}>▼</span>
                    </Link>
                    {renderSubChildrenBox(
                      h.isOpen(child.id),
                      <>
                        {/* same: include the child href as first link if exists */}
                        {child.href ? <Link href={child.href}>{child.label}</Link> : null}
                        {child.children.map((leaf) =>
                          leaf.children ? (
                            <div key={leaf.id} className={styles.subSubDropdown}>
                              <Link href="#" onClick={h.toggle(leaf.id)}>
                                {leaf.label} <span className={styles.arrow}>▼</span>
                              </Link>
                              {renderSubChildrenBox(
                                h.isOpen(leaf.id),
                                <>
                                  {leaf.href ? <Link href={leaf.href}>{leaf.label}</Link> : null}
                                  {leaf.children.map((last) => (
                                    <Link key={last.id} href={last.href}>
                                      {last.label}
                                    </Link>
                                  ))}
                                </>
                              )}
                            </div>
                          ) : (
                            <Link key={leaf.id} href={leaf.href}>
                              {leaf.label}
                            </Link>
                          )
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  <Link key={child.id} href={child.href}>
                    {child.label}
                  </Link>
                )
              )}
            </>
          )}
        </div>
      );
    }

    // not used (all service items are under top)
    return null;
  };

  return (
    <>
      <div className={styles.dropdown}>
        <Link href="#" className={styles.dropbtn} onClick={h.toggle("services-root")}>
          SERVICES <span className={styles.arrow}>▼</span>
        </Link>
        <div
          className={styles.dropdownContent}
          style={h.isOpen("services-root") ? { display: "block" } : { display: "none" }}
        >
          {menu.map((group) => renderNode(group, true))}
          {/* trailing links preserved */}
          <Link href="/more-services">More Services</Link>
        </div>
      </div>
    </>
  );
}

/* ------------------------------
   5) Component
---------------------------------*/
const Navbar1 = ({ showBlue }) => {
  const router = useRouter();

  // search
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const q = inputValue.trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  // sticky contact bar
  const [hideContactNavbar, setHideContactNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1080) setHideContactNavbar(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // desktop hover states
  const aboutHover = useDisclosureMap();
  const servicesHover = useDisclosureMap();
  const calculatorsHover = useDisclosureMap();

  // sidebar / hamburger
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((s) => !s);
  const side = useDisclosureMap(); // services-root + nested
  const calcSide = useDisclosureMap();

  // close hamburger services when clicking outside its dropdown
  const dropdownRef = useRef(null);
  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        // collapse the root SERVICES in sidebar
        if (side.isOpen("services-root")) side.toggle("services-root")();
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [side]);

  return (
    <>
      <div className={styles.navbar}>
        {/* TOP BAR */}
        <div className={styles.firstNavbar}>
          <div className={styles.calculatorIcon}>
            <Image loading="lazy" src={"/assets/gearIcon.svg"} className={styles.iconGearIcon} width={25} height={25} alt="Tools" />
            <Link href="/immigration-tools">Immigration Tools</Link>
            <Image loading="lazy" src={"/assets/rightArrow.svg"} className={styles.RightArrowIcon} width={10} height={10} alt="Arrow" />
          </div>

          <div className={styles.ancor}>
            <div className={styles.relativeDiv}>
              <Link
                href="/about-us"
                onMouseEnter={aboutHover.onEnter("about")}
                onMouseLeave={aboutHover.onLeave("about")}
              >
                ABOUT
              </Link>
            </div>
            <Link href="/contact-us">CONTACT</Link>

            <div className={styles.mobileIcon}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-3 md:w-5" height="18" width="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <p>+1 (604) 503 3734</p>
            </div>
          </div>
        </div>

        {/* MAIN BAR */}
        <div className={`${styles.bottomSectionNavbar} ${hideContactNavbar ? styles.makeNavbarFixed : ""}`}>
          <div className={styles.secondNavbar}>
            {/* Logos */}
            <Link href="/" className={`${styles.logo} ${styles.logoDesktop}`}>
              <Image loading="lazy" height={50} width={100} src={BrightlightBlueLogo} alt="Brightlight Blue Logo" />
            </Link>
            {showBlue ? (
              <Link href="/" className={`${styles.logo} ${styles.logoMobile}`}>
                <Image loading="lazy" height={50} width={100} src={BrightlightBlueLogo} alt="Brightlight Blue Logo" />
              </Link>
            ) : (
              <Link href="/" className={`${styles.logo} ${styles.logoMobile}`}>
                <Image loading="lazy" height={50} width={100} src={whiteLogo} alt="Brightlight White Logo" />
              </Link>
            )}

            {/* Desktop Nav */}
            <nav className={styles.mainNavbar} aria-label="Main">
              <Link href="/" className={styles.sidebarLink}>HOME</Link>

              {/* SERVICES (desktop hover) */}
              <div className={styles.relativeDiv}>
                <Link
                  href="/more-services"
                  onMouseEnter={servicesHover.onEnter("services")}
                  onMouseLeave={servicesHover.onLeave("services")}
                >
                  SERVICES
                </Link>
                <div
                  className={`${styles.servicesDropdown} ${servicesHover.isOpen("services") ? styles.showServicesDropdown : ""}`}
                  onMouseEnter={servicesHover.onEnter("services")}
                  onMouseLeave={servicesHover.onLeave("services")}
                >
                  <DesktopServices menu={SERVICES_MENU} h={servicesHover} />
                </div>
              </div>

              {/* BLOGS */}
              <Link href="/blogs">BLOGS</Link>

              {/* CALCULATORS (desktop hover) */}
              <div className={styles.relativeDiv}>
                <Link
                  href="#"
                  onMouseEnter={calculatorsHover.onEnter("calc")}
                  onMouseLeave={calculatorsHover.onLeave("calc")}
                >
                  CALCULATORS
                </Link>
                <div
                  className={`${styles.calculatorsDropdown} ${calculatorsHover.isOpen("calc") ? styles.showCalculatorsDropdown : ""}`}
                  onMouseEnter={calculatorsHover.onEnter("calc")}
                  onMouseLeave={calculatorsHover.onLeave("calc")}
                >
                  {CALCULATORS.map((l) => (
                    <Link key={l.id} href={l.href}>{l.label}</Link>
                  ))}
                </div>
              </div>

              {/* CONTACT */}
              <Link href="/contact-us">CONTACT</Link>
            </nav>

            {/* Search Bar */}
            <form onSubmit={handleSubmit}>
              <div className={styles.searchBar}>
                <div className={styles.inputWrapper}>
                  <Search className={styles.searchIcon} width={20} height={20} />
                  <input
                    type="text"
                    className={styles.input}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                    aria-label="Search"
                  />
                </div>
                <button type="submit" className={styles.button}>Search here</button>
              </div>
            </form>

            {/* Hamburger Icon */}
            <div className={styles.hamburger} onClick={toggleSidebar} aria-label="Open menu">
              <Image
                loading="lazy"
                height={50}
                width={100}
                src={showBlue ? "/assets/hamBurgerIconBlue.svg" : "/assets/hamBurgerIconWhite.svg"}
                className={styles.hamburgerColoredIcon}
                alt="Menu"
              />
            </div>
          </div>

          {/* Sidebar */}
          <aside className={`${styles.sidebar} ${showSidebar ? styles.showSidebar : ""}`}>
            <div className={styles.sidebarContent} ref={dropdownRef}>
              <button className={styles.closeBtn} onClick={toggleSidebar} aria-label="Close menu">
                &times;
              </button>

              <Link href="/" className={styles.sidebarLink}>HOME</Link>

              {/* SERVICES (hamburger click) */}
              <SidebarServices menu={SERVICES_MENU} h={side} />

              {/* CALCULATORS (hamburger click) */}
              <div className={styles.subDropdown}>
                <Link href="#" onClick={calcSide.toggle("calc-side")}>
                  CALCULATORS <span className={styles.arrow} style={{ marginLeft: "73px" }}>▼</span>
                </Link>
                {calcSide.isOpen("calc-side") && (
                  <div className={styles.subDropdownContent}>
                    {CALCULATORS.map((l) => (
                      <Link key={l.id} href={l.href}>{l.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom links */}
              <Link href="/blogs" className={styles.sidebarLink}>BLOGS</Link>
              <Link href="/about-us" className={styles.sidebarLink}>ABOUT</Link>
              <Link href="/contact-us" className={styles.sidebarLink}>CONTACT</Link>
            </div>
          </aside>

          {/* Contact strip */}
          <div className={`${styles.contactNavbar} ${hideContactNavbar ? styles.hideContactNumber : ""}`}>
            <div className={styles.contactInfo}>
              <div className={styles.location}>
                {showBlue ? (
                  <Image loading="lazy" height={24} width={24} src={LocationBlue} alt="Location" className={styles.icon} />
                ) : (
                  <Image loading="lazy" height={24} width={24} src={LocationIcon} alt="Location" className={styles.icon} />
                )}
                <span className={styles.lowerFooterText} style={showBlue ? { color: "#164c95" } : { color: "white" }}>
                  <Link href="https://g.co/kgs/9BZVS85" className={styles.lowerFooterText} style={showBlue ? { color: "#164c95" } : { color: "white" }} target="_blank">
                    Vancouver
                  </Link>
                </span>
              </div>

              <div className={styles.email}>
                {showBlue ? (
                  <Image loading="lazy" height={24} width={24} src={EmailBlue} alt="Email" className={styles.icon} />
                ) : (
                  <Image loading="lazy" height={24} width={24} src={EmailIcon} alt="Email" className={styles.icon} />
                )}
                <span className={styles.lowerFooterText} style={showBlue ? { color: "#164c95" } : { color: "white" }}>
                  info@brightlightimmigration.ca
                </span>
              </div>
            </div>

            <div className={styles.socialMedia}>
              {showBlue ? (
                <Link target="_blank" href="https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1">
                  <Image loading="lazy" height={24} width={24} src={Tiktokblue} alt="TikTok" />
                </Link>
              ) : (
                <Link target="_blank" href="https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1">
                  <TikTokIcon className={styles.socialIcon} aria-label="TikTok" />
                </Link>
              )}

              {showBlue ? (
                <Link target="_blank" href="https://ca.linkedin.com/in/loveneet-paneswar-5b2377198">
                  <Image loading="lazy" height={24} width={24} src={Linkedinblue} alt="LinkedIn" />
                </Link>
              ) : (
                <Link target="_blank" href="https://ca.linkedin.com/in/loveneet-paneswar-5b2377198">
                  <LinkedInIcon className={styles.socialIcon} aria-label="LinkedIn" />
                </Link>
              )}

              {showBlue ? (
                <Link target="_blank" href="https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p">
                  <Image loading="lazy" height={24} width={24} src={Instagramblue} alt="Instagram" />
                </Link>
              ) : (
                <Link target="_blank" href="https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p">
                  <Image loading="lazy" src={"/assets/instagram.svg"} height={25} width={25} className={styles.socialIcon} alt="Instagram" />
                </Link>
              )}

              {showBlue ? (
                <Link target="_blank" href="https://www.facebook.com/brightlightimmigration">
                  <Image loading="lazy" height={24} width={24} src={Facebookblue} alt="Facebook" />
                </Link>
              ) : (
                <Link target="_blank" href="https://www.facebook.com/brightlightimmigration">
                  <FacebookIcon className={styles.socialIcon} aria-label="Facebook" />
                </Link>
              )}

              {showBlue ? (
                <Link target="_blank" href="https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA">
                  <Image loading="lazy" height={24} width={24} src={Youtubeblue} alt="YouTube" />
                </Link>
              ) : (
                <Link target="_blank" href="https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA">
                  <YouTubeIcon className={styles.socialIcon} aria-label="YouTube" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
