import styles from "../../styles/quiz.module.css";
import { useState } from "react";
import Title from "../../components/title";
import RightAnswerMessage from "../../components/rightanswermessage";
import WrongAnswerMessage from "../../components/wronganswermessage";
import Link from "next/link";
import { useSession } from "next-auth/react";
import homestyles from "../../styles/home.module.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/footer";

export default function QuizTwoB({ makeUpdateScore, setCourseTwoColour }) {
  const [quizAnswer, setquizAnswer] = useState("");
  const [answerResult, setAnswerResult] = useState("");
  const [answerGiven, setAnswerGiven] = useState(false);
  const { data: session, status } = useSession();

  // change handling:
  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setquizAnswer(target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!answerGiven) {
      if (
        quizAnswer ==
        "Username and password information given as part of a submitted form"
      ) {
        setAnswerGiven(true);
        if (!!session) {
          const response = await fetch("../api/incrementScore", {
            method: "POST",
            body: JSON.stringify({
              question: 4,
              userEmail: session.user.email,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }

        setAnswerResult("correct");
      } else {
        setAnswerResult("incorrect");
      }
    }
  };

  const updateProgress = async (e) => {
    e.preventDefault();
    if (!!session) {
      const response = await fetch("../api/updateProg", {
        method: "POST",
        body: JSON.stringify({
          courseNum: 2,
          color: "#169873",
          userEmail: session.user.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    }
  };

  const title = "Client-Server Interaction: how do they communicate?";
  const rightMessage =
    "The URL path does not include information sent to the server with the POST method (like log in credentials). If it included this sensitive data, it would be very insecure!";

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
              Question 4: Which of these should NOT be found in a URL path shown
              in the browser?
            </p>
            <form className={styles.questions} onSubmit={handleSubmit}>
              <label>
                <input
                  type="radio"
                  value="Username and password information given as part of a submitted form"
                  checked={
                    quizAnswer ==
                    "Username and password information given as part of a submitted form"
                  }
                  onChange={handleChange}
                />
                <span>
                  {" "}
                  Username and password information given as part of a submitted
                  form
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  value="parameters in the form of key-value pairs"
                  checked={
                    quizAnswer == "parameters in the form of key-value pairs"
                  }
                  onChange={handleChange}
                />
                <span> Parameters in the form of key-value pairs</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="A question mark"
                  checked={quizAnswer == "A question mark"}
                  onChange={handleChange}
                />
                <span> A question mark</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="The path of the file retrieved by the server from its local store"
                  checked={
                    quizAnswer ==
                    "The path of the file retrieved by the server from its local store"
                  }
                  onChange={handleChange}
                />
                <span>
                  {" "}
                  The path of the file retrieved by the server from its local
                  store
                </span>
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
                      <Link href="/courseTwo" legacyBehavior>
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
                  Congratulations! You have completed Course Two. Click here to
                  go back to the Homepage
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
