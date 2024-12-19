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
            if ((quizAnswer == "Hostname and Port")) {
                setAnswerGiven(true);
                if (!!session) {
                const response = await fetch('../api/incrementScore', {
                method: 'POST',
                body: JSON.stringify({"question": 5, "userEmail": session.user.email}),
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

    const title = 'Client-Server Interaction: How does the server-side handle queries from the client?'
    const rightMessage = "The hostname and port of the server make up the address where the server will be listening for queries from the client."

    return (<>
        <Title text={title} />
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

            <div className={styles.quizWrapper}>
                <p style={{ display: 'flex', justifyContent: 'center' }}>Test your knowledge of this section here:</p>

                <div className={styles.questionsection}>
                    <p>Question 5: When creating the HTTP module using node.js, what are the two values which need to be given?</p>
                    <form className={styles.questions} onSubmit={handleSubmit}>
                        <label>
                            <input type='radio' value="Name and Address" checked={quizAnswer == "Name and Address"} onChange={handleChange} />
                            <span> Name and Address</span>
                        </label>
                        <label>
                            <input type='radio' value="Admin Password and Route Path" checked={quizAnswer == "Admin Password and Route Path"} onChange={handleChange} />
                            <span> Admin Password and Route Path</span>
                        </label>
                        <label>
                            <input type='radio' value="Port and Certification Key" checked={quizAnswer == "Port and Certification Key"} onChange={handleChange} />
                            <span> Port and Certification Key</span>
                        </label>
                        <label>
                            <input type='radio' value="Hostname and Port" checked={quizAnswer == "Hostname and Port"} onChange={handleChange} />
                            <span> Hostname and Port</span>
                        </label>
                        {(answerResult != "incorrect") && <button className={styles.submitButton} type="submit">Submit</button>}
                        {(answerResult == "incorrect") &&
                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
                            <div style={{position: 'relative', margin: '0px', padding: '0px', cursor: 'pointer'}}><p className={styles.underlineanim}><Link href='/courseThree' legacyBehavior><p style={{textDecoration: 'none'}}>Go Back</p></Link></p></div>
                            <div style={{position: 'relative', margin: '0px', padding: '0px', cursor: 'pointer'}}><p className={styles.underlineanim}><Link href='/courseThree/QuizThreeB' legacyBehavior><p style={{textDecoration: 'none'}}>Proceed</p></Link></p></div>
                        </div>

                        }
                    </form>
                    {(answerResult == "correct") && <RightAnswerMessage infoText={rightMessage} />}
                    {(answerResult == "incorrect") && <WrongAnswerMessage />}
                </div>



            </div>
            
        </div>
        {(answerResult == "correct") && <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '10px', padding: '0px'}}><div style={{cursor: 'pointer', position: 'relative'}}><p className={styles.underlineanim}><Link href='/courseThree/QuizThreeB' legacyBehavior><p style={{textDecoration: 'none'}}>Next Question</p></Link></p></div></div>}
        <br />
    </>);
}