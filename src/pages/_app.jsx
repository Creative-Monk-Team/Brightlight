import { useEffect, useState } from "react";
import "../styles/global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/AuthContext";
import Loader from "../components/Loader";
import FloatingButton from "../components/FloatingButton";
import Script from "next/script";
import { DefaultSeo, LogoJsonLd } from 'next-seo';
import SEO from "../../seo-config";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [redirectsData, setRedirectsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Analytics tracking
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.fbq) window.fbq("track", "PageView");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  // Fetch redirect data safely
  useEffect(() => {
    async function fetchRedirects() {
      setLoading(true);
      try {
        const response = await fetch("https://brightlight-node.onrender.com/redirects");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            const mappedData = Object.keys(data[0])
              .filter((key) => key.startsWith("redirectFrom"))
              .map((key) => ({
                from: data[0][key],
                to: data[0][key.replace("redirectFrom", "redirectTo")],
              }))
              .filter((redirect) => redirect.from && redirect.to);
            setRedirectsData(mappedData);
          }
        }
      } catch (error) {
        console.error("Redirect fetch error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRedirects();
  }, []);

  // Apply client-side redirects safely (use Next.js router)
  useEffect(() => {
    redirectsData.forEach((redirect) => {
      if (
        router.pathname === redirect.from &&
        redirect.from !== `/${redirect.to}`
      ) {
        router.replace(`/${redirect.to}`);
      }
    });
  }, [redirectsData, router]);

  return (
    <>
      {/* Analytics & Schema scripts remain unchanged */}

      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-LMQ3S0MVPW" />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-LMQ3S0MVPW');`,}}/>
      
      <Script id="facebook-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{__html:`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '576043718512204');fbq('track', 'PageView');`,}}/>
      
      <DefaultSeo {...SEO} />
      <LogoJsonLd logo="..." url="..." />

      <ToastContainer />
      <AuthProvider>
        {loading ? <Loader /> : <Component {...pageProps} />}
        <FloatingButton />
      </AuthProvider>
    </>
  );
}

export default MyApp;
