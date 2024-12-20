import Link from "next/link";
import styles from "../styles/home.module.css";
export default function Footer() {
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "20vh",
    justifyContent: "center",
    background: "#3D1FFF",
    color: "white",
  };

  
  return (
    <div style={wrapperStyle}>
      <div style={{ font: "italic 15px", textDecoration: "none" }}>
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
  );
}
