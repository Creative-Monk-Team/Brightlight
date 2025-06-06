import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SuperVisa.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";
import Image from "next/image";
import { fetchSeoData } from "../lib/fetchSeoData";

export async function getServerSideProps() {
  return fetchSeoData("superVisaMeta"); // Pass the API endpoint specific to this page
}

const SuperVisa = ({metaData}) => {
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
    fetch("https://brightlight-node.onrender.com/superVisa")
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
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("income-table")}>Income Table</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("refusal-reasons")}>Refusal Reasons</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container} id="container">
        <h1  className={`${styles.heading} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}>
        {pData?.superVisaHeading}
        </h1>

        <section className={`${styles.introduction} ${styles.section}`} id="testing" ref={(el) => sectionsRef.current[1] = el}>
          <p>
          {pData?.superVisaPara}
          </p>
        </section>

        <section className={`${styles.benefits} ${styles.section}`} id="benifits" ref={(el) => sectionsRef.current[2] = el}>
          <h2 className={styles.subheading}>{pData?.BenifitsHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.BenifitsList1}
            </li>
            <li>
            {pData?.BenifitsList2}
            </li>
          </ul>
        </section>

        <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[3] = el}>
          <h2 className={styles.subheading}>
          {pData?.EligibilityHeading}
          </h2>
          <p>
          {pData?.EligibilitySubHead}
          </p>
          <ul>
            <li> {pData?.EligibilityList1}</li>
            <li>
            {pData?.EligibilityList2}
            </li>
            <li>
            {pData?.EligibilityList3}
            </li>
            <li>
            {pData?.EligibilityList4}
              <ul className={styles.subList}> 
                <li>{pData?.EligibilitySub4List1}</li>
                <li>   {pData?.EligibilitySub4List2}</li>

              </ul>
              <li>
              {pData?.EligEligibilityList5ibilityList2}
                </li>
            </li>
          </ul>

          <h3>   {pData?.ApartHeading}</h3>
          <h4>   {pData?.ApartSubHead}</h4>
          <ul>
            <li>
            {pData?.ApartLi1}
            </li>
            <li>{pData?.ApartLi2}</li>
            <li>
            {pData?.ApartLi3}
            </li>
            <li>
            {pData?.ApartLi4}
            </li>
          </ul>
        </section>

        <section className={`${styles.incomeTable} ${styles.section}`} id="income-table" ref={(el) => sectionsRef.current[4] = el}>
          <h2 className={styles.subheading}>{pData?.SuperVisaTabHeading}</h2>
          <h4>
          {pData?.SuperVisaTabSubHead}
          </h4>
          <h4>{pData?.SuperVisaTabSubHead2}</h4>
          <table className={styles.table}>
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
        </section>

        <section className={`${styles.applicationProcess} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[5] = el}>
          <h2 className={styles.subheading}>{pData?.HowtoApplyHeading}</h2>
          <h4>{pData?.HowtoApplySubHead}</h4>
          <ol>
            <li>
            {pData?.ha1}
            </li>
            <li>
            {pData?.ha2}
            </li>
            <li>
            {pData?.ha3}
            </li>
            <li>
            {pData?.ha4}
            </li>
            <li>
            {pData?.ha5}
            </li>
          </ol>
        </section>

        <section  className={`${styles.refusalReasons} ${styles.section}`} id="refusal-reasons" ref={(el) => sectionsRef.current[6] = el}>
          <h2 className={styles.subheading}>{pData?.RefusalHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.r1}
            </li>
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
          </ul>
          <p>
          {pData?.rPara1}
          </p>
          <p>
          {pData?.rPara2}
          </p>
        </section>

        {/* <section className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[7] = el} >
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>

        </section> */}
        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
         <h2>{pData?.WhyChooseUsHeading01 }</h2>
          <ul className={styles.whychooseusLi} style={{marginLeft: "40px"}}>
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
          <button
          onClick={() =>
            (window.location.href =
              "/booking")
          }
        >
          Book Appointment
        </button>
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

export default SuperVisa;
