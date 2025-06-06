import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/VisitorToStudent.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import FieldOfStudyTable from "../components/FieldOfStudyTable";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";
import Link from "next/link";
import { fetchSeoData } from "../lib/fetchSeoData";

export async function getServerSideProps() {
  return fetchSeoData("visitorToStudentMeta"); // Pass the API endpoint specific to this page
}

const VisitorToStudent = ({metaData}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [pData,setPData]=useState([]);

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
    fetch("https://brightlight-node.onrender.com/visitorToStudent")
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
      if (section) { // ✅ Check if section exists
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

  const fetchedValue1 = pData?.IfYouGraduatedLi1;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.IfYouGraduatedLi2;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);


  const fetchedValue3 = pData?.IfYouGradAnothLi1;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);
  
  const fetchedValue4 = pData?.IfYouGradAnothLi2;
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4);

  const fetchedValue5 = pData?.IfYouGradCollLi2;
  const strongText5 = extractStrongText(fetchedValue5);
  const remainingText5 = extractRemainingText(fetchedValue5);
  
  const fetchedValue6 = pData?.IfYouGradAnothLi2;
  const strongText6 = extractStrongText(fetchedValue6);
  const remainingText6 = extractRemainingText(fetchedValue6);

  //

  const fetchedValue91 = pData?.wcu1;
  const strongText91 = extractStrongText(fetchedValue91);
  const remainingText91 = extractRemainingText(fetchedValue91);
  
  const fetchedValue92 = pData?.wcu2;
  const strongText92 = extractStrongText(fetchedValue92);
  const remainingText92 = extractRemainingText(fetchedValue92);
  
  const fetchedValue93 = pData?.wcu3;
  const strongText93 = extractStrongText(fetchedValue93);
  const remainingText93 = extractRemainingText(fetchedValue93);
  
  const fetchedValue94 = pData?.wcu4;
  const strongText94 = extractStrongText(fetchedValue94);
  const remainingText94 = extractRemainingText(fetchedValue94);

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
              : " Brightlight Immigration"
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us?
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
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
          {pData?.visitorToStudentHeading}
        </h1>
        <p className={styles.intro}>
        {pData?.visitorToStudentPara}
        </p>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.BenifitsHeading }
          </h2>
          <h4 className={styles.sub_sub_heading}>
          {pData?.BenifitsSubHead }
          </h4>
          <ol style={{ marginLeft: "40px" }} className={styles.benefitsList}>
            <li style={{ marginBottom: "10px" }}>
            {pData?.b1 }
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.b2 }
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.b3}
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.b4}
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.b5}
            </li>
            {/* <li style={{ marginBottom: "10px" }}>
            {pData?.b8}
            </li> */}
            <li style={{ marginBottom: "10px" }}>
            {pData?.b7}
            </li>
          </ol>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.EligibilityHeading}
          </h2>
          <ul style={{ marginLeft: "40px" }} className={styles.eligibilityList}>
            <li>
            {pData?.e1}
            </li>
            <li>{pData?.e2}</li>
            <li>
            {pData?.e3}
            </li>
            <li>{pData?.e4}</li>
            <li>
            {pData?.e5}
            </li>
            <li>
            {pData?.e6}
            </li>
          </ul>
          
          <p className={styles.eligibilityAdditional}>
          {pData?.EligibilityListHead}
          </p>
          <ul className={styles.eligibilityAdditionalList}>
            <li> {pData?.UkrainHeading}</li>
            <li>
            {pData?.u1}
            </li>
            <li>
            {pData?.u2}
            </li>
            <li>
            {pData?.u3}
            </li>
            <li>  {pData?.u4}</li>
            <li>
            {pData?.u5}
            </li>
            <li>
            {pData?.u6}
            </li>
            <li>
            {pData?.u7}
            </li>
            <li>
            {pData?.u8}
            </li>
         
            <ul className={styles.eligibilityAdditionalList02} style={{ marginLeft: "40px", listStyleType: "circle" }}>
         
            <li>{pData?.sdc1}</li>
            <li>{pData?.sdc2}</li>
            <li>{pData?.sdc3}</li>
            <li>{pData?.sdc4}</li>
            <li>{pData?.sdc5}</li>
            </ul>
            <li>{pData?.sdc5SubLi1}</li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.HowtoApplyHeading}
          </h2>
          <p className={styles.processDescription}>
          {pData?.HowtoApplySubHead}
          </p>
          <ol className={styles.processList}>
            <li>{pData?.ha1}</li>
            <li>{pData?.ha2}</li>
            <li>{pData?.ha3}</li>
            <li>{pData?.ha4}</li>
            <li>{pData?.ha5}</li>
            {/* <li>{pData?.ha6}</li> */}
          </ol>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="pgwp-requirements"
          ref={(el) => (sectionsRef.current[26] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.IfYouSubmitHeading}
          </h2>
          <h4>{pData?.IfYouSubmitSubHead}</h4>
          <p>
          {pData?.IfYouSubmitPara}
          </p>
          
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li><strong>{pData?.IfYouGraduatedHeading}</strong></li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li> <strong>{strongText1} </strong>{remainingText1}</li>
            <li><strong>{strongText2}</strong>{remainingText2}<Link href="#field-study"> Field of study Requirement </Link></li>
            </ul>
          </ul>

         
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li><strong>{pData?.IfYouGraduatedAnotherHeading}</strong> </li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li> <strong>{strongText3} </strong>{remainingText3}</li>
            <li><strong>{strongText4}</strong>{remainingText4}<Link href="#field-study"> Field of study Requirement </Link></li>
            </ul>
          </ul>

         
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li> <strong>{pData?.IfYouGraduatedCollegeHeading}</strong></li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li><strong>{strongText5}</strong>{remainingText5}</li>
            <li> <strong>{strongText6}</strong>{remainingText6}<Link href="#field-study"> Field of study Requirement </Link></li>
            </ul>
          </ul>
          <button id="field-study"
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "/clb-ilets-calculator")
            }
          >
           CLB CALCULATOR
          </button>

          <h3>{pData?.FieldStudyRequHeading}</h3>
          <p style={{ marginTop:"20px" , marginBottom:"20px"}}>
          {pData?.FieldStudyRequPara}
          </p>
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
            <li>{pData?.fsrLi1}</li>
            <li>{pData?.fsrLi2}</li>
            <li>{pData?.fsrLi3}</li>
            <li>{pData?.fsrLi4}</li>
            <li>{pData?.fsrLi5}</li>
          </ul>

          {/* <h4>Select Field of Study:</h4>
          <select className={styles.dropdown}>
            <option value="">Select a field</option>
            <option value="agriculture">Agriculture and Agri-food</option>
            <option value="healthcare">Healthcare</option>
            <option value="stem">Science, Technology, Engineering and Mathematics (STEM)</option>
            <option value="trade">Trade</option>
            <option value="transport">Transport</option>
          </select> */}

             <FieldOfStudyTable/>

          <h2>{pData?.ImportantPointNoteHeading}</h2>
          <ul className={styles.ImportantPointNoteUl}>
            <li>{pData?.ipn1}
            </li>
            <li>{pData?.ipn2}
            </li>
            <li>{pData?.ipn3}
            </li>
            <li>{pData?.ipn4}
            </li>
            <li>{pData?.ipn5}</li>
          </ul>
        </section>


        <section
          className={`${styles.refusals} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.RefusalHeading}
          </h2>
          <ul className={styles.refusalList}>
          <li>
          {pData?.RefusalSubHead}
            </li>
            <li>{pData?.r1}</li>
            <li>
            {pData?.r2}
            </li>
            <li>
            {pData?.r3}
            </li>
            <li>
            {pData?.r4}
            </li>
            <li>
            {pData?.r5}
            </li>
            <li>
            {pData?.r6}
            </li>
            <li>
            {pData?.r7}
            </li>
            <li>
            {pData?.r8}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.callToAction} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.StillNotHeading}</h2>
          <p className={styles.callToActionText}>
          {pData?.s1}
          </p>
          <p className={styles.callToActionText}>
          {pData?.s2}
          </p>
          <button
            id="book-appointment"
            href="/booking"
            className={styles.button}
          >
            Book Appointment
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
        <h2>  {pData?.WhyChooseUsHeading01 }</h2>
          <ul className={styles.whychooseusLi} style={{marginLeft: "40px" , textAlign:"left"}}>
            <li>
              <strong>{strongText91}</strong>{" "} {remainingText91}
            </li>
            <li>
            <strong>{strongText92}</strong>{" "} {remainingText92}
            </li>
            <li>
            <strong>{strongText93}</strong>{" "} {remainingText93}
            </li>
            <li>
            <strong>{strongText94}</strong>{" "} {remainingText94}
            </li>
          </ul>
        </section>
      </div>

      <div id="faqs">
      <FAQ_White_Internal data={pData} />
      </div>
      {pData?.show_testimonials == "Y" && (
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

export default VisitorToStudent;
