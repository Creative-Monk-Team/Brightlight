import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/About.module.css";
import AboutLogo from "../assets/brightlight-main-logo.webp";
import INTEGRITY from "../assets/integrity1.png";
import RESPONSIBILITY from "../assets/responsibility.png";
import Reliability from "../assets/reliability.png";
import VisaImg from "../assets/visa.png";
import TickBlue from "../assets/tick-blue.png";
import SmileBlue from "../assets/smile-blue.png";
import TiktokBlue from "../assets/tiktok1Icon.png";
import LinkedinBlue from "../assets/linkedin1Icon.png";
import InstaBlue from "../assets/insta.png";
import FacebookBlue from "../assets/facebook1Icon.png";
import YoutubeBlue from "../assets/youtube1Icon.png";
import Twelve from "../assets/12-years22.png";
import Comprehensive from "../assets/comprehensive11.png";
import BestChoice from "../sections/BestChoice.jsx";
import Map from "../sections/Map.jsx";
import Navbar1 from "../components/Navbar1.jsx";
import Footer1 from "../components/Footer1.jsx";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import Odometer from "../components/Odometer.jsx";
import Image from "next/image";
import Link from "next/link.js";


export async function getServerSideProps() {
  try {
    const res = await fetch("https://brightlight-node.onrender.com/about-meta");
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

let About = ({metaData}) => {
  let [topSectionData, setTopSectionData] = useState([]);

  let [foundationSection, setFoundationSection] = useState([]);
  let [visionSection, setVisionSection] = useState([]);
  let [pillarsSection, setPillarsSection] = useState([]);
  let [directorsSection, setDirectorsSection] = useState([]);
  let [weAre, setWeAre] = useState([]);
  let [achievements, setAchievements] = useState([]);
  let [foundationImage, setFoundationImage] = useState([]);
  let [visionImage, setVisionImage] = useState([]);
  let [pillarsImage, setPillarsImage] = useState([]);
  let [socialMedia, setSocialMedia] = useState([]);
  let [socialMediaData, setSocialMediaData] = useState([]);
  let [globallyData, setGloballyData] = useState([]);
  let [globallyImg, setGloballyImg] = useState([]);
  let [weAreSmall, setWeAreSmall] = useState([]);

  const foundationRef = useRef(null);
  const visionRef = useRef(null);
  const pillarsRef = useRef(null);
  const directorsRef = useRef(null);
  const weAreRef = useRef(null);
  const achievementsRef = useRef(null);
  const socialPresenceRef = useRef(null);
  const globallyRef = useRef(null);


  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/aboutUsTopSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setTopSectionData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/aboutUsFoundationSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setFoundationSection(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/aboutUsVisionSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setVisionSection(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/aboutUsPillarsSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPillarsSection(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/we-are")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setWeAre(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    //

    fetch("https://brightlight-node.onrender.com/weAreSmall")
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/aboutUsAchievementsSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setAchievements(data[0]);
        }
      })
      .catch((error) => {
        console.log(error) ;
      });

    fetch("https://brightlight-node.onrender.com/ourFoundationSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setFoundationImage(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/ourVisionSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setVisionImage(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/ourPillarsSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPillarsImage(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/socialMedia")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setSocialMedia(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/aboutUsSocialPresenceSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setSocialMediaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/globally")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setGloballyImg(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/aboutUsGloballySection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setGloballyData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/directors")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setDirectorsSection(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, []);

 

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: foundationRef, animationClass: styles.slideInFromTop },
        { ref: visionRef, animationClass: styles.slideInFromLeft },
        { ref: pillarsRef, animationClass: styles.slideInFromTop },
        { ref: directorsRef, animationClass: styles.slideInFromLeft },
        { ref: weAreRef, animationClass: styles.slideInFromTop },
        { ref: achievementsRef, animationClass: styles.slideInFromTop },
        { ref: socialPresenceRef, animationClass: styles.slideInFromTop },
        { ref: globallyRef, animationClass: styles.slideInFromLeft },
      ];

      sections.forEach(({ ref, animationClass }) => {
        const element = ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top <= windowHeight * 0.75) {
            element.classList.add(animationClass);
            element.classList.remove(styles.hidden);
          } else {
            element.classList.remove(animationClass);
            element.classList.add(styles.hidden);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
      <link rel="canonical" href="https://brightlightimmigration.ca/about-us" />
        <title>
          {metaData.metaTitle
            ? metaData?.metaTitle
            : "About Us - Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData.metaOgTitle
              ? metaData?.metaOgTitle
              : "About Us - Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData.metaKeywords
              ? metaData?.metaKeywords
              : "About Us, Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Head>

      <Navbar1 />
      <div className={styles.aboutBanner} >
      <div className={styles.aboutUsTopContentSection}>
          <div className={styles.aboutLogo}>
               <img src={"/assets/brightlight-main-logo.webp"} />
          </div>
          <div className={styles.aboutHeading}>
            <h3>{topSectionData?.heading}</h3>
          </div>
          <div className={styles.aboutUsFeaturesSection}>
            <div className={styles.aboutUsFeature}>
                 <Image loading="lazy" height={50} width={100} src={Twelve} alt="twelve"/>
              <p>{topSectionData?.feature1Heading}</p>
            </div>
            <div className={styles.aboutUsFeature}>
                 <Image loading="lazy" height={50} width={100} src={Comprehensive} alt="comprehensive"/>

              <p>{topSectionData?.feature2Heading}</p>
            </div>
          </div>
        </div>
        <div className={styles.bannerParaParent}>
          <p className={styles.bannerPara}>{topSectionData?.description}</p>
        </div>
      </div>

      <div className={styles.foundationMainSection}>
      <div ref={foundationRef} className={`${styles.foundation} ${styles.hidden}`}>
          <div className={`${styles.foundationInside} ${styles.foundation1}`}>
               <Image loading="lazy" height={50} width={100} src={foundationImage?.image} alt="foundation image" />
            <div className={`${styles.designContent} ${styles.designContent1}`}>
              <h3>{foundationSection?.heading}</h3>
              <h3 className={styles.borderBottomFoundation}>
                {foundationSection?.headline1}
              </h3>
              <h3>{foundationSection?.headline2}</h3>
            </div>
          </div>
          <div className={styles.foundationContentSection}>
            <p>{foundationSection?.description1}</p>
            <p>{foundationSection?.description2}</p>
          </div>
        </div>
      </div>

      <div className={styles.visionMainSection}>
      <div ref={visionRef} className={`${styles.vision} ${styles.hidden}`}>
          <div className={styles.visionContentSection}>
            <p>{visionSection?.description}</p>
          </div>
          <div className={styles.visionInside}>
            <div className={styles.visionInsideImg}>
                 <Image loading="lazy" height={50} width={100} src={visionImage?.image} alt="vision image"/>
            </div>
            <div className={styles.designContent}>
              <h3>{visionSection?.heading}</h3>
              <h3>{visionSection?.headline1}</h3>
              <hr />
              <h3>{visionSection?.headline2}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pillarParent}>
      <div ref={pillarsRef} className={`${styles.pillarSection} ${styles.hidden}`}>
          <div className={styles.pillarLogo}>
               <Image loading="lazy" height={50} width={100} src={pillarsImage?.image} alt="pillers image"/>
            <div className={styles.pillarLogoContent}>
              <h3>{pillarsSection?.heading}</h3>
              <p>{pillarsSection?.description1}</p>
            </div>
          </div>

          <div className={styles.pillarFeatureSection}>
            <div className={styles.pillarFeatureSvg}>
                 <Image loading="lazy" height={50} width={100} src={INTEGRITY} alt="integrity"/>
              <h4>{pillarsSection?.pillar1Heading}</h4>
              <p>{pillarsSection?.pillar1Description}</p>
            </div>

            <div className={styles.pillarFeatureSvg}>
                 <Image loading="lazy" height={50} width={100} src={RESPONSIBILITY} alt="responsiblity"/>
              <h4>{pillarsSection?.pillar2Heading}</h4>
              <p>{pillarsSection?.pillar2Description}</p>
            </div>

            <div className={styles.pillarFeatureSvg}>
                 <Image loading="lazy" height={50} width={100} src={Reliability} alt="reliability"/>
              <h4>{pillarsSection?.pillar3Heading}</h4>
              <p>{pillarsSection?.pillar3Description}</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={directorsRef} className={`${styles.meetDirectorsParent} ${styles.hidden}`}>
      <div className={styles.meetDirectorMain}>
          <h3>{directorsSection?.heading}</h3>
        </div>
        {directorsSection?.d1name && directorsSection?.d1image ? (
          <div className={styles.thedirectors}>
            <div className={styles.meetDirectorimgContent}>
              <h3>{directorsSection?.d1name}</h3>
              <h3>{directorsSection?.d1designation}</h3>
              <p>{directorsSection?.d1description}</p>
            </div>

            <div className={styles.meetDirectorImg}>
                 <Image loading="lazy" height={50} width={100} src={directorsSection?.d1image} alt="director image"/>
            </div>
          </div>
        ) : null}

        {directorsSection?.d2name && directorsSection?.d2image ? (
          <div className={styles.thedirectors}>
            <div className={styles.meetDirectorImg}>
                 <Image loading="lazy" height={50} width={100} src={directorsSection?.d2image} alt="director image"/>
            </div>
            <div className={styles.meetDirectorimgContent}>
              <h3>{directorsSection?.d2name}</h3>
              <h3>{directorsSection?.d2designation}</h3>
              <p>{directorsSection?.d2description}</p>
            </div>
          </div>
        ) : null}

        {directorsSection?.d3name && directorsSection?.d3image ? (
          <div className={styles.thedirectors}>
            <div className={styles.meetDirectorimgContent}>
              <h3>{directorsSection?.d3name}</h3>
              <h3>{directorsSection?.d3designation}</h3>
              <p>{directorsSection?.d3description}</p>
            </div>

            <div className={styles.meetDirectorImg}>
                 <Image loading="lazy" height={50} width={100} src={directorsSection?.d3image} alt="director image"/>
            </div>
          </div>
        ) : null}

        {directorsSection?.d4name && directorsSection?.d4image ? (
          <div className={styles.thedirectors}>
            <div className={styles.meetDirectorImg}>
                 <Image loading="lazy" height={50} width={100} src={directorsSection?.d4image} alt="director image"/>
            </div>
            <div className={styles.meetDirectorimgContent}>
              <h3>{directorsSection?.d4name}</h3>
              <h3>{directorsSection?.d4designation}</h3>
              <p>{directorsSection?.d4description}</p>
            </div>
          </div>
        ) : null}

        {directorsSection?.d5name && directorsSection?.d5image ? (
          <div className={styles.thedirectors}>
            <div className={styles.meetDirectorimgContent}>
              <h3>{directorsSection?.d5name}</h3>
              <h3>{directorsSection?.d5designation}</h3>
              <p>{directorsSection?.d5description}</p>
            </div>

            <div className={styles.meetDirectorImg}>
                 <Image loading="lazy" height={50} width={100} src={directorsSection?.d5image} alt="director image"/>
            </div>
          </div>
        ) : null}
      </div>

      <div ref={weAreRef} className={styles.weAreParent}>
        <div className={styles.weAreParentImg}>
             <Image loading="lazy" height={50} width={100} src={weAre?.img} className={styles.weAreBig} alt="weare image"/>
             <Image loading="lazy" height={50} width={100} src={weAreSmall?.image} className={styles.weAreSmall} alt="weare image"/>
        </div>
      </div>

      <div className={styles.ourAchivementParent}>
        <p className={styles.andSymbol}>&</p>
        <div className={styles.ourAchivementSection}>
          <div className={styles.ourAchivementHeading}>
            <h3>{achievements?.heading}</h3>
          </div>

          <div className={styles.ourAchivementCardParent}>
            <div className={styles.ourAchivementCard}>
                 <Image loading="lazy" height={50} width={100} src={VisaImg} alt="visa image"/>
              <h3><Odometer value={achievements?.achievement1Numbers}/><span className={styles.ourAchivementCardPlus}>+</span></h3>
              <p>{achievements?.achievement1Heading}</p>
            </div>

            <div className={styles.ourAchivementCard}>
                 <Image loading="lazy" height={50} width={100} src={TickBlue} alt="tick blue"/>
              <h3><Odometer value={achievements?.achievement2Numbers}/><span className={styles.ourAchivementCardPlus}>+</span></h3>
              <p>{achievements?.achievement2Heading}</p>
            </div>

            <div className={styles.ourAchivementCard}>
                 <Image loading="lazy" height={50} width={100} src={SmileBlue} alt="our achievement"/>
              <h3><Odometer value={achievements?.achievement3Numbers}/><span className={styles.ourAchivementCardPlus}>+</span></h3>
              <p>{achievements?.achievement3Heading}</p>
            </div>
          </div>
        </div>
      </div>

      <BestChoice />

      <div className={styles.socialPresenceParent}>
      <div className={styles.socialPresence}>
          <h3>{socialMediaData?.heading}</h3>
          <p>{socialMediaData?.description1}</p>

          <p>{socialMediaData?.description2}</p>

          <div className={`w-full flex items-center justify-center`}>
            <div className={`relative w-[18vw] my-5  h-[82vh] ${styles.socialMoblileImgDiv}`}>
              <Image loading="lazy" fill src={socialMedia?.image} alt="socialmedia"/>
            </div>
               
          </div>

          <div className={styles.socialPresenceIconsParent}>
            <p>Find Us On</p>
            <div className={styles.socialPresenceIcons}>
              {/* {socialMediaData?.tiktokLink ? ( */}
                <Link href="https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1">
                     <Image loading="lazy" height={50} width={100} src={TiktokBlue} alt="tiktok"/>
                </Link>
              {/* ) : null} */}

              {/* {socialMediaData?.linkedinLink ? ( */}
                <Link href="https://ca.linkedin.com/in/loveneet-paneswar-5b2377198">
                     <Image loading="lazy" height={50} width={100} src={LinkedinBlue} alt="linked in"/>
                </Link>
              {/* ) : null} */}

              {socialMediaData?.instagramLink ? (
                <Link href={socialMediaData?.instagramLink}>
                     <Image loading="lazy" height={50} width={100} src={InstaBlue} alt="insta"/>
                </Link>
              ) : null}

              {socialMediaData?.facebookLink ? (
                <Link href={socialMediaData?.facebookLink}>
                     <Image loading="lazy" height={50} width={100} src={FacebookBlue} alt="fb"/>
                </Link>
              ) : null}

              {socialMediaData?.youtubeLink ? (
                <Link href={socialMediaData?.youtubeLink}>
                     <Image loading="lazy" height={50} width={100} src={YoutubeBlue} alt="yt"/>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.vancouverParent}
        style={{ backgroundImage: `url(${globallyImg?.image})` }}
      >
       <div ref={globallyRef} className={`${styles.vancouver} ${styles.hidden}`}>
          <h3>{globallyData?.heading}</h3>
        </div>
      </div>

      <Map />

      <Footer1 />
    </>
  );
};
export default About;
