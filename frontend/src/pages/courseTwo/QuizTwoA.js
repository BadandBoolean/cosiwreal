import styles from '../../styles/quiz.module.css'
import { useState } from 'react';
import Title from '../../components/title'
import RightAnswerMessage from '../../components/rightanswermessage'
import WrongAnswerMessage from '../../components/wronganswermessage'
import Link from 'next/link';
import { useSession } from 'next-auth/react'

export default function QuizTwoA({ makeUpdateScore }) {

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
            if ((quizAnswer == "Status Line, HTTP Headers, Message Body")) {
                setAnswerGiven(true);
                const response = await fetch('../api/incrementScore', {
                method: 'POST',
                body: JSON.stringify({"question": 3, "userEmail": session.user.email}),
                headers: {
                    'Content-Type': 'application/json'
                }
                })
                setAnswerResult("correct");
            }
            else {
                setAnswerResult("incorrect");
            }
        }
    };

    const title = 'Client-Server Interaction: how do they communicate?'
    const rightMessage = "The three components of a response sent by the server to the client are the status line, indicating the health of the request, the HTTP Headers containing metadata about the response, and the Message Body, which contains the returned resource itself"

    return (
        <>
            <Title text={title} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

                <div className={styles.quizWrapper}>
                    <p style={{ display: 'flex', justifyContent: 'center' }}>Test your knowledge of this section here:</p>

                    <div className={styles.questionsection}>
                        <p>Question 3: What are the three elements of a response?</p>
                        <form className={styles.questions} onSubmit={handleSubmit}>
                            <label>
                                <input type='radio' value="HEAD, HTTP Headers, Message Body" checked={quizAnswer == "HEAD, HTTP Headers, Message Body"} onChange={handleChange} />
                                <span> HEAD, HTTP Headers, Message Body</span>
                            </label>
                            <label>
                                <input type='radio' value="Status 200 Code, POST, Metadata" checked={quizAnswer == "Status 200 Code, POST, Metadata"} onChange={handleChange} />
                                <span> Status 200 Code, POST, Metadata</span>
                            </label>
                            <label>
                                <input type='radio' value="Status Line, HTTP Headers, Message Body" checked={quizAnswer == "Status Line, HTTP Headers, Message Body"} onChange={handleChange} />
                                <span> Status Line, HTTP Headers, Message Body</span>
                            </label>
                            <label>
                                <input type='radio' value="Status Code, HTTP Version number, Reason Phrase" checked={quizAnswer == "Status Code, HTTP Version number, Reason Phrase"} onChange={handleChange} />
                                <span> Status Code, HTTP Version number, Reason Phrase</span>
                            </label>
                            {(answerResult != "incorrect") && <button className={styles.submitButton} type="submit">Submit</button>}
                            {(answerResult == "incorrect") &&
                            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
                                <div style={{position: 'relative', margin: '0px', padding: '0px', cursor: 'pointer'}}><p className={styles.underlineanim}><Link href='/courseTwo'><p style={{textDecoration: 'none'}}>Go Back</p></Link></p></div>
                                <div style={{position: 'relative', margin: '0px', padding: '0px', cursor: 'pointer'}}><p className={styles.underlineanim}><Link href='/courseTwo/QuizTwoB'><p style={{textDecoration: 'none'}}>Proceed</p></Link></p></div>
                            </div>

                            }
                        </form>
                        {(answerResult == "correct") && <RightAnswerMessage infoText={rightMessage} />}
                        {(answerResult == "incorrect") && <WrongAnswerMessage />}
                    </div>



                </div>
                
            </div>
            {(answerResult == "correct") && <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '10px', padding: '0px'}}><div style={{cursor: 'pointer', position: 'relative'}}><p className={styles.underlineanim}><Link href='/courseTwo/QuizTwoB' ><p style={{textDecoration: 'none'}}>Next Question</p></Link></p></div></div>}
        </>


    );
}