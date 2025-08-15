import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SuperVisa.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import Image from "next/image";
import { fetchSeoData } from "../lib/fetchSeoData";

export async function getServerSideProps() {
  return fetchSeoData("superVisaMeta");
}

const SuperVisa = ({ metaData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [pData, setPData] = useState({});
  const sectionsRef = useRef([]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/superVisa")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) setPData(data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  // Animate sections on scroll
  const handleScroll = () => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add(styles.visible);
        } else {
          section.classList.remove(styles.visible);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Utility for extracting <strong>text</strong> from HTML string
  const extractStrongText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    const strongMatch = htmlString.match(/<strong>(.*?)<\/strong>/);
    return strongMatch ? strongMatch[1] : "";
  };
  const extractRemainingText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    return htmlString.replace(/<strong>.*?<\/strong>/, "").trim();
  };

  // For Why Choose Us points
  const strongText91 = extractStrongText(pData?.wcu1);
  const remainingText91 = extractRemainingText(pData?.wcu1);
  const strongText92 = extractStrongText(pData?.wcu2);
  const remainingText92 = extractRemainingText(pData?.wcu2);
  const strongText93 = extractStrongText(pData?.wcu3);
  const remainingText93 = extractRemainingText(pData?.wcu3);
  const strongText94 = extractStrongText(pData?.wcu4);
  const remainingText94 = extractRemainingText(pData?.wcu4);

  return (
    <>
      <Head>
        <title>{metaData?.metaTitle || "Brightlight Immigration"}</title>
        <meta
          name="description"
          content={
            metaData?.metaDesc ||
            "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={metaData?.metaOgTitle || "Brightlight Immigration"}
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc ||
            "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords ||
            "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Head>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>Quick Access</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              <p onClick={() => scrollToSection("question-answer")}>Common Question</p>
              <p onClick={() => scrollToSection("income-requirements")}>Income Requirements</p>
              <p onClick={() => scrollToSection("who-is-counted")}>Who is Counted?</p>
              <p onClick={() => scrollToSection("benifits")}>Benefits</p>
              <p onClick={() => scrollToSection("Super Visa Vs PGP")}>Super Visa Vs PGP</p>
              <p onClick={() => scrollToSection("docs-to-prove-income")}>Docs to Prove Income</p>
              <p onClick={() => scrollToSection("not-sure-if-you-qualify")}>Not Sure if You Qualify?</p>
              <p onClick={() => scrollToSection("talk-to-expert")}>Talk to Expert</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container} id="container">
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          {pData?.superVisaHeading}
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>{pData?.superVisaPara}</p>
        </section>

        <section>
            <h2 className={styles.subheading}>{pData?.question}</h2>
            <p>{pData?.answer}</p>
        </section>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="income-requirements"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>{pData?.SuperVisaTabHeading}</h2>
          <p className="mb-4">{pData?.SuperVisaTabSubHead}</p>
          <p className="font-semibold">{pData?.SuperVisaTabSubHead2}</p>
          <table className={`mb-6 ${styles.table}`}>
            <thead>
              <tr>
                <th>{pData?.SupVTabHead1}</th>
                <th>{pData?.SupVTabHead2}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.SupVTabHead1P1}</td>
                <td>{pData?.SupVTabHead2P1}</td>
              </tr>
              <tr>
                <td>{pData?.SupVTabHead1P2}</td>
                <td>{pData?.SupVTabHead2P2}</td>
              </tr>
              <tr>
                <td>{pData?.SupVTabHead1P3}</td>
                <td>{pData?.SupVTabHead2P3}</td>
              </tr>
              <tr>
                <td>{pData?.SupVTabHead1P4}</td>
                <td>{pData?.SupVTabHead2P4}</td>
              </tr>
              <tr>
                <td>{pData?.SupVTabHead1P5}</td>
                <td>{pData?.SupVTabHead2P5}</td>
              </tr>
              <tr>
                <td>{pData?.SupVTabHead1P6}</td>
                <td>{pData?.SupVTabHead2P6}</td>
              </tr>
              <tr>
                <td>{pData?.SupVTabHead1P7}</td>
                <td>{pData?.SupVTabHead2P7}</td>
              </tr>
              <tr>
                <td>{pData?.SupVTabHead1P8}</td>
                <td>{pData?.SupVTabHead2P8}</td>
              </tr>
            </tbody>
          </table>
          <p>{pData?.SuperVisaTabFooter}</p>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="who-is-counted"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>{pData?.WhoisCountedHeading}</h2>
          <p>{pData?.WhoisCountedSubHead}</p>
          <ul className="list-disc ml-10 flex flex-col gap-4 mb-10">
            <li>{pData?.wc1}</li>
            <li>{pData?.wc2}</li>
            <li>{pData?.wc3}</li>
            <li>{pData?.wc4}</li>
            <li>{pData?.wc5}</li>
            <li>{pData?.wc6}</li>
          </ul>
            <p>{pData?.WhoisCountedFooter}</p>
          
        </section>

        <section
          className={`${styles.incomeTable} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>{pData?.BenifitsHeading}</h2>
          <ul className="list-disc ml-10 flex flex-col gap-4 mb-10">
            <li>{pData?.b1}</li>
            <li>{pData?.b2}</li>    
            <li>{pData?.b3}</li>
            <li>{pData?.b4}</li>
            <li>{pData?.b5}</li>
            <li>{pData?.b6}</li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="Super Visa Vs PGP"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.SuperVisaPgpHeading}</h2>
          <table className={`mb-6 ${styles.table}`}>
            <thead>
                <tr>
                    <th>{pData?.SuperVisaPgpHead1}</th>
                    <th>{pData?.SuperVisaPgpHead2}</th>
                    <th>{pData?.SuperVisaPgpHead3}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{pData?.SuperVisaPgpHead1d1}</td>
                
                    <td>{pData?.SuperVisaPgpHead2d1}</td>
                
                    <td>{pData?.SuperVisaPgpHead3d1}</td>
                </tr>
                <tr>
                    <td>{pData?.SuperVisaPgpHead1d2}</td>
                    <td>{pData?.SuperVisaPgpHead2d2}</td>
                    <td>{pData?.SuperVisaPgpHead3d2}</td>
                </tr>
                <tr>
                    <td>{pData?.SuperVisaPgpHead1d3}</td>
                    <td>{pData?.SuperVisaPgpHead2d3}</td>
                    <td>{pData?.SuperVisaPgpHead3d3}</td>
                </tr>
            </tbody>
          </table>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="docs-to-prove-income"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>{pData?.DocstoProveHeading}</h2>
            <p>{pData?.DocstoProvePara}</p>
          <ul className="list-disc ml-10 flex flex-col gap-4 mb-10">
            <li>{pData?.dtp1}</li>
            <li>{pData?.dtp2}</li>
            <li>{pData?.dtp3}</li>
            <li>{pData?.dtp4}</li>
            <li>{pData?.dtp5}</li>
            <li>{pData?.dtp6}</li>
            <li>{pData?.dtp7}</li>
          </ul>
            <p>{pData?.DocstoProveFooter}</p>
        </section>

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="not-sure-if-you-qualify"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className="text-3xl">{pData?.NotSureHeading01}</h2>
            <p className="mb-4">{pData?.NotSurePara}</p>
          <ul className="list-disc flex flex-col gap-4 mb-10" style={{ marginLeft: "40px" }}>
            <li>{pData?.ns1}</li>
            <li>{pData?.ns2}</li>
            <li>{pData?.ns3}</li>
          </ul>
        </section>

        <section 
        className={`${styles.whyChooseUs} ${styles.section}`}
          id="talk-to-expert"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>{pData?.TalktoSvHeading}</h2>
          <p className="mb-4">{pData?.TalktoSvPara1}</p>
          <button onClick={() => (window.location.href = "/booking")}>
            Book Appointment
          </button>
        </section>
      </div>

      <div id="faqs">
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

export default SuperVisa;
