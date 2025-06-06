import React from "react";
import styles from "../styles/Footer.module.css";
import HoursIcon from "../assets/hours.webp";
import Address from "../assets/address.webp";
import FooterLogo from "../assets/brightlight-main-logo.webp";
import FooterLogo2 from "../assets/cicc.png";
import UpperFooterImage from "../assets/footer-image.webp";
import Image from "next/image";
import TikTokIcon  from "../assets/tiktok2.svg";
import LinkedInIcon  from "../assets/linkedin2.svg";
import InstagramIcon  from "../assets/instagram2.svg";
import FacebookIcon  from "../assets/facebook2.svg";
import YouTubeIcon from "../assets/youtube2.svg";
import Link from "next/link";
import { fetchSeoData } from "../lib/fetchSeoData";

export async function getServerSideProps() {
  return fetchSeoData(""); // Pass the API endpoint specific to this page
}

let Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.innerFooter}>
          <div className={styles.leftFooter}>
            <div className={styles.iconHeading}>
              <p className={styles.footerHeading}>OUR WORKING HOURS</p>
            </div>
            <p>Monday to Friday: 10:00 AM - 6:00 PM</p>
            <p>Saturday: By Appointment only</p>
            <p>Sunday: Closed</p>
            <div className={styles.iconHeading}>
              <p className={styles.footerHeading}>OUR ADDRESS</p>
            </div>
            <p>6638 152A St Unit #114, Surrey, BC V3S 5X5</p>
            <div className={styles.iconHeading}>
              <p className={styles.footerHeading}>GET IN TOUCH</p>
            </div>
            <p>(604) 503-3734</p>
            <p>
              <Link href="mailto:info@brightlightimmigration.ca">
                info@brightlightimmigration.ca
              </Link>
            </p>
          </div>

          <div className={styles.centerFooter}>
            <div className={styles.footerLogo}>
                 <Image loading="lazy" height={50} width={100}
                src={FooterLogo}
                alt="FooterLogo"
                className={styles.footerLogo1}
              />
                 <Image loading="lazy" height={50} width={100}
                src={FooterLogo2}
                alt="FooterLogo"
                className={styles.footerLogo2}
              />
            </div>

            <div className={styles.socialMediaFooter}>
              <div>
                <TikTokIcon className={styles.socialIcon} />
              </div>
              <div>
                <LinkedInIcon className={styles.socialIcon} />
              </div>
              <div className="cursor-pointer">
                <InstagramIcon className={styles.socialIcon} />
              </div>
              <div>
                <FacebookIcon className={styles.socialIcon} />
              </div>
              <div>
                <YouTubeIcon className={styles.socialIcon} />
              </div>
            </div>
          </div>

          <div className={styles.rightFooter}>
            <p className={styles.footerHeading}>QUICK ACCESS</p>
            <div className={styles.footerAncor}>
              <Link href="/">PR</Link>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <Link href="/">SUPER VISA</Link>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <Link href="/">VISITOR VISA</Link>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <Link href="/">STUDY VISA</Link>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <Link href="/">PNP PROGRAM</Link>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <Link href="/">FAMILY SPONSORSHIP</Link>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <Link href="/">SPOUSAL VISA</Link>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <Link href="/">OPEN WORK PERMIT</Link>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <Link href="/">PRIVACY POLICY</Link>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <Link href="/">TERMS & CONDITIONS</Link>
              <span>.</span>
            </div>
          </div>
        </div>
        <p className={styles.copyrightHeading}>
          ALL RIGHTS RESERVED BRIGHTLIGHT IMMIGRATION ©2024
        </p>
      </div>
    </>
  );
};
export default Footer;
