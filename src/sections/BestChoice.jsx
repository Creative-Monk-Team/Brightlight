import { useEffect, useState, useRef } from "react";
import styles from "../styles/BestChoice.module.css";
import Image from "next/image";

const BestChoice = () => {
  const [planeTop, setPlaneTop] = useState(150);
  const [isTrackImageVisible, setIsTrackImageVisible] = useState(false);
  const trackImageRef = useRef(null);
  const [bestChoiceHeading, setBestChoiceHeading] = useState({});
  const [bestChoiceImage, setBestChoiceImage] = useState({});
  const [plane, setPlane] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTrackImageVisible(entry.isIntersecting);
      },
      { threshold: 0.17 }
    );

    if (trackImageRef.current) {
      observer.observe(trackImageRef.current);
    }

    return () => {
      if (trackImageRef.current) {
        observer.unobserve(trackImageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (planeTop <= 150) {
      setPlaneTop(150);
    }
  }, [planeTop]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTimestamp = performance.now();

    const handleScroll = () => {
      if (!isTrackImageVisible) return;

      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastTimestamp;
      const scrollSpeed = deltaY / deltaTime;
      if (window.innerWidth < 767) {
        setPlaneTop((prevTop) => prevTop + scrollSpeed * 5);
      } else {
        setPlaneTop((prevTop) => prevTop + scrollSpeed * 15);
      }

      lastScrollY = currentScrollY;
      lastTimestamp = currentTime;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTrackImageVisible]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [headingRes, imageRes, planeRes] = await Promise.all([
          fetch("https://brightlight-node.onrender.com/aboutUsBestChoiceSection"),
          fetch("https://brightlight-node.onrender.com/bestChoice"),
          fetch("https://brightlight-node.onrender.com/plane"),
        ]);

        const headingData = await headingRes.json();
        const imageData = await imageRes.json();
        const planeData = await planeRes.json();

        if (headingData) setBestChoiceHeading(headingData[0]);
        if (imageData) setBestChoiceImage(imageData[0]);
        if (planeData) setPlane(planeData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.bestChoiceParent}>
      <div className={styles.bestChoice}>
        <div className={styles.bestChoiceHeading}>
          <h2>{bestChoiceHeading?.heading}</h2>
        </div>
        <Image
          src={plane?.image}
          alt="Plane"
          className={styles.plane}
          style={{ top: `${planeTop}px` }}
          width={100} // Set appropriate width
          height={500} // Set appropriate height
        />
        <Image
          src="/assets/best-choice-update.png"
          ref={trackImageRef}
          alt="Track"
          className={styles.trackImage}
          width={800} // Set appropriate width
          height={400} // Set appropriate height
        />
      </div>
    </div>
  );
};

export default BestChoice;