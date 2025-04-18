import React, { useEffect, useState } from "react";
import styles from "../styles/Map.module.css";
import Link from "next/link";
import { fetchSeoData } from "../lib/fetchSeoData";

export async function getServerSideProps() {
  return fetchSeoData(""); // Pass the API endpoint specific to this page
}

let Map = () => {
  let [iframeHtml, setIframeHtml] = useState("");
  let [globallyData, setGloballyData] = useState([]);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/map")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data[0].heading === "string") {
          setIframeHtml(data[0].heading);
        } else {
          console.error("Expected a string but received:", data[0]);
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
          setGloballyData(data[0].googleMapsLink);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.mapParent}>
      <div className={styles.mapSection}>
        <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />
        <button className={styles.theButton} role="button">
          <Link href={globallyData}>Find Us On Maps</Link>
        </button>
      </div>
    </div>
  );
};

export default Map;