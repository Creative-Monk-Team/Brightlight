import { useEffect, useState } from "react";
import styles from "../styles/FloatingButton.module.css";
import Link from "next/link";

let FloatingButton = () => {
  let [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (window.location.pathname == "/auth/panel/dash/bright") {
      setShowButton(false);
    } else if (window.location.pathname == "/dash/panel/overwrite") {
      setShowButton(false);
    } else if (window.location.pathname == "/booking") {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, []);
  return (
    <>
      {showButton ? (
        <Link
          className={styles.floatingFreeButton}
          href="/booking"
        >
          Book Free Assessment
        </Link>
      ) : null}
    </>
  );
};

export default FloatingButton;
