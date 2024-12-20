import React from "react";
import styles from "../../styles/about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.textDivWrapper}>
        <div className={styles.textOuterDivBox}>
          <div className={styles.textDivBox}>
            <div className={styles.textTitleWrapper}>
              <a className={styles.textTitle}>About</a>
              <div className={styles.textBox}>
                <p style={{ whiteSpace: "pre-wrap", textAlign: "center" }}>
                  <b>Frontend to Backend</b> is a modern learning tool with the
                  aim of revolutionizing how concepts of client-server
                  architecture and full-stack web service interactions are
                  taught to developers. It takes key lessons from web
                  architecture and networking classes taught in computer science
                  departments around the world, as well as design write-ups from
                  open-source documentation, and teaches them using an engaging,
                  interactive format. The lessons are taught with a focus on
                  keeping the student attentive and engaged with the material.
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
                  , a spring physics-based animation library. Frontend to
                  Backend utilizes react animated components and adapts
                  animation hooks from these libraries, in order to deliver rich
                  and engaging content which is memorable and educational to the
                  user.
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
                    Project Write-up
                  </a>
                  |

                  <a
                    className={styles.courseLink}
                    href="https://github.com/aliyaismagilova/frontend-to-backend"
                    target="_blank"
                    alt="Ismagilova github"
                    rel="noopener noreferrer"
                  >
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
    </div>
  );
}
