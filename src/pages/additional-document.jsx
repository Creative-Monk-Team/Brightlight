import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/AdditionalDocument.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";
import Image from "next/image";
import Link from "next/link";


export async function getServerSideProps() {
  try {
    const res = await fetch("https://brightlight-node.onrender.com/addDocMeta");
    const data = await res.json();

    return {
      props: {
        metaData: data.length > 0 ? data[0] : null,
      },
    };
  } catch (error) {
    console.error("Error fetching SEO metadata:", error);
    return {
      props: {
        metaData: null,
      },
    };
  }
}

const AdditionalDocument = ({metaData}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [pData, setPData] = useState([]);

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
    fetch("https://brightlight-node.onrender.com/additionalDocument")
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
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("key-points")}>Key Points</p>
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
        <header className={styles.header} id="about-program">
          <h1>{pData?.AdditionalDocumentHeading}</h1>
        </header>
        <main className={styles.mainContent}>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <h2>{pData?.DonotWorryHeading}</h2>
            <ul style={{ marginLeft: "40px" }}>
              <li>{pData?.DonotWorryPara1}</li>
              <li>{pData?.DonotWorryPara2}</li>
              <li>{pData?.DonotWorryPara3}</li>
              <li>{pData?.DonotWorryPara4}</li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="key-points"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>{pData?.KeyPointsHeading}</h2>
            <ul style={{ marginLeft: "40px" }}>
              <li>{pData?.k1}</li>
              <li>{pData?.k2}</li>
              <li>{pData?.k3}</li>
              <li>
                {pData?.k4}
                <Link
                  id="book-appointment"
                  href="/booking"
                >
                  Click here
                </Link>
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>{pData?.StillNotHeading}</h2>
            <p>{pData?.s1}</p>
            <p>{pData?.s2}</p>
            <button
              onClick={() =>
                (window.location.href =
                  "/booking")
              }
            >
              Book Appointment
            </button>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[9] = el)}
          >
            <h2> {pData?.WhyChooseUsHeading01}</h2>
            <ul className={styles.whychooseusLi}  style={{ marginLeft: "40px" }}>
              <li>
                <strong>{strongText91}</strong> {remainingText91}
              </li>
              <li>
                <strong>{strongText92}</strong> {remainingText92}
              </li>
              <li>
                <strong>{strongText93}</strong> {remainingText93}
              </li>
              <li>
                <strong>{strongText94}</strong> {remainingText94}
              </li>
            </ul>
          </section>
        </main>
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

export default AdditionalDocument;
