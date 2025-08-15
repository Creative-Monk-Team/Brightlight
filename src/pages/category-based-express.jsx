import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CategoryBasedExpress.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import Link from "next/link";
import { fetchSeoData } from "../lib/fetchSeoData";

export async function getServerSideProps() {
  return fetchSeoData("categoryBasedExpressMeta");
}

const CategoryBasedExpress = ({ metaData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [pData, setPData] = useState([]);

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
    fetch("https://brightlight-node.onrender.com/categoryBasedExpress")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setPData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sectionsRef = useRef([]);

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const extractStrongText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    const strongMatch = htmlString.match(/<strong>(.*?)<\/strong>/);
    return strongMatch ? strongMatch[1] : "";
  };

  const extractRemainingText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    return htmlString.replace(/<strong>.*?<\/strong>/, "").trim();
  };

  const fetchedValue1 = pData?.whyChooseUsList?.[0];
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.whyChooseUsList?.[1];
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);

  const fetchedValue3 = pData?.whyChooseUsList?.[2];
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

  const fetchedValue4 = pData?.whyChooseUsList?.[3];
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4);

  return (
    <>
      <Head>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : "Brightlight Immigration"}
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"}
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
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("what-is")}>
                What Is the Education Category?
              </p>
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility-express-entry")}>
                Eligibility for Express Entry
              </p>
              <p onClick={() => scrollToSection("eligibility-criteria")}>
                Eligibility Criteria
              </p>
              <p onClick={() => scrollToSection("noc-codes")}>
                Eligible NOC Codes
              </p>
              <p onClick={() => scrollToSection("draw-history")}>
                Draw History
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("still-not-sure")}>
                Still Not Sure?
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us?
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
              <p onClick={() => scrollToSection("eligibility-assessment")}>
                Eligibility Assessment
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container} id="container">
        <main className={styles.mainContent}>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <header className={styles.header}>
              <h1>{pData?.heading}</h1>
            </header>
            <p className={styles.discription}>{pData?.description1}</p>
            <p className={styles.discription}>{pData?.description2}</p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="what-is"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2 className="text-3xl">{pData?.whatIsHeading}</h2>
            <p>{pData?.whatIsPara}</p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="benefits"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2 className="text-3xl">{pData?.benefitsHeading}</h2>
            <ul style={{ marginLeft: "40px" }}>
              {pData?.benefitsList?.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="eligibility-express-entry"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h2 className="text-3xl">{pData?.eligibilityExpressEntryHeading}</h2>
            <p>{pData?.eligibilityExpressEntryPara}</p>
            <ul style={{ marginLeft: "40px" }}>
              {pData?.eligibilityExpressEntrySteps?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="eligibility-criteria"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <h2 className="text-3xl">{pData?.eligibilityCriteriaHeading}</h2>
            <ul style={{ marginLeft: "40px" }}>
              {pData?.eligibilityCriteriaList?.map((criterion, index) => (
                <li key={index}>{criterion}</li>
              ))}
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="noc-codes"
            ref={(el) => (sectionsRef.current[5] = el)}
          >
            <h2 className="text-3xl">{pData?.eligibleNOCCodesHeading}</h2>
            <ul style={{ marginLeft: "40px" }}>
              {pData?.eligibleNOCCodesList?.map((item, index) => (
                <li key={index}>{`${item.occupation} (NOC ${item.nocCode})`}</li>
              ))}
            </ul>
            <p>{pData?.eligibleNOCCodesNote}</p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="draw-history"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
            <h2 className="text-3xl">{pData?.drawHistoryHeading}</h2>
            <p>{pData?.drawHistoryPara}</p>
            <button
              className={styles.button1}
              onClick={() => (window.location.href = "/previous-draw-history")}
            >
              View Previous Draw History
            </button>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            <h2 className="text-3xl">{pData?.howToApplyHeading}</h2>
            <ul style={{ marginLeft: "40px" }}>
              {pData?.howToApplySteps?.map((step, index) => (
                <li key={index}>
                  {step}
                  {index === 2 && (
                    <Link href="/booking"> Click here</Link>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[8] = el)}
          >
            <h2 className="text-3xl">{pData?.refusalHeading}</h2>
            <ul style={{ marginLeft: "40px" }}>
              {pData?.refusalList?.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="still-not-sure"
            ref={(el) => (sectionsRef.current[9] = el)}
          >
            <h2 className="text-3xl">{pData?.stillNotSureHeading}</h2>
            <p>{pData?.stillNotSurePara}</p>
            <button
              className={styles.button}
              onClick={() => (window.location.href = "/booking")}
            >
              {pData?.bookAppointmentText}
            </button>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[10] = el)}
          >
            <h2 className="text-3xl">{pData?.whyChooseUsHeading}</h2>
            <ul className={styles.whychooseusLi} style={{ marginLeft: "40px" }}>
              <li>
                <strong>{strongText1}</strong> {remainingText1}
              </li>
              <li>
                <strong>{strongText2}</strong> {remainingText2}
              </li>
              <li>
                <strong>{strongText3}</strong> {remainingText3}
              </li>
              <li>
                <strong>{strongText4}</strong> {remainingText4}
              </li>
            </ul>
          </section>
        </main>
      </div>

      <div id="faqs">
        <FAQ_White_Internal data={pData} />
      </div>

      {pData?.showTestimonials === "Y" && (
        <div id="testimonials">
          <Testimonials />
        </div>
      )}
      {pData?.showBlogs === "Y" && (
        <div id="blogs">
          <RecentBlogs />
        </div>
      )}
      {pData?.showEligibilityAssessment === "Y" && (
        <div id="eligibility-assessment">
          <h2>Eligibility Assessment</h2>
          {/* Add your Eligibility Assessment component or content here */}
        </div>
      )}
      <Footer1 />
    </>
  );
};

export default CategoryBasedExpress;