import React, { useEffect, useRef, useState, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "../styles/HomePage.module.css";
import WhiteLogo from "../assets/bright-source.webp";
import LinkedinLogo from "../assets/bannerLinkedinLogo.png";
import OurProcess from "../sections/OurProcess";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import FAQ_Blue from "../sections/FAQ_Blue";
import Testimonials_White from "../sections/Testimonials_White";
import Blogs from "../sections/Blogs";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import Odometer from "../components/Odometer";
import { debounce } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import NewsComponent from "../components/NewsComponent";

export async function getServerSideProps() {
  try {
    const res = await fetch("https://brightlight-node.onrender.com/home-meta");
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

let HomePage = ({metaData}) => {
  const swiperRef = useRef(null);

  // State Variables
  const [newsSectionData, setNewsSectionData] = useState([]);
  const [linkedinLink, setLinkedingLink] = useState(""); // Should be a string, not an array
  const [newsData, setNewsData] = useState([]);
  const [topSection, setTopSection] = useState([]);
  const [headline1Rest, setHeadline1Rest] = useState("");
  const [headline1Last, setHeadline1Last] = useState("");
  const [headline2Rest, setHeadline2Rest] = useState("");
  const [headline2Last, setHeadline2Last] = useState("");
  const [memberData, setMemberData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [loveneetBgImage, setLoveneetBgImage] = useState("");
  const [achiementsData, setAchievementsData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [services, setServices] = useState([]);
  const [loaded, setLoaded] = useState(false); // Manage loading state

  // Intersection Observer States & Refs
  const expertiseContentParentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const featuresSectionRef = useRef(null);

  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const testimonialsSectionRef = useRef(null);

  const autoSlideIntervalRef = useRef(null);
  const simplifyingRef = useRef(null); // Ref for simplifying section

  // Meta & Image Data
  // const [metaData, setMetaData] = useState([]);
  const [loveneetAlt, setLoveneetAlt] = useState("");
  const [memberOfAlt, setMemberOfAlt] = useState("");
  const [simplifyData, setSimplifyData] = useState([]);

  useEffect(() => {
    const sections = [
      { ref: sectionRef, callback: setIsVisible },
      { ref: featuresSectionRef, callback: setIsFeaturesVisible },
      { ref: testimonialsSectionRef, callback: setIsTestimonialsVisible },
    ];

    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = sections.find((s) => s.ref.current === entry.target);
        if (section?.callback) {
          section.callback(entry.isIntersecting);
        }
      });
    }, observerOptions);

    // Observe sections
    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Cleanup function
    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  
  useEffect(() => {
    // Load data
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://brightlight-node.onrender.com/home-top"
        );
        let data = await response.json();
        if (data) {
          let headlineText = data[0].headline1;
          let words = headlineText.split(" ");
          let lastWord = words.pop();
          let restOfText = words.join(" ");
          setTopSection(data[0]);
          setHeadline1Rest(restOfText);
          setHeadline1Last(lastWord);

          let headlineText2 = data[0].headline2;
          let words2 = headlineText2.split(" ");
          let lastWord2 = words2.pop();
          let restOfText2 = words2.join(" ");
          setHeadline2Rest(restOfText2);
          setHeadline2Last(lastWord2);
        }
        fetch("https://brightlight-node.onrender.com/news-section")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data) {
              setNewsSectionData(data[0]);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        fetch("https://brightlight-node.onrender.com/loveneet")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data) {
              setLinkedingLink(data[0].linkedin);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        fetch("https://brightlight-node.onrender.com/loveneetBgAlt")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data) {
              setLoveneetAlt(data[0]);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        fetch("https://brightlight-node.onrender.com/featuresAlt")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data) {
              setSimplifyData(data[0]);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        fetch("https://brightlight-node.onrender.com/memberOfAlt")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data) {
              setMemberOfAlt(data[0]);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        fetch("https://brightlight-node.onrender.com/news")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data) {
              setNewsData(data.slice(0, 2));
            }
          })
          .catch((error) => {
            console.log(error);
          });

        response = await fetch(
          "https://brightlight-node.onrender.com/member-of"
        );
        data = await response.json();
        if (data) {
          setMemberData(data[0]);
        }

        response = await fetch(
          "https://brightlight-node.onrender.com/features"
        );
        data = await response.json();
        if (data) {
          setFeaturesData(data[0]);
        }

        response = await fetch(
          "https://brightlight-node.onrender.com/loveneetBg"
        );
        data = await response.json();
        if (data) {
          setLoveneetBgImage(data[0]);
        }

        response = await fetch(
          "https://brightlight-node.onrender.com/achievements-section"
        );
        data = await response.json();
        if (data) {
          setAchievementsData(data[0]);
        }

        response = await fetch(
          "https://brightlight-node.onrender.com/services-section"
        );
        data = await response.json();
        if (data) {
          let filteredArray = [];
          for (let i = 1; i <= 8; i++) {
            let serviceSvg = data[0][`service${i}svg`];
            let serviceName = data[0][`service${i}name`];
            let serviceDesc = data[0][`service${i}desc`];
            let serviceAlt = data[0][`service${i}alt`];

            if (serviceSvg && serviceName) {
              filteredArray.push({
                title: serviceName,
                img: serviceSvg,
                desc: serviceDesc,
                alt: serviceAlt,
              });
            }
          }
          setServices(filteredArray);
          setServicesData(data[0]);
        }

        setLoaded(true); // Set loaded to true after fetching data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          // Optionally, stop observing once it's visible
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // observing within the viewport
        rootMargin: "0px",
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (simplifyingRef.current) {
      observer.observe(simplifyingRef.current);
    }

    return () => {
      if (simplifyingRef.current) {
        observer.unobserve(simplifyingRef.current);
      }
    };
  }, []);
  const debouncedSlideNext = debounce(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, 500);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (expertiseContentParentRef.current) {
      observer.observe(expertiseContentParentRef.current);
    }

    return () => {
      if (expertiseContentParentRef.current) {
        observer.unobserve(expertiseContentParentRef.current);
      }
    };
  }, []);

  const sourceContentParentRef = useRef(null);
  const sourceContentRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sourceContentParentRef.current) {
      observer.observe(sourceContentParentRef.current);
    }

    sourceContentRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (sourceContentParentRef.current) {
        observer.unobserve(sourceContentParentRef.current);
      }
      sourceContentRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  const aspectsCardParentRef = useRef(null);
  const aspectsCardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (aspectsCardParentRef.current) {
      observer.observe(aspectsCardParentRef.current);
    }

    aspectsCardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (aspectsCardParentRef.current) {
        observer.unobserve(aspectsCardParentRef.current);
      }
      aspectsCardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  useEffect(() => {
    // Start the automatic slide after loading
    // autoSlideIntervalRef.current = setInterval(() => {
    //   if (swiperRef.current) {
    //     swiperRef.current.slideNext();
    //   }
    // }, 3000);

    let handleClick = () => {
      if (swiperRef.current) {
        setTimeout(() => {
          swiperRef.current.slidePrev();
        }, 500);
      }

      if (swiperRef.current) {
        setTimeout(() => {
          swiperRef.current.slidePrev();
        }, 1000);
      }

      if (swiperRef.current) {
        setTimeout(() => {
          swiperRef.current.slideNext();
        }, 1500);
      }
    };

    handleClick();

    // Clear the interval on component unmount
    // return () => clearInterval(autoSlideIntervalRef.current);
  }, []);

  const link = (title) => {
    switch (title) {
      case "Permanent Residency":
        return "/permanent-residency";
      case "BCPNP":
        return "/bc-pnp";
      case "Visitor Visa":
        return "/visitor-visa";
      case "Study Visa":
        return "/student-visa";
      case "Family Sponsorship":
        return "/family-reunification-sponsorship";
      case "Work Permit":
        return "/work-permit";
      case "PFL":
        return "/reply-to-pfl-page";
      default:
        return "#";
    }
  };
  const linkLookup = useMemo(
    () => ({
      "Permanent Residency": "/permanent-residency",
      BCPNP: "/bc-pnp",
      "Visitor Visa": "/visitor-visa",
      "Study Visa": "/student-visa",
      "Family Sponsorship": "/family-reunification-sponsorship",
      "Work Permit": "/work-permit",
      PFL: "/reply-to-pfl-page",
    }),
    []
  );

  const handleCardClick = (title) => {
    const link = linkLookup[title]; // Lookup the link using the title
    if (link) {
      window.location.href = link; // router.replace to the URL
    }
  };
  const rcicAppointmentUrl = "/booking";

  const memberInfo = [
    { heading: memberData?.heading1, img: memberData?.heading1Img },
    { heading: memberData?.heading2, img: memberData?.heading2Img },
    { heading: memberData?.heading3, img: memberData?.heading3Img },
  ];

  const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
      if (url) {
        const img = new window.Image(); // Ensure using the native Image API
        img.src = url;
      }
    });
  };


  // Modify the effect to preload only the visible images
  useEffect(() => {
    // Preload service images that are visible (or a subset for initial load)
    const serviceImages = services.slice(0, 3).map((service) => service.img); // Preload only the first few
    preloadImages(serviceImages);

    setLoaded(true); // Assuming data is fetched and set here
  }, [services]);

  useEffect(() => {
    if (!swiperRef.current) return;

    autoSlideIntervalRef.current = setInterval(() => {
      if (swiperRef.current && swiperRef.current.activeIndex < 2) {
        swiperRef.current.slideNext();
      } else {
        clearInterval(autoSlideIntervalRef.current);
      }
    }, 3000);

    return () => clearInterval(autoSlideIntervalRef.current);
  }, []); // Remove `services` from the dependency list, unless absolutely needed

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <NextSeo
        title={metaData?.metaTitle || "Brightlight Immigration"}
        description={
          metaData?.metaDesc ||
          "Learn about Brightlight Immigration, ;'.mission, values, and dedicated team."
        }
        openGraph={{
          title: metaData?.metaOgTitle || "Brightlight Immigration",
          description:
            metaData?.metaOgDesc ||
            "Discover the story behind Brightlight Immigration.",
          images: [{ url: ogImage, type: "image/png" }],
          site_name: "Brightlight Immigration",
        }}
      />
      <Head>
        <meta name="keywords" content={metaData?.metaKeywords || "default, keywords"} />
      </Head>

      <Navbar1 showBlue={true} />
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <TransitionGroup>
            {loaded && (
              <CSSTransition
                classNames={{
                  enter: styles.fadeIn,
                  enterActive: styles.fadeInActive,
                  exit: styles.fadeOut,
                  exitActive: styles.fadeOutActive,
                }}
                timeout={0}
              >
                <div className={styles.bannerHeading}>
                  <h1 className={`${styles.slideInFromLeft} ${styles.fadeIn}`}>
                    {headline1Rest}{" "}
                    <span className={styles.bannerBlueHeading}>
                      {headline1Last}
                    </span>
                  </h1>
                  <h1 className={`${styles.slideInFromRight} ${styles.fadeIn}`}>
                    {headline2Rest}{" "}
                    <span className={styles.bannerBlueHeading}>
                      {headline2Last}
                    </span>
                  </h1>
                  <h2
                    className={`${styles.slideInFromBottom} ${styles.fadeIn}`}
                  >
                    {topSection?.SmallHeadline1}
                  </h2>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup>
            {loaded && (
              <CSSTransition
                classNames={{
                  enter: styles.fadeIn,
                  enterActive: styles.fadeInActive,
                  exit: styles.fadeOut,
                  exitActive: styles.fadeOutActive,
                }}
                timeout={0}
              >
                <div className={styles.cardContainer}>
                  {services.map((card, index) => (
                    <div
                      key={index}
                      className={styles.card}
                      onClick={() => handleCardClick(card.title)}
                    >
                      <CSSTransition
                        classNames={{
                          enter: styles.fadeIn,
                          enterActive: styles.fadeInActive,
                          exit: styles.fadeOut,
                          exitActive: styles.fadeOutActive,
                        }}
                        timeout={0}
                      >
                        <Image loading="lazy" height={50} width={100}
                          src={card.img}
                          className={`${styles.icon} ${styles.fadeIn}`}
                          alt={card.alt}
                          title={card.alt}
                        // Arbitrary number, Next.js auto-adjusts it

                        />
                      </CSSTransition>

                      <div className={styles.title}>
                        <h2>{card.title}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>

          <Link href="/more-services">
            <button className={styles.bookButton17} role="button">
              More Services
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.bannerParent2}>
        {/* Check if loveneetBgImage exists before using it */}
        {loveneetBgImage?.image && (
          <Image loading="lazy" height={50} width={100}
            src={loveneetBgImage.image}
            alt={loveneetAlt.alt}
            title={loveneetAlt.alt}
            className={styles.backgroundImage}
          // Arbitrary number, Next.js auto-adjusts it

          />
        )}

        <div className={styles.bannerParent2ButtonDiv}>
          {/* LinkedIn button */}
          {linkedinLink && (
            <Link href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <button className={`${styles.linkedInButton} px-2`}>
                <b className="text-sm md:text-md lg:text-lg">LinkedIn</b>
              </button>
            </Link>
          )}

          <div className={styles.bannerParent2HaveQuestions}>
            <h5>Have Questions ?</h5>
            <Link
              href={rcicAppointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${styles.rcicButton} px-4 py-1`}>
                <b>RCIC</b>
                <p>APPOINTEMENT</p>
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.bannerMain2}></div>
      </div>

      <div className={styles.memberParent} ref={sectionRef}>
        <div className={styles.memberMain}>
          <div className={styles.memberCardParent}>
            {memberInfo.map((member, index) => {
              let altData = [
                memberOfAlt.alt1,
                memberOfAlt.alt2,
                memberOfAlt.alt3,
              ];
              return (
                <div
                  key={index}
                  className={`${styles.memberCard} ${isVisible ? styles.showMemberCard : ""
                    }`}
                >
                  <p>{member?.heading}</p>
                  <div className={styles.memberCardImg}>
                    <Image loading="lazy" height={50} width={100}
                      src={member?.img}
                      alt={altData[index]}
                      title={altData[index]}
                    // Arbitrary number, Next.js auto-adjusts it

                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`${styles.simplifyingParent} ${isFeaturesVisible ? styles.showFeaturesSection : null
          }`}
        ref={featuresSectionRef}
      >
        <div ref={simplifyingRef} className={`${styles.simplifyingMain}`}>
          <h1 className={`text-2xl md:text-4xl text-[#132f46] font-semibold`}>Why Us?</h1>
          {featuresData &&
            [1, 2, 3, 4].map(
              (num) =>
                featuresData[`feature${num}SVG`] &&
                featuresData[`feature${num}Heading`] && (
                  <div
                    key={num}
                    className={`${styles.simplifyingDiv} ${isFeaturesVisible ? styles.showSimplifySection : null
                      }`}
                  >
                    <div className={styles.simplifyingImg}>
                      <Image loading="lazy" height={50} width={100}
                        src={featuresData[`feature${num}SVG`]}
                        alt={simplifyData[`alt${num}`]}
                        title={simplifyData[`alt${num}`]}
                      // Arbitrary number, Next.js auto-adjusts it
                      />
                    </div>
                    <div className={styles.simplifyingContent}>
                      <h2>{featuresData[`feature${num}Heading`]}</h2>
                      <p>{featuresData[`feature${num}Description`]}</p>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>

      <OurProcess />

      <div className={styles.expertiseParent}>
        <div
          className={`relative ${styles.expertiseContentParent}`}
          ref={expertiseContentParentRef}
        >
          <div className={styles.expertiseContentHeading}>
            <h1>{servicesData?.heading}</h1>
            <p>{servicesData?.description}</p>

            <button className={styles.knowButton}>
              <Link href="/more-services">Know More</Link>
            </button>
          </div>
          <div
            className={`${styles.testimonialsVideoSection} ${styles.servicesCardSwiper}`}
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true} // Set loop to true for infinite scrolling
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper_pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className={styles.swiper_container}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {services?.map((item, index) => (
                <SwiperSlide key={index} className={styles.whiteBlockCard}>
                  <div className={styles.expertiseDiv}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <Link
                      className={styles.expertiseKnowMore}
                      href={link(item.title)}
                    >
                      Know More
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}

            {/* Pagination Controller */}
            <div className={styles.slider_controler}>
              <div className="swiper_pagination"></div>
            </div>
          </div>

          <div className={`absolute w-[12%] -bottom-5 left-1/2 transform -translate-x-1/2 flex flex-row-reverse`}>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>

      <div className={styles.aspectsParent}>
        <div className={styles.aspectsMain}>
          <div className={styles.aspectsHeading}>
            <h1>{achiementsData?.heading}</h1>
            <h2>{achiementsData?.description}</h2>
          </div>

          <div className={styles.aspectsCardParent} ref={aspectsCardParentRef}>
            <div
              className={`${styles.aspectsCard} ${styles.fadeFromLeft}`}
              ref={(el) => (aspectsCardRefs.current[0] = el)}
            >
              <Image loading="lazy" height={50} width={100}
                src={achiementsData?.achievement1SVG}
                alt={achiementsData?.achievement1Alt}
                title={achiementsData?.achievement1Alt}
              // Arbitrary number, Next.js auto-adjusts it

              />
              <h1>
                <Odometer value={achiementsData?.achievement1Numbers} />+
              </h1>
              <p>{achiementsData?.achievement1Heading}</p>
            </div>
            <div
              className={`${styles.aspectsCard} ${styles.fadeFromBottom}`}
              ref={(el) => (aspectsCardRefs.current[1] = el)}
            >
              <Image loading="lazy" height={50} width={100}
                src={achiementsData?.achievement2SVG}
                alt={achiementsData?.achievement2Alt}
                title={achiementsData?.achievement2Alt}
              // Arbitrary number, Next.js auto-adjusts it

              />
              <h1>
                <Odometer value={achiementsData?.achievement2Numbers} />+
              </h1>
              <p>{achiementsData?.achievement2Heading}</p>
            </div>
            <div
              className={`${styles.aspectsCard} ${styles.fadeFromRight}`}
              ref={(el) => (aspectsCardRefs.current[2] = el)}
            >
              <Image loading="lazy" height={50} width={100}
                src={achiementsData?.achievement3SVG}
                alt={achiementsData?.achievement3Alt}
                title={achiementsData?.achievement3Alt}
              // Arbitrary number, Next.js auto-adjusts it

              />
              <h1>
                <Odometer value={achiementsData?.achievement3Numbers} />+
              </h1>
              <p>{achiementsData?.achievement3Heading}</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials_White />

      {/* <NewsComponent/> */}
      <Blogs />
      <FAQ_Blue />
      <Footer1 />
    </>
  );
};

export default HomePage;
