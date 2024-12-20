import React from "react";
import styles from "../../styles/about.module.css";
import homestyles from "../../styles/home.module.css";
import Link from "next/link";
import Footer from "../../components/footer";
import NavBar from "../../components/NavBar";

export default function About() {
  return (
    <div className={homestyles.page}>
      <NavBar />
      <div className={styles.textDivWrapper}>
        <div className={styles.textOuterDivBox}>
          <div className={styles.textDivBox}>
            <div className={styles.textTitleWrapper}>
              <a className={styles.textTitle}>About</a>
              <div className={styles.textBox}>
                <p style={{ whiteSpace: "pre-wrap", textAlign: "center" }}>
                  <i>Frontend to Backend</i> is an interactive learning platform
                  designed to transform how developers understand and apply
                  client-server architecture and full-stack web service
                  principles. Drawing on foundational concepts taught in
                  computer science programs around the globe, as well as
                  insights from open-source documentation, it presents lessons
                  on web development in a dynamic, highly engaging format.
                  <br />
                  <br />A key step toward enabling interactivity in this project
                  is the implementation and adaptation of several open-source
                  animation libraries, namely{" "}
                  <Link
                    className={styles.courseLink}
                    href="https://motion.dev/"
                  >
                    Motion
                  </Link>
                  , a hardware acceleration animation library and{" "}
                  <Link
                    className={styles.courseLink}
                    href="https://www.react-spring.dev/"
                  >
                    React-Spring
                  </Link>
                  , a spring physics-based animation library.{" "}
                  <i>Frontend to Backend</i> utilizes animated React components
                  and adapts animation hooks from these libraries, in order to
                  deliver rich and engaging content. As a result, the platform
                  elevates static concepts into vivid, memorable experiences,
                  fostering visual clarity and encouraging understanding and
                  retention of the concepts. By exploring the presentation of
                  this information through a dynamic medium built on the web,
                  complex ideas about web architecture and process become not
                  only more accessible, but also more enjoyable to explore.
                  <br />
                  <br />
                  ***
                  <br />
                  <br />
                  Frontend to Backend was created by Aliya Ismagilova for{" "}
                  <Link
                    className={styles.courseLink}
                    href="https://registrar.princeton.edu/course-offerings/course-details?term=1252&courseid=002086"
                  >
                    COS497: Senior Independent Work
                  </Link>
                  , Fall 2021 section.
                  <br />
                  <br />
                  This project was submitted in partial fulfillment of the
                  requirements for Degree of Bachelor of Science in Engineering
                  (B.S.E.) in Computer Science at Princeton University.
                  <br />
                  <a
                    className={styles.courseLink}
                    href="/Ismagilova_IW_COS497.pdf"
                    target="_blank"
                    alt="Ismagilova thesis"
                    rel="noopener noreferrer"
                  >
                    Project write-up{" "}
                  </a>
                  |
                  <a
                    className={styles.courseLink}
                    href="https://github.com/aliyaismagilova/frontend-to-backend"
                    target="_blank"
                    alt="Ismagilova github"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Project source code
                  </a>
                  <br />
                  <br />
                  ***
                  <br />
                  <br />I would like to thank my advisor, Dr. Robert Fish, for
                  his guidance and support for the completion of this project,
                  and my section classmates for their helpful feedback and
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
