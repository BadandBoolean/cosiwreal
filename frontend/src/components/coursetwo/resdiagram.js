import { motion } from 'framer-motion';
import {useState} from 'react';
import styles from '../../styles/reqdiagram.module.css'
import Link from 'next/link'
import Image from 'next/image'
import cookies from '../../../public/cookies.png'


export default function ResDiagram({toggleMidway}) {

    const resCardVar = {

        rest: {
            opacity: 1,

        },

        clicked: {
            rotateX: 180,
        },

        notClicked: {
            scale: 1,
        },

        hover: {
            scale: 1.1
        },

    }

    const [card1Turned, toggleCard1] = useState(false);
    const [card2Turned, toggleCard2] = useState(false);
    const [card3Turned, toggleCard3] = useState(false);

    return (
        <div className={styles.sectionBody}>
            <div style={{display: 'flex', justifyContent: 'center'}}><p >When a request is made to the server, the server sends back a response.<br />
            <b>Click the elements below to find out more about them</b></p></div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{flexBasis: '20%', justifyContent: 'center', display: 'flex', padding: '20px'}}>
                <motion.div
                variants={resCardVar}
                custom={card1Turned}
                initial="rest"
                whileHover="hover"
                animate={card1Turned ? "clicked" : "notClicked"}
                className={styles.resCard} style={{background: '#104F55'}}
                onClick={()=>{toggleCard1(!card1Turned)}}>
                {!card1Turned && <p>Status Line</p>}
                {!!card1Turned && <p style={{transform: 'rotateX(180deg)'}}>
                    The first line of the response message. It contains: <br /><br />
                    - the <b>HTTP version number</b> <br />
                    - the <b>status code</b>, a 3-digit number indicating if the request succeeded, failed, or something else. <br />
                    - the <b>reason phrase</b>, the meaning of the status code in text. <br />


                    </p>}
                
                </motion.div>
                </div>

                <div style={{flexBasis: '20%', justifyContent: 'center', display: 'flex', padding: '20px'}}>
                <motion.div
                variants={resCardVar}
                custom={card2Turned}
                initial="rest"
                whileHover="hover"
                animate={card2Turned ? "clicked" : "notClicked"}
                className={styles.resCard} style={{background: '#F75C03'}}
                onClick={()=>{toggleCard2(!card2Turned)}}>
                {!card2Turned && <p>HTTP Headers</p>}
                {!!card2Turned && <p style={{transform: 'rotateX(180deg)'}}>HTTP Headers contain useful meta data about the content of the response. In the case of an unsuccessful request it can tell the client what to do to complete request successfully.</p>}
                
                </motion.div>
                </div>

                <div style={{flexBasis: '20%', justifyContent: 'center', display: 'flex', padding: '20px'}}>
                <motion.div
                variants={resCardVar}
                custom={card3Turned}
                initial="rest"
                whileHover="hover"
                animate={card3Turned ? "clicked" : "notClicked"}
                className={styles.resCard} style={{background: '#745C97'}}
                onClick={()=>{toggleCard3(!card3Turned)}}>
                {!card3Turned && <p>Message Body</p>}
                {!!card3Turned && <p style={{transform: 'rotateX(180deg)'}}>If the request is successful, the message body can contain information related to the status code or the resource the client requested. If unnsuccessful, it may contain information as to why the request failed, or steps which need to be taken to complete the request successfully.</p>}
                
                </motion.div>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
            <div style={{display: 'flex', flexBasis: '80%', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexBasis: '50%', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}}>
                    <p style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}><b>Cookies</b></p>
                    <p>As part of its response, the website server will also send the client an HTTP cookie. This cookie is used by the site to collect and store stateful information about the user (since a web browser and http messages are inherently stateless), such as login credentials (authentication cookies), items in an online shopping cart, and which pages on the site the user visited. If a user exits a site, the site can use cookies to remember and restore the site session last seen by the specific user. Because of their personalised nature, cookies can be used to track and monitor a particular user's activity across the web. </p>
                </div>
                <div style={{display: 'flex', flexBasis: '50%', justifyContent: 'center'}}>
                    <Image src={cookies} width={450} height={320}  /> 
                </div>


            </div>
            </div>






            <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <div style={{display: 'flex', flexBasis: '60%', justifyContent: 'space-between'}}>
                    <div
                    style={{cursor: 'pointer', position: 'relative'}}><p onClick={() => {
                        toggleMidway(true)  
                      }} className={styles.underlineanim}  >back</p></div>
                    <div style={{cursor: 'pointer', position: 'relative'}}><p className={styles.underlineanim}><Link href='/courseTwo/QuizTwoA'><p style={{textDecoration: 'none'}}>go to quiz</p></Link></p></div>
                </div>

            </div>



        </div>

    );
}