import { motion } from "framer-motion";
import styles from '../../styles/clientInfo.module.css';
import Image from 'next/image';
import computer from '../../../public/comp.jpg';
import gchrome from '../../../public/chrome.jpg';
import mozillaf from '../../../public/firefox.svg.png';
import saf from '../../../public/safari.png';
import ie from '../../../public/ie.ico';
import micedge from '../../../public/ME.svg.png';
import { useState } from 'react';


export default function ClientInfo({ togglePair }) {

    const [firstInfo, showFirstInfo] = useState(true);
    const [secondInfo, showSecondInfo] = useState(false);

    const firstToSecond = (e) => {
        showSecondInfo(e);
        showFirstInfo(!e);
    }

    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }


    return (
        <>
            {firstInfo && <motion.div
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: 'linear' }}
                className={styles.clientInfoblock}>
                <div style={{ width: '90%', display: 'flex', justifyContent: 'space-around' }}>
                    <div className={styles.infotext}>
                        <h1>What is a client?</h1>
                        <p>A client is something which connects to the internet. A client runs locally on your computer. Click the computer.</p>
                    </div>
                    <div className={styles.clientvisual}>
                        <Image onClick={firstToSecond} src={computer} />
                    </div>
                </div>
            </motion.div>}
            {secondInfo && <motion.div
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: 'linear' }}
                className={styles.browserBlock}>
                <div className={styles.browserRow} >
                    <Image width={200} height={200} src={gchrome} />
                    <Image width={200} height={200} src={micedge} />
                    <Image width={200} height={200} src={mozillaf} />
                    <Image width={200} height={200} src={ie} />
                    <Image width={200} height={200} src={saf} />
                </div>
                <div style={{ justifyContent: 'center' }}><p>Your browser is an example of a browser. It connects to the internet. How does it do this?</p></div>
                <div onClick={() => { togglePair(true) }} >Click Me!</div>
            </motion.div>}
        </>
    );
}