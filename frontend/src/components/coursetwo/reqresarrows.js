import { useState } from 'react';
import useMeasure from 'react-use-measure';
import { useSpring, animated } from '@react-spring/web';
import styles from '../../styles/reqresarrows.module.css';     
import requestarr from '../../../public/request.png'        
import responsearr from '../../../public/response.png' 
import Image from 'next/image'; 
import {motion} from 'framer-motion'

export default function ReqResArrows({toggleReqOpen, toggleResOpen}) {

    


    return (

        <>
        <div className={styles.container}>
            <div className={styles.arrowContainerOne} onClick={() => {
              toggleReqOpen(true)  
            }}><Image src={requestarr} width={400} height={90} /></div>
            <div className={styles.arrowContainerTwo} onClick={() => {
              toggleResOpen(true)  
            }}><Image src={responsearr} width={400} height= {90} /></div>
        </div>
        </>

    );
}