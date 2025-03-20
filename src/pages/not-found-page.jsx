import React from "react";
import styles from "../styles/NotFoundPage.module.css";
import PageNotFoundImg from "../assets/pageNotFoundImg.svg";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Image from "next/image";
let NotFoundPage = () => {
  return (
    <>
    <Navbar1 showBlue={true} />
      <div className={styles.parentNotFound}>
        <div className={styles.mainNotFound}>
               <Image loading="lazy" height={50} width={100} className={styles.NotFoundPageimage} src={PageNotFoundImg} alt="Page not Found" />
        </div>
      </div>
      <Footer1/>
    </>
  );
};

export default NotFoundPage;
