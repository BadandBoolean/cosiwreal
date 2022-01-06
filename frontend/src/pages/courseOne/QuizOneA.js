import styles from '../../styles/quiz.module.css'
import { useState } from 'react';
import Title from '../../components/title'
import RightAnswerMessage from '../../components/rightanswermessage'
import WrongAnswerMessage from '../../components/wronganswermessage'
import Link from 'next/link';
import { useSession } from 'next-auth/react'


export default function QuizOneA() {

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
            if ((quizAnswer == "A stylesheet (CSS)")) {
                setAnswerGiven(true);
                const response = await fetch('../api/incrementScore', {
                method: 'POST',
                body: JSON.stringify({"question": 1, "userEmail": session.user.email}),
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


    const title = 'Client-Server Interaction: client and server - what are they?'
    const rightMessage = "Stylesheets can be stored directly on the serverside and served to the browser (client)."

    return (
        <>
            <Title text={title} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '20px' }}>

                <div className={styles.quizWrapper}>
                    <p style={{ display: 'flex', justifyContent: 'center' }}>Test your knowledge of this section here:</p>

                    <div className={styles.questionsection}>
                        <p>Question 1: What is an example of a static file served by the web server?</p>
                        <form className={styles.questions} onSubmit={handleSubmit}>
                            <label>
                                <input type='radio' value="A stylesheet (CSS)" checked={quizAnswer == "A stylesheet (CSS)"} onChange={handleChange} />
                                <span> A stylesheet (CSS)</span>
                            </label>
                            <label>
                                <input type='radio' value="A username" checked={quizAnswer == "A username"} onChange={handleChange} />
                                <span> A username</span>
                            </label>
                            <label>
                                <input type='radio' value="A website cookie" checked={quizAnswer == "A website cookie"} onChange={handleChange} />
                                <span> A website cookie</span>
                            </label>
                            <label>
                                <input type='radio' value="Data from a database" checked={quizAnswer == "Data from a database"} onChange={handleChange} />
                                <span> Data from a database</span>
                            </label>
                            {(answerResult != "incorrect") && <button className={styles.submitButton} type="submit">Submit</button>}
                            {(answerResult == "incorrect") &&
                            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
                                <div style={{position: 'relative', margin: '0px', padding: '0px', cursor: 'pointer'}}><p className={styles.underlineanim}><Link href='/courseOne'><p style={{textDecoration: 'none'}}>Go Back</p></Link></p></div>
                                <div style={{position: 'relative', margin: '0px', padding: '0px', cursor: 'pointer'}}><p className={styles.underlineanim}><Link href='/courseOne/QuizOneB'><p style={{textDecoration: 'none'}}>Proceed</p></Link></p></div>
                            </div>

                            }
                        </form>
                        {(answerResult == "correct") && <RightAnswerMessage infoText={rightMessage} />}
                        {(answerResult == "incorrect") && <WrongAnswerMessage  />}
                    </div>



                </div>
                
            </div>
            {(answerResult == "correct") && <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '10px', padding: '0px'}}><div style={{cursor: 'pointer', position: 'relative'}}><p className={styles.underlineanim}><Link href='/courseOne/QuizOneB' >Next Question</Link></p></div></div>}
        </>


    );
}