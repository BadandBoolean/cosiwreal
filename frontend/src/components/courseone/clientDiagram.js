import { motion } from "framer-motion";
import styles from '../../styles/clientDiagram.module.css';
import Image from 'next/image';
import chrome from '../../../public/chrome.jpg';
import mozillaf from '../../../public/firefox.svg.png';
import saf from '../../../public/safari.png';
import ie from '../../../public/ie.ico';
import micedge from '../../../public/ME.svg.png';
import { useState } from 'react';

export default function ClientDiagram({togglePair}) {

    const clientIntro = {

        initial: {
            scale: 1,
        },

        notClicked: {
            opacity: 1,
            scale: 1,
        },

        clicked: {
            rotateX: 51,
            rotateY: 0,
            rotateZ: 43
        },
        hover: {
            scale: 1.1
        }
    };

    const gchrome = {
        hidden: {
            scale: 1
        },
        beforeClick: {
            scale: 1
        },
        clicked: {
            y: -200
        }

    };

    const mozilla = {
        hidden: {
            scale: 1,
            
        },
        beforeClick: {
            scale: 1
        },
        clicked: {
            x: -200,
            y: -100,
            
        }

    };

    const safari = {
        hidden: {
            scale: 1,
            
        },
        beforeClick: {
            scale: 1
        },
        clicked: {
            x: 200,
            y: -100,
        
        }

    };

    const internetexplorer = {
        hidden: {
            scale: 1,
            
        },
        beforeClick: {
            scale: 1
        },
        clicked: {
            x: 150,
            y: 150,
        
        }

    };

    const msedge = {
        hidden: {
            scale: 1,
            
        },
        beforeClick: {
            scale: 1
        },
        clicked: {
            x: -150,
            y: 150,
        
        }

    };




    const [clicked, setClicked] = useState(false);

    return (
        <>
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', cursor: 'pointer'}}>
                <p
                className={styles.underlineanim}
                onClick={() => {togglePair(true)}}
                >next</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: "flex", justifyContent: 'center', flexDirection: 'column', flexBasis: "33%"}}>
            <h1>What is a client?</h1>
            <p>A client is something that you, the user, interacts with, in order to access content on the internet. An example of a client is a <b>web browser</b>. Importantly, a client is something that <b>runs locally</b> on a user's smartphone, computer, or other device. </p>
            </div>
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', flexBasis: "33%"}}>
            <motion.div
                    variants={clientIntro}
                    animate={clicked ? "clicked" : "beforeClick"}
                    custom={clicked}
                    whileHover="hover"
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    className={styles.mainClient}
                    onClick={() => {
                        setClicked(!clicked);
                    }}
                >Client</motion.div>
                <motion.div
                    variants={gchrome}
                    custom={clicked}
                    initial="hidden"
                    animate={clicked ? "clicked" : "beforeClick"}
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    style={{position: 'absolute', zIndex: '9'}}
                >
                    <Image src={chrome} width={100} height={100} />
                </motion.div>
                <motion.div
                    variants={mozilla}
                    custom={clicked}
                    initial="hidden"
                    animate={clicked ? "clicked" : "beforeClick"}
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    style={{position: 'absolute', zIndex: '8'}} 
                >
                    <Image src={mozillaf} width={100} height={100} />
                </motion.div>
                <motion.div
                    variants={safari}
                    custom={clicked}
                    initial="hidden"
                    animate={clicked ? "clicked" : "beforeClick"}
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    style={{position: 'absolute', zIndex: '7'}} 
                >
                    <Image src={saf} width={100} height={100} />
                </motion.div>

                <motion.div
                    variants={internetexplorer}
                    custom={clicked}
                    initial="hidden"
                    animate={clicked ? "clicked" : "beforeClick"}
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    style={{position: 'absolute', zIndex: '6'}} 
                >
                    <Image src={ie} width={100} height={100} />
                </motion.div>

                <motion.div
                    variants={msedge}
                    custom={clicked}
                    initial="hidden"
                    animate={clicked ? "clicked" : "beforeClick"}
                    transition={{
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    style={{position: 'absolute', zIndex: '5'}} 
                >
                    <Image src={micedge} width={100} height={100} />
                </motion.div>
                </div>
                <div style={{display: "flex", justifyContent: 'center', flexDirection: 'column', flexBasis: "33%"}}>
                    {!clicked && <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Click the <a style={{background: '#ec058e', borderRadius: '6px', padding: '4px', margin: '2px'}}>client</a> box</p> }
                    {clicked && <p>These are some examples of <b>web browsers</b> which can access the internet and retrieve content for you to see</p>}
                </div>
                </div>
        
    </>



    );
}