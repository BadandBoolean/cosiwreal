import { motion } from "framer-motion";
import styles from '../../styles/serverDiagram.module.css'
import { useState } from "react";
import Link from 'next/link';

export default function ServerDiagram({ togglePair }) {

    const serverFirstVariant = {
        initial: {
            scale: 1
        },
        beforeClick: {
            scale: 1
        },
        clicked: {
            y: 50,
            rotateX: 51,
            rotateY: 0,
            rotateZ: 43
        },
        hover: {
            scale: 1.02
        }
    };

    const serverSecondVariant = {
        initial: {
            scale: 1
        },
        beforeClick: {
            scale: 1
        },
        clicked: {
            y: 150,
            x: -300,
            rotateX: 51,
            rotateY: 0,
            rotateZ: 43
        },
        hover: {
            scale: 1.02
        }
    };

    const serverThirdVariant = {
        initial: {
            scale: 1
        },
        beforeClick: {
            scale: 1
        },
        clicked: {
            y: 200,
            x: 300,
            rotateX: 51,
            rotateY: 0,
            rotateZ: 43
        },
        hover: {
            scale: 1.02
        }
    };

    const serverFourthVariant = {
        initial: {
            scale: 1
        },
        beforeClick: {
            scale: 1
        },
        clicked: {
            y: 300,
            rotateX: 51,
            rotateY: 0,
            rotateZ: 43
        },
        hover: {
            scale: 1.02
        }
    };

    const glowVariants = {
        initial: { opacity: 0 },
        hover: { opacity: 0.5 },
        clicked: {
            y: 50,
            rotateX: 51,
            rotateY: 0,
            rotateZ: 43

        },
        beforeClick: {
            scale: 1
        }
    };

    const [clicked, setClicked] = useState(false);
    const [greenClicked, setGreenClicked] = useState(false);
    const [redClicked, setRedClicked] = useState(false);
    const [purpleClicked, setPurpleClicked] = useState(false);

    return (
        <div style={{height: '80vh', position: 'relative'}}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <div style={{display: 'flex', flexBasis: '60%', justifyContent: 'space-between'}}>
                    <div onClick={() => {
                        togglePair(true)  
                      }} style={{cursor: 'pointer'}}><p className={styles.underlineanim}>back</p></div>
                    <div style={{cursor: 'pointer'}}><Link href='/courseOne/QuizOneA' ><p className={styles.underlineanim}>Take the quiz</p></Link></div>
                </div>

            </div>


            <motion.div initial="initial" whileHover="hover" className={styles.standard}>
                <motion.div
                    variants={glowVariants}
                    animate={clicked ? "clicked" : "beforeClick"}
                    custom={clicked}
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    className={styles.glow}
                />
                <motion.div
                    variants={serverFirstVariant}
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    animate={clicked ? "clicked" : "beforeClick"}
                    whileHover="hover"
                    custom={clicked}
                    onClick={() => {
                        setClicked(!clicked);
                        setGreenClicked(false);
                        setRedClicked(false);
                        setPurpleClicked(false);
                    }}
                    className={styles.serverFirst}
                ><p>Web Server</p></motion.div>
                <motion.div
                    variants={serverSecondVariant}
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    animate={clicked ? "clicked" : "beforeClick"}
                    whileHover="hover"
                    custom={clicked}
                    onClick={() => {
                        setGreenClicked(!greenClicked);
                    }}
                    className={styles.serverSecond}
                ></motion.div>
                <motion.div
                    variants={serverThirdVariant}
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    animate={clicked ? "clicked" : "beforeClick"}
                    whileHover="hover"
                    custom={clicked}
                    onClick={() => {
                        setRedClicked(!redClicked);
                    }}
                    className={styles.serverThird}
                ></motion.div>
                <motion.div
                    variants={serverFourthVariant}
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    animate={clicked ? "clicked" : "beforeClick"}
                    whileHover="hover"
                    custom={clicked}
                    onClick={() => {
                        setPurpleClicked(!purpleClicked);
                    }}
                    className={styles.serverFourth}
                ></motion.div>
                {clicked && <>
                    <div style={{ position: 'absolute' }}>Click the components to explore the server side</div>
                    <div style={{ position: 'relative', top: '300px', right: '100px', width: '200px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}> Static Files
                        {(greenClicked & clicked) ? <p>
                            Static resources include: <br />
                            - CSS stylesheets <br />
                            - Web pages that don't change depending on the user <br />
                            - Some images
                        </p> : <p></p>}
                    </div>
                    <div style={{ position: 'relative', top: '350px', left: '350px', width: '200px' }}> Web Application
                        {(redClicked & clicked) ? <p>
                            The web application takes in requests sent by the browser, and uses the request content to dynamically generate a webpage.
                        </p> : <></>}
                    </div>
                    <div style={{ position: 'relative', top: '450px', right: '150px', width: '200px' }}> Database
                        {(purpleClicked & clicked) ? <p>
                            A database is not necessary, but it can store data which can be changed over time, such as information about the user.
                        </p> : <></>} </div></>}





            </motion.div>
        </div>
    );
}