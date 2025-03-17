import React from "react";
import styles from "../styles/Booking.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";

const Booking = () => {
  return (
    <>
      <Navbar1 showBlue={true} />
      <div
        className={styles.parentDivBookin}
        style={{
          height: "100vh", // Full viewport height
          display: "flex",
          justifyContent: "center", // Horizontally center
          alignItems: "center", // Vertically center
          overflow: "hidden", // Prevent scrolling
        }}
      >
        <iframe
          src="https://app.brightlightimmigration.ca/widget/booking/TQvSqDtKXXgthjC3aT4G"
          title="Booking Iframe"
          width="95%" // Adjust iframe width as needed
          height="100%" // Adjust iframe height as needed
          scrolling="no"
          id="TQvSqDtKXXgthjC3aT4G_1742213127699"
          style={{
            border: "none",
            maxWidth: "100%", // Prevents iframe from overflowing
            maxHeight: "100%", // Prevents iframe from overflowing
          }}
          loading="lazy"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <br />
        <script
          src="https://app.brightlightimmigration.ca/js/form_embed.js"
          type="text/javascript"
        ></script>
      </div>
      <Footer1 />
    </>
  );
};

export default Booking;
