import React, { useEffect, useState } from "react";
import styles from "../styles/Loader.module.css";
import logo from "../assets/brlightlight-icon.webp"; // Adjust path as needed
import Image from "next/image";

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isDone = false;

    // Safety timeout to ensure loader disappears even if API is slow
    const timeout = setTimeout(() => {
      if (!isDone) setIsLoaded(true);
    }, 3400);

    // API call to warm up server
    fetch("https://brightlight-node.onrender.com")
      .then((res) => res.text())
      .then(() => {
        isDone = true;
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Loader API error:", error);
        isDone = true;
        setIsLoaded(true);
      });

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <div
      className={styles.loaderParent}
      style={{
        opacity: isLoaded ? 0 : 1,
        visibility: isLoaded ? "hidden" : "visible",
        transition: "opacity 0.5s ease", // smooth fade out
      }}
    >
      <div className={styles.loader}>
        <Image
          loading="lazy"
          height={50}
          width={100}
          src={logo}
          alt="Company Logo"
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export default Loader;
