import styles from '../../styles/quiz.module.css'
import { useState } from 'react';
import Title from '../../components/title'
import RightAnswerMessage from '../../components/rightanswermessage'
import WrongAnswerMessage from '../../components/wronganswermessage'
import Link from 'next/link';
import { useSession } from 'next-auth/react'
import NavBar from "../../components/NavBar";
import Footer from "../../components/footer";
import homestyles from "../../styles/home.module.css";

export default function QuizTwoB({ makeUpdateScore, setCourseTwoColour }) {

    const [quizAnswer, setquizAnswer] = useState("");
    const [answerResult, setAnswerResult] = useState("");
    const [answerGiven, setAnswerGiven] = useState(false);
    const { data: session, status } = useSession();

    // change handling:
    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
            setquizAnswer(target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!answerGiven) {
            if ((quizAnswer == "JSON data")) {
                setAnswerGiven(true);
                if (!!session) {
                const response = await fetch('../api/incrementScore', {
                method: 'POST',
                body: JSON.stringify({"question": 6, "userEmail": session.user.email}),
                headers: {
                    'Content-Type': 'application/json'
                }
                })
            }
                setAnswerResult("correct");
            }
            else {
                setAnswerResult("incorrect");
            }
        }
    };

    const updateProgress = async (e) => {
        e.preventDefault();
        if (!!session) {
        const response = await fetch('../api/updateProg', {
          method: 'POST',
          body: JSON.stringify({"courseNum": 3, "color": "#169873", "userEmail": session.user.email }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
    }
    };

    const title = 'Client-Server Interaction: How does the server-side handle queries from the client?'
    const rightMessage = "A server can retrieve and respond with a JSON file."

    return (
      <div className={homestyles.activityPage}>
        <NavBar />
        <Title text={title} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "20px",
          }}
        >
          <div className={styles.quizWrapper}>
            <p style={{ display: "flex", justifyContent: "center" }}>
              Test your knowledge of this section here:
            </p>

            <div className={styles.questionsection}>
              <p>
                Question 6: What is an example of something that can be returned
                by the server to the client, besides an HTTP response?
              </p>
              <form className={styles.questions} onSubmit={handleSubmit}>
                <label>
                  <input
                    type="radio"
                    value="JSON data"
                    checked={quizAnswer == "JSON data"}
                    onChange={handleChange}
                  />
                  <span> JSON data</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="A Microsoft Word Document"
                    checked={quizAnswer == "A Microsoft Word Document"}
                    onChange={handleChange}
                  />
                  <span> A Microsoft Word Document</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="A fax"
                    checked={quizAnswer == "A fax"}
                    onChange={handleChange}
                  />
                  <span> A fax</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="A redirect to a different webpage"
                    checked={quizAnswer == "A redirect to a different webpage"}
                    onChange={handleChange}
                  />
                  <span> A redirect to a different webpage</span>
                </label>
                {answerResult != "incorrect" && (
                  <button className={styles.submitButton} type="submit">
                    Submit
                  </button>
                )}
                {answerResult == "incorrect" && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        margin: "0px",
                        padding: "0px",
                        cursor: "pointer",
                      }}
                    >
                      <p className={styles.underlineanim}>
                        <Link href="/courseThree" legacyBehavior>
                          <p style={{ textDecoration: "none" }}>Go Back</p>
                        </Link>
                      </p>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        margin: "0px",
                        padding: "0px",
                        cursor: "pointer",
                      }}
                    >
                      <p className={styles.underlineanim}>
                        <Link href="/" legacyBehavior>
                          <p style={{ textDecoration: "none" }}>Proceed</p>
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
              </form>
              {answerResult == "correct" && (
                <RightAnswerMessage infoText={rightMessage} />
              )}
              {answerResult == "incorrect" && <WrongAnswerMessage />}
            </div>
          </div>
        </div>
        {answerResult == "correct" && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "10px",
              padding: "0px",
            }}
          >
            <div style={{ cursor: "pointer", position: "relative" }}>
              <p onClick={updateProgress} className={styles.underlineanim}>
                <Link href="/" legacyBehavior>
                  <p style={{ textDecoration: "none" }}>
                    Congratulations! You have completed Course Three. Click here
                    to go back to the Homepage
                  </p>
                </Link>
              </p>
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
}