import Link from "next/link";
import styles from "../styles/home.module.css";
export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerStyle}>
      <div style={{ font: "italic 15px", textDecoration: "none", color: "white" }}>
        Created by{" "}
        <Link
          className={styles.footerLinkedinLink}
          href="https://www.linkedin.com/in/aliya-ismagilova-9651331a5/"
        >
          Aliya Ismagilova
        </Link>{" "}
        '22 for COS 497: Senior Independent Work
      </div>
    </div>
    </div>

  );
}
