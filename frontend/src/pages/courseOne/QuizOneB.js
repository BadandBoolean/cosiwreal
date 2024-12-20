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

export default function QuizOneB() {
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
      if (quizAnswer == "The client runs locally on the user's machine") {
        setAnswerGiven(true);
        if (!!session) {
          const response = await fetch("../api/incrementScore", {
            method: "POST",
            body: JSON.stringify({
              question: 2,
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
          courseNum: 1,
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

  const title = "Client-Server Interaction: client and server - what are they?";
  const rightMessage =
    "Did you know? The server and the client can technically run on the same machine, but more frequently, the server runs remotely!";

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
            <p>Question 2: SELECT THE TRUE STATEMENT</p>
            <form className={styles.questions} onSubmit={handleSubmit}>
              <label>
                <input
                  type="radio"
                  value="The client and the server absolutely need a middle-man to create a connection"
                  checked={
                    quizAnswer ==
                    "The client and the server absolutely need a middle-man to create a connection"
                  }
                  onChange={handleChange}
                />
                <span>
                  {" "}
                  The client and the server absolutely need a middle-man to
                  create a connection
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  value="The client runs locally on the user's machine"
                  checked={
                    quizAnswer ==
                    "The client runs locally on the user's machine"
                  }
                  onChange={handleChange}
                />
                <span> The client runs locally on the user's machine</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Netflix is not an example of a client because it is not a web browser"
                  checked={
                    quizAnswer ==
                    "Netflix is not an example of a client because it is not a web browser"
                  }
                  onChange={handleChange}
                />
                <span>
                  {" "}
                  Netflix is not an example of a client because it is not a web
                  browser
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  value="The web server only serves static content to the client"
                  checked={
                    quizAnswer ==
                    "The web server only serves static content to the client"
                  }
                  onChange={handleChange}
                />
                <span>
                  {" "}
                  The web server only serves static content to the client
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
                      <Link href="/courseOne" legacyBehavior>
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
                <p style={{ textDecoration: "none", fontWeight: "bold" }}>
                  Congratulations! You have completed Course One. Click here to
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
