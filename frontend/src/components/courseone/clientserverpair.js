import styles from '../../styles/clientserverpair.module.css'
import { useSpring, animated } from '@react-spring/web'
import React, { useState } from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";
import Shake from '../Shake.js'


export default function ClientServerPair({ toggleClientInfo, clickPink, clickBlue, toggleServerInfo }) {

    const arrowAnim = useSpring({
        loop: { reverse: true },
        from: { y: 0 },
        to: { y: 10 },
        config: {
            tension: 100,
            friction: 1,
        },
    })

    return (
        <>
            <div className={styles.mainBox}>
                <div className={styles.shapeContainer}>
                    {clickPink && <><p className={styles.labels} style={{ paddingBottom: 10 }}>CLICK ME!</p>
                        <animated.a className={styles.labels} style={{ paddingTop: 0, paddingBottom: 30, ...arrowAnim }}><AiOutlineArrowDown /></animated.a>
                        <Shake rotation={20} timing={200}>
                            <div onClick={() => {
                                toggleClientInfo(true)
                            }} className={styles.shapeclient} />
                        </Shake>
                    </>}
                    {clickBlue && <div className={styles.shapeclient} />}
                    <p className={styles.labels}>Client</p>
                </div>
                <div className={styles.shapeContainer}>
                    {clickBlue && <><p className={styles.labels} style={{ paddingBottom: 10 }}>NOW CLICK ME!</p>
                        <animated.a className={styles.labels} style={{ paddingTop: 0, paddingBottom: 30, ...arrowAnim }}><AiOutlineArrowDown /></animated.a>
                        <Shake rotation={20} timing={200}>
                            <div onClick={() => {
                                toggleServerInfo(true)
                            }} className={styles.shapeserver} />
                        </Shake>
                    </>}
                    {clickPink && <div className={styles.shapeserver} />}
                    <p className={styles.labels}>Server</p>
                </div>
            </div>
        </>

    );
};

