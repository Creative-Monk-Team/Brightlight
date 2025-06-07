import React from "react";
import styles from "../styles/Loader.module.css";
import logo from "../assets/brlightlight-icon.webp"; // Adjust path as needed
import Image from "next/image";

const SpinnerLoader = () => {
  return (
    <div
      className={styles.loaderParent}
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

export default SpinnerLoader;
