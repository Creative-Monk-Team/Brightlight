import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Rcip.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import { fetchSeoData } from "../lib/fetchSeoData";

export async function getServerSideProps() {
  return fetchSeoData("rcipMeta"); // Pass the API endpoint specific to this page
}

const Rcip = ({ metaData }) => {
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
    fetch("https://brightlight-node.onrender.com/rcip-page")
      .then((res) => {
        return res.json();
      })
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
    handleScroll(); // Initial check

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
              : "Brightlight Immigration"
          }
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
              : "Brightlight Immigration, Immigration Services, Mission, Team"
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
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("provinces")}>
                Participating Provinces
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us?
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
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
          {pData?.heading}
        </h1>
        <section
          className={`${styles.introduction} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>{pData?.introPara}</p>
        </section>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>{pData?.benefitsHeading}</h2>
          <ul style={{ marginLeft: "40px" }}>
            {pData?.benefitsList?.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>{pData?.eligibilityHeading}</h2>
          <ul className="list-disc ml-10 flex flex-col gap-4 mb-10">
            {pData?.eligibilityList?.map((eligibility, index) => (
              <li key={index}>{eligibility}</li>
            ))}
          </ul>
        </section>

        <section
          className={`${styles.provinces} ${styles.section}`}
          id="provinces"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>{pData?.provincesHeading}</h2>
          <ul className="list-disc ml-10 flex flex-col gap-4 mb-10">
            {pData?.provincesList?.map((province, index) => (
              <li key={index}>
                <strong>{province.province}</strong>: {province.communities.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <section
          className={`${styles.howToApply} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.howToApplyHeading}</h2>
          <ul className="list-disc ml-10 flex flex-col gap-4 mb-10">
            {pData?.howToApplySteps?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </section>

        <section
          className={`${styles.refusal} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>{pData?.refusalHeading}</h2>
          <ul className="list-disc ml-10 flex flex-col gap-4 mb-10">
            {pData?.refusalList?.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </section>

        <section
          className={`${styles.assistance} ${styles.section}`}
          id="book-appointment"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/booking")}
          >
            {pData?.bookAppointment}
          </button>
        </section>

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[8] = el)}
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

export default Rcip;