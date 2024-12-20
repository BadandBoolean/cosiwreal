import { motion } from 'framer-motion';
import styles from '../../styles/reqdiagram.module.css'
import homestyles from '../../styles/home.module.css'
import { useState } from 'react';
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";


export default function ReqDiagram({toggleMidway}) {
    
    const [infoIsOpen, openInfo] = useState(false);
    const [getOpen, openGet] = useState(false);
    const [postOpen, openPost] = useState(false);
    const [headOpen, openHead] = useState(false);
    const [isFinished, toggleFinished] = useState(false);

    const titleVariant = {
        hidden: {
            opacity: 0,
            scale: 0.9
        },
        clicked: {
            scale: 1,
            opacity: 1,
            transition: {
                scale: {
                    type: "spring",
                    duration: 0.5
                },
                opacity: {
                    ease: "easeInOut",
                    duration: 0.01
                }
            }
        },
        notClicked: {
            opacity: 0, 
            scale: 0.8
        }
    };

    const writingoneVariant = {
        hidden: {
            opacity: 0,
            scale: 0.9
        },
        clicked: {
            scale: 1,
            opacity: 1,
            transition: {
                scale: {
                    type: "spring",
                    duration: 0.5,
                    delay: 0.1
                },
                opacity: {
                    ease: "easeInOut",
                    duration: 0.01,
                    delay: 0.1
                }
            }
        },
        notClicked: {
            opacity: 0, 
            scale: 0.8
        }
    };

    const tocVariant = {
        hidden: {
            opacity: 0,
            scale: 0.9
        },
        clicked: {
            scale: 1,
            opacity: 1,
            transition: {
                scale: {
                    type: "spring",
                    duration: 0.5,
                    delay: 0.2
                },
                opacity: {
                    ease: "easeInOut",
                    duration: 0.01,
                    delay: 0.2
                }
            }
        },
        notClicked: {
            opacity: 0, 
            scale: 0.8
        }
    };

    const writingthreeVariant = {
        hidden: {
            opacity: 0,
            scale: 0.9
        },
        clicked: {
            scale: 1,
            opacity: 1,
            transition: {
                scale: {
                    type: "spring",
                    duration: 0.5,
                    delay: 0.3
                },
                opacity: {
                    ease: "easeInOut",
                    duration: 0.01,
                    delay: 0.3
                }
            }
        },
        notClicked: {
            opacity: 0, 
            scale: 0.8
        }
    };

    const photoVariant = {
        hidden: {
            opacity: 0,
            scale: 0.9
        },
        clicked: {
            scale: 1,
            opacity: 1,
            transition: {
                scale: {
                    type: "spring",
                    duration: 0.5,
                    delay: 0.4
                },
                opacity: {
                    ease: "easeInOut",
                    duration: 0.01,
                    delay: 0.4
                }
            }
        },
        notClicked: {
            opacity: 0, 
            scale: 0.8
        }
    };

    const writingtwoVariant = {
        hidden: {
            opacity: 0,
            scale: 0.9
        },
        clicked: {
            scale: 1,
            opacity: 1,
            transition: {
                scale: {
                    type: "spring",
                    duration: 0.5,
                    delay: 0.5
                },
                opacity: {
                    ease: "easeInOut",
                    duration: 0.01,
                    delay: 0.5
                }
            }
        },
        notClicked: {
            opacity: 0, 
            scale: 0.8
        }
    };

    const getVariant = {
        hidden: {
            opacity: 0,
        },
        clicked: {
            opacity: 1
        },
        notClicked: {
            opacity: 0,
        }
    }

    const congratsVariant = {
        hidden: { opacity: 0, },
        isVisible: {
            transition: {
                delay: 1,
            },
            opacity: 1,
         },
        notVisible: { 
            opacity: 0
        },
    }
    
    return (
        
        <div className={styles.sectionBody}>
            <div style={{display: 'flex', justifyContent: 'center'}}><p>In order for the client (your browser) to display a web page, it sends a HTTP request to the server.</p></div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexBasis: '25%', flexDirection: 'column', margin: '5px', paddingRight: '5px', paddingLeft: '5px', background: 'rgb(58, 58, 58)', borderRadius: '5px', color: 'white', height: '30vh'}}>
                <p style={{fontSize: '13px'}}>This is the URL. It is sent as part of the request <VscTriangleRight /></p>
                <p style={{fontSize: '13px', marginTop: '0px'}}>When the server receives this request, it looks for a specific resource under the path <b>'/home/posts'</b> among its static files, and serves it.</p>
                <p style={{fontSize: '13px', marginTop: '0px'}}>You can also send URL parameters. Here, <b>?posttitle=mycatinpictures</b> is a key-value pair, telling the server to specifically look for a post with the title 'My Cat in Pictures', and return it to the client.</p>
            </div>
            
            <div className={styles.fakesiteWrapper}> 
            <div className={styles.fakehttp} onClick={()=>openInfo(!infoIsOpen)} ><p style={{color: 'black', margin: '5px'}}>https://www.myblog.com/home?posttitle=mycatinpictures</p></div>
            <motion.div
             variants={titleVariant}
             custom={infoIsOpen}
             initial="hidden"
             animate={infoIsOpen ? "clicked" : "notClicked"}
             className={styles.fakeTitle}><p style={{color: 'white', margin: '10px'}}>Welcome to My Blog!</p></motion.div>
            <div className={styles.fakeRow}>
                <motion.div
                variants={writingoneVariant}
                custom={infoIsOpen}
                initial="hidden"
                animate={infoIsOpen ? "clicked" : "notClicked"}
                className={styles.fakeWritingSectionOne}><p style={{margin: '10px', display: 'flex', justifyContent: 'center'}}><b>My Cat in Pictures</b></p></motion.div>
                <motion.div
                variants={tocVariant}
                custom={infoIsOpen}
                initial="hidden"
                animate={infoIsOpen ? "clicked" : "notClicked"}
                className={styles.fakeToC} />
            </div>
            <div className={styles.fakeRow}>
                <motion.div
                variants={photoVariant}
                custom={infoIsOpen}
                initial="hidden"
                animate={infoIsOpen ? "clicked" : "notClicked"}
                className={styles.fakePhoto} />
                <motion.div
                 variants={writingtwoVariant}
                 custom={infoIsOpen}
                 initial="hidden"
                 animate={infoIsOpen ? "clicked" : "notClicked"}
                className={styles.fakeWritingSectionTwo} />
            </div>
            <div className={styles.fakeRowTwo}>
                <motion.div
                variants={writingthreeVariant}
                custom={infoIsOpen}
                initial="hidden"
                animate={infoIsOpen ? "clicked" : "notClicked"}
                className={styles.fakeWritingSectionThree} />
            </div>

            </div>
            <div style={{display: 'flex', flexBasis: '25%', justifyContent: 'center'}}></div>
            </div>
            
            
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}><div style={{display: 'flex', justifyContent: 'center', width: '60%'}}><p>So far we have learned that the request consists of the URL of the resource you need, and other identifying content such as parameters (but not necessarily). An HTTP request also needs a <b>method. Here are three of the most commonly used methods. Click on one to find out more about it.</b> </p></div></div>

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px', height: '40vh'}}>

            <div className={styles.methodSection}>
                <div className={styles.methodRectWrapper}>
                    <div onClick={()=>openGet(!getOpen)} className={styles.methodRect1}>GET</div>
                </div>
                <motion.div
                    variants={getVariant}
                    custom={getOpen}
                    initial="hidden"
                    animate={getOpen ? "clicked" : "notClicked"}
                    className={styles.methodText}
                    >
                        The GET method asks for a specific resource from the server, for example a webpage or image.
                    </motion.div>

            </div>
            <div className={styles.methodSection}>
                <div className={styles.methodRectWrapper}>
                    <div onClick={()=>openPost(!postOpen)} className={styles.methodRect2}>POST</div>
                </div>
                <motion.div
                    variants={getVariant}
                    custom={postOpen}
                    initial="hidden"
                    animate={postOpen ? "clicked" : "notClicked"}
                    className={styles.methodText}
                    >
                        The POST method sends data to the server. For example, if you fill out a form on a webpage, your inputs will be sent to the server via a POST request.
                    </motion.div>

            </div>
            <div className={styles.methodSection}>
                <div className={styles.methodRectWrapper}>
                    <div onClick={()=>openHead(!headOpen)} className={styles.methodRect3}>HEAD</div>
                </div>
                <motion.div
                    variants={getVariant}
                    custom={headOpen}
                    initial="hidden"
                    animate={headOpen ? "clicked" : "notClicked"}
                    className={styles.methodText}
                    >
                        Used less frequently, requests with the HEAD method return only headers of a resource, which reveal information about it, instead of the full resource itself. This can be useful in case the resource is a really large file. 
                    </motion.div>
            </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'center', flexBasis: '50%'}}><b>Summary:</b></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
                <div style={{flexBasis: '25%'}}></div>
                <div className={styles.dragPlayground}>
                    <motion.div className={styles.draggable} style={{zIndex: 5, background: '#79A9D1', color: 'white'}}
                    drag
                    dragConstraints={{
                        top: -125,
                        right: 125,
                        bottom: 125,
                        left: -125,
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    >
                        An HTTP request is made by a client, to a named host, which is located on a server.
                    </motion.div>
                    <motion.div className={styles.draggable} style={{zIndex: 4, background: '#7D8CA3', color: 'white'}}
                    drag
                    dragConstraints={{
                        top: -125,
                        right: 125,
                        bottom: 125,
                        left: -125,
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    >
                        The aim of the request is to access a resource on the server, and to deliver this resource to the client or to change some part of it.
                    </motion.div>
                    <motion.div className={styles.draggable} style={{zIndex: 3, background: '#59544B', color: 'white'}}
                    drag
                    dragConstraints={{
                        top: -300,
                        right: 300,
                        bottom: 300,
                        left: -300,
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    >
                        The request URL includes a request line, consisting of: <br />
                        1. a method (what the server should do with the resource). Note that this is not visible in the URL you type into the browser. <br />
                        2. A path string to tell the server where the resource is located <br />
                        3. The HTTP version.
                    </motion.div>
                    <motion.div className={styles.draggable} style={{zIndex: 2, background: '#36311F', color: 'white'}}
                    drag
                    dragConstraints={{
                        top: -300,
                        right: 300,
                        bottom: 300,
                        left: -300,
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    onClick={()=>toggleFinished(true)}
                    >
                        The request also contains headers detailing metadata, as well as a message body (if needed).
                    </motion.div>

                </div> 
                <div style={{flexBasis: '25%', display: 'flex', justifyContent: 'center'}}>
                    <motion.div
                    variants={congratsVariant}
                    custom={isFinished}
                    initial="hidden"
                    animate={isFinished ? "isVisible" : "notVisible"}
                    className={styles.finished}
                    onClick={() => {
                        toggleMidway(true)  
                      }}
                    >
                        click me!
                    </motion.div>
                </div> 
            </div>


        </div>
        

    );
}