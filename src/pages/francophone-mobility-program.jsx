import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/FrancophoneMobilityProgram.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import { fetchSeoData } from "../lib/fetchSeoData";

export async function getServerSideProps() {
  return fetchSeoData("francophoneMobilityMeta");
}

const FrancophoneMobilityProgram = ({ metaData }) => {
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
    fetch("https://brightlight-node.onrender.com/francoMob")
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

  const fetchedValue1 = pData?.WhyChooseUsList?.[0];
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.WhyChooseUsList?.[1];
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);

  const fetchedValue3 = pData?.WhyChooseUsList?.[2];
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

  const fetchedValue4 = pData?.WhyChooseUsList?.[3];
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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("employer-requirements")}>
                Employer Requirements
              </p>
              <p onClick={() => scrollToSection("work-permit-duration")}>
                Work Permit Duration
              </p>
              <p onClick={() => scrollToSection("family-members")}>
                Family Members
              </p>
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
              <p onClick={() => scrollToSection("work-permit-renewals")}>
                Work Permit Renewals
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>{pData?.FrancophoneHeading}</h1>
          <p>{pData?.FrancophonePara}</p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className="text-3xl">{pData?.BenefitsHeading}</h2>
          <h4>{pData?.BenefitsSubHeading}</h4>
          <ul className={styles.BenifitList} style={{ marginLeft: "40px" }}>
            {pData?.BenefitsList?.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className="text-3xl">{pData?.EligibilityHeading}</h2>
          <p>{pData?.EligibilitySubHead}</p>
          <ol style={{ marginLeft: "40px", marginTop: "20px", lineHeight: "2" }}>
            {pData?.EligibilityList?.map((criterion, index) => (
              <li key={index}>
                {criterion}
                {index === 3 && (
                  <ul style={{ marginLeft: "40px", marginTop: "10px" }}>
                    {pData?.FrenchLanguageSubList?.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
          <button
            onClick={() => (window.location.href = "/french-targeted-draw")}
            className={styles.tefButton}
          >
            French CLB Calculator
          </button>
        </section>

        <section
          className={`${styles.employerRequirements} ${styles.section}`}
          id="employer-requirements"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className="text-3xl">{pData?.EmpReqHeading}</h2>
          <ol style={{ marginLeft: "40px" }}>
            {pData?.EmpReqList?.map((requirement, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {requirement}
              </li>
            ))}
          </ol>
        </section>

        <section
          className={`${styles.workPermitDuration} ${styles.section}`}
          id="work-permit-duration"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className="text-3xl">{pData?.WorkPerDurHeading}</h2>
          <p>{pData?.WorkPerDurSubHead}</p>
          <ul style={{ marginLeft: "40px", marginTop: "20px" }}>
            {pData?.WorkPerDurList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section
          className={`${styles.familyMembers} ${styles.section}`}
          id="family-members"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className="text-3xl">{pData?.FamilyMemHeading}</h2>
          <p>{pData?.FamilyMemSubHead}</p>
          <ul style={{ marginLeft: "40px", marginTop: "10px" }}>
            {pData?.FamilyMemList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className="text-3xl">{pData?.AppProHeading}</h2>
          <ol style={{ marginLeft: "40px" }}>
            <li>
              <strong>{pData?.AppProSubHead1}</strong>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {pData?.AppProSubHead1List?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
            <li>
              <strong>{pData?.AppProSubHead2}</strong>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {pData?.AppProSubHead2List?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
            <li>
              <strong>{pData?.AppProSubHead3}</strong>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {pData?.AppProSubHead3List?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          </ol>
        </section>

        <section
          className={`${styles.workPermitRenewals} ${styles.section}`}
          id="work-permit-renewals"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className="text-3xl">{pData?.WorkPerRenHeading}</h2>
          <h4>{pData?.WorkPerRenSubHead}</h4>
          <ul style={{ marginLeft: "40px", marginTop: "20px" }}>
            {pData?.WorkPerRenList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="still-not-sure"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2 className="text-3xl">{pData?.StillNotSureHeading}</h2>
          <p>{pData?.StillNotSurePara}</p>
          <button
            onClick={() => (window.location.href = "/booking")}
          >
            Book Appointment
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2 className="text-3xl">{pData?.WhyChooseUsHeading}</h2>
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
      </div>
    </>
  );
};

export default FrancophoneMobilityProgram;