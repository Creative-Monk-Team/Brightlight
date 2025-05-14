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
import { DefaultSeo, LogoJsonLd } from 'next-seo';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [redirectsData, setRedirectsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.fbq) {
        window.fbq("track", "PageView");
      }
    };
  
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
      {/* Facebook Pixel Script */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '576043718512204'); 
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=576043718512204&ev=PageView&noscript=1"
        />
      </noscript>

      <DefaultSeo
        titleTemplate="%s | Brightlight"
        defaultTitle="Brightlight"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.brightlightimmigration.ca/',
          siteName: 'Brightlight Immigration',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <LogoJsonLd
        logo="https://www.brightlightimmigration.ca/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrlightlight-icon.a58008c2.webp&w=256&q=75"
        url="https://www.brightlightimmigration.ca/"
      />

      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Brightlight Immigration",
            "image": "https://www.brightlightimmigration.ca/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrlightlight-icon.a58008c2.webp&w=256&q=75",
            "url": "https://www.brightlightimmigration.ca/",
            "telephone": "+1(604)5033734",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15315 66 Ave unit 327",
              "addressLocality": "Surrey",
              "addressRegion": "BC",
              "postalCode": "V3S 2A1",
              "addressCountry": "CA"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$"
          })
        }}
      />

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
