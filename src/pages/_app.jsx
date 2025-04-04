import { useEffect, useState } from "react";
import "../styles/global.css"; // Ensure this file exists
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/AuthContext";
import Loader from "../components/Loader";
import FloatingButton from "../components/FloatingButton";
import Head from "next/head";
import Script from "next/script"; // Import Next.js Script component
import { DefaultSeo } from 'next-seo';
import SEO from "../../seo-config";

function MyApp({ Component, pageProps }) {
  const [redirectsData, setRedirectsData] = useState([]);

  // Fetch Redirect Data
  useEffect(() => {
    async function fetchRedirects() {
      try {
        const response = await fetch("https://brightlight-node.onrender.com/redirects");
        if (!response.ok) throw new Error("API Response Not OK");

        const data = await response.json();
        if (!data || !Array.isArray(data) || data.length === 0) return;

        const mappedData = Object.keys(data[0])
          .filter((key) => key.startsWith("redirectFrom"))
          .map((key) => ({
            from: data[0][key],
            to: data[0][key.replace("redirectFrom", "redirectTo")],
          }))
          .filter((redirect) => redirect.from && redirect.to);

        if (mappedData.length > 0) setRedirectsData(mappedData);
      } catch (error) {
        console.error("Redirect Fetch Error:", error);
      }
    }

    fetchRedirects();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  // Apply Redirects Without Infinite Loops
  useEffect(() => {
    redirectsData.forEach((redirect) => {
      if (
        window.location.pathname === redirect.from &&
        window.location.pathname !== `/${redirect.to}`
      ) {
        window.history.replaceState(null, "", `/${redirect.to}`);
      }
    });
  }, [redirectsData]);


  // Handle Background Color Change
  useEffect(() => {
    const updateBackgroundColor = () => {
      document.body.style.backgroundColor =
        window.location.pathname === "/admin" ? "rgb(241, 241, 241)" : "white";
    };

    updateBackgroundColor();
    window.addEventListener("popstate", updateBackgroundColor);
    window.addEventListener("hashchange", updateBackgroundColor); // Extra safety for hash routes

    return () => {
      window.removeEventListener("popstate", updateBackgroundColor);
      window.removeEventListener("hashchange", updateBackgroundColor);
      document.body.style.backgroundColor = "white";
    };
  }, []);

  return (
    <>

      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-LMQ3S0MVPW"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LMQ3S0MVPW');
          `,
        }}
      />
      <DefaultSeo {...SEO} />
      <HelmetProvider>
        <ToastContainer />
        <Loader />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
        <FloatingButton />
      </HelmetProvider>
    </>
  );
}

export default MyApp;
