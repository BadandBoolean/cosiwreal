import { useState } from 'react';
import styles from '../../styles/courseThree.module.css'
import { motion } from 'framer-motion';
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";
import Image from 'next/image'
import servercode1 from '../../../public/servercode1.png'
import servercode2 from '../../../public/servercode2.png'
import servercode3 from '../../../public/servercode3.png'

export default function Listening({toggleProcessInfo}) {


    const textVar ={
        start: {
            opacity: 0,
        },
        end: {
            opacity: 1,
            scale: 1,
            transition: {
                opacity: {
                    duration: 0.5,
                    delay: 1,
                },
            }
        }

    }

    const codeVar = {
        start: {
            opacity: 0,
            
        },
        end: {
            opacity: 1,
            scale: 1,
            transition: {
                opacity: {
                    duration: 0.5,
                    delay: 1.5
                },
                
            }
        }

    }

    const processVar = {
        hover: {
            scale: 1.1,
        }


    }


    return (
        <motion.div
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1, transition: { opacity: {delay: 1, type: 'ease'}, scale: {delay: 1, type: 'ease'}}}}
        exit={{opacity: 0}}
        style={{display: 'flex', justifyContent: 'center', flexBasis: '80%'}}>
            <div style={{display: 'flex', justifyContent: 'center', flexBasis: '33%', marginRight: '10px'}}>
                <motion.div
                    variants={textVar}
                    initial="start"
                    animate="end"
                >
                    The server is listening for an HTTP request from a client. The server listens for this request on a port and address which it uses to connect to the client.
                    <br /> <br />Here is what the code might look like on the server side for establishing such a connection and waiting for a request, written with node.js <VscTriangleRight />
                </motion.div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', flexBasis: '33%'}}>
                <motion.div
                variants={codeVar}
                initial="start"
                animate="end"
                style={{display: 'flex', flexDirection: 'column', marginLeft: '5px', marginRight: '5px'}}
                >
                    <div style={{borderRadius: '5px', overflow: 'hidden', display: 'flex', alignItems: 'center', margin: '10px'}}><Image src={servercode1} /></div>
                    <div style={{borderRadius: '5px', overflow: 'hidden', display: 'flex', alignItems: 'center', margin: '10px'}}><Image src={servercode2} /></div>
                    <div style={{borderRadius: '5px', overflow: 'hidden', display: 'flex', alignItems: 'center', margin: '10px'}}><Image src={servercode3} /></div>


                </motion.div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', flexBasis: '33%', marginLeft: '10px', flexDirection: 'column'}}>
                <div>When the server receives a request on the port from the client, it begins to process it. </div>
                <div style={{flexBasis: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center'}} >
                <motion.div
                variants={processVar}
                whileHover="hover"
                onClick={() => toggleProcessInfo(true)}
                style={{flexBasis: '60%', borderRadius: '20px', display: 'flex', justifyContent: 'center', background: '#ec058e', color: 'white', textAlign: 'center', padding: '10px', cursor: 'pointer'}}
                >Press here to process the request and send back a response</motion.div></div>
            </div>

        
        </motion.div>

    )
}
