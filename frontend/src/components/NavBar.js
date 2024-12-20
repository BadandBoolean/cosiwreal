import styles from "../styles/NavBar.module.css";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

// might need props like log in
function NavBar() {
  const { data: session, status } = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div className={styles.NavWrapper}>
      <div className={styles.Nav}>
        <div
          className={styles.NavButton}
          style={{ flexBasis: "50%", textDecoration: "none" }}
        >
          <Link href="/" legacyBehavior>
            <p className={styles.SiteName}>Frontend to Backend: Learn Full-Stack Web Development!</p>
          </Link>
        </div>
        <div className={styles.NavButton}>
          <Link href="/about" className={styles.AboutButton}>
            About
          </Link>
        </div>

        <div>
          <div
            className={styles.NavButton}
            style={{
              border: "1px solid #3D1FFF",
              borderRadius: "10px",
              textAlign: "center",
              backgroundColor: "#3D1FFF",
              padding: "10px",
            }}
          >
            {status === "unauthenticated" && (
              <a
                href="#"
                onClick={handleSignin}
                className={styles.LogInOutButton}
              >
                Log in
              </a>
            )}
            {status === "authenticated" && (
              <a
                href="#"
                onClick={handleSignout}
                style={{ padding: "2px", color: "yellow", opacity: 1 }}
                className={styles.LogInOutButton}
              >
                Log out
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
