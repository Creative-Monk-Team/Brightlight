import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PermanentResidency.module.css";
import ServiceImg from "../assets/service-data-image.webp";
import studyVisaImg from "../assets/graduatedStudent.png";
import OurProcess from "../sections/OurProcess";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import RecentBlogs from "../sections/RecentBlogs";
import Testimonials from "../sections/Testimonials";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";
import Link from "next/link";
import { fetchSeoData } from "../lib/fetchSeoData";
import Image from "next/image";

export async function getServerSideProps() {
  return fetchSeoData(""); // Pass the API endpoint specific to this page
}


const PermanentResidency = ({ metaData, pData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionsRef = useRef([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://brightlightimmigration.ca/permanent-residency" />
        <title>{metaData?.metaTitle || "Brightlight Immigration"}</title>
        <meta
          name="description"
          content={
            metaData?.metaDesc ||
            "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services."
          }
        />
        <meta
          property="og:title"
          content={metaData?.metaOgTitle || "Brightlight Immigration"}
        />
        <meta property="og:image" content={ogImage.src} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc ||
            "Discover the story behind Brightlight Immigration and how we can assist you with your immigration needs."
          }
        />
        <meta
          name="keywords"
          content={metaData?.metaKeywords || "About Us, Brightlight Immigration, Immigration Services"}
        />
        <meta property="og:url" content="https://brightlightimmigration.ca/permanent-residency" />
      </Head>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div className={styles.bannerHeading}>
            <h1>{pData?.heading}</h1>
            <p>{pData?.description}</p>
            <p>{pData?.description2}</p>
          </div>
          <div
            className={`${styles.bannerHeadingRotateParent} ${isDropdownOpen ? styles.active : ""
              }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>
                About the program
              </p>
              <p onClick={() => scrollToSection("Pathways-becoming-PR")}>
                Pathways to PR
              </p>
              <p onClick={() => scrollToSection("Our-process")}>Our process</p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about-program"
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`container ${styles.canadianParent} ${visibleSections.includes("about-program") ? styles.visible : ""
          }`}
      >
        <div className={styles.canadianContent}>
          <p>{pData?.aboutDescription}</p>
          <p>{pData?.aboutDescription2}</p>
        </div>
        <div className={styles.canadianImg}>
          <Image
            src={ServiceImg}
            alt="Permanent Residency"
            height={500}
            width={500}
          />
        </div>
      </div>

      <div
        id="Pathways-becoming-PR"
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`${styles.pathwayParent} ${visibleSections.includes("Pathways-becoming-PR") ? styles.visible : ""
          }`}
      >
        <div className={styles.pathway}>
          <div className={styles.pathwayHeading}>
            <h1>{pData?.pathHeading}</h1>
          </div>
          <div className={styles.pathwayCardsParent}>
            <div className={styles.pathwayCards}>
              <Link href="/express-entry">
                <div className={"flex items-center justify-center"}>
                  <Image
                    src={studyVisaImg}
                    alt="Express Entry"
                    height={500}
                    width={500}
                  />
                </div>
                <h2 className="text-2xl font-semibold">Express Entry</h2>
              </Link>
            </div>
            <div className={styles.pathwayCards}>
              <Link href="/pilot-programs">
                <div className={"flex items-center justify-center"}>
                  <Image
                    src={studyVisaImg}
                    alt="Pilot Programs"
                    height={500}
                    width={500}
                  />
                </div>
                <h2 className="text-2xl font-semibold">Pilot Programs</h2>
              </Link>
            </div>
            <div className={styles.pathwayCards}>
              <Link href="/pnp">
                <div className={"flex items-center justify-center"}>
                  <Image
                    src={studyVisaImg}
                    alt="PNP"
                    height={500}
                    width={500}
                  />
                </div>
                <h2 className="text-2xl font-semibold">PNP</h2>
              </Link>
            </div>
            <div className={styles.pathwayCards}>
              <Link href="/rnip">
                <div className={"flex items-center justify-center"}>
                  <Image
                    src={studyVisaImg}
                    alt="RNIP"
                    height={500}
                    width={500}
                  />
                </div>
                <h2 className="text-2xl font-semibold">RNIP</h2>
              </Link>
            </div>
            {/* Repeat for other cards */}
          </div>
        </div>
      </div>

      <div id="Our-process">
        <OurProcess />
      </div>

      <div id="faq">
        <FAQ_White_Internal data={pData} />
      </div>

      {pData?.show_testimonials === "Y" && (
        <div id="testimonials">
          <Testimonials />
        </div>
      )}

      <div id="blogs">
        <RecentBlogs />
      </div>

      <Footer1 />
    </>
  );
};

export async function getServerSideProps() {
  const [metaRes, pRes] = await Promise.all([
    fetch("https://brightlight-node.onrender.com/permanent-meta"),
    fetch("https://brightlight-node.onrender.com/permanent-residency"),
  ]);

  const [metaData, pData] = await Promise.all([metaRes.json(), pRes.json()]);

  return {
    props: {
      metaData: metaData[0] || null,
      pData: pData[0] || null,
    },
  };
}

export default PermanentResidency;