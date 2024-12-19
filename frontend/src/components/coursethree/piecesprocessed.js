import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/courseThree.module.css'

export default function PiecesProcessed() {
    
    const [staticOpened, toggleStaticOpened] = useState(false);
    const [dynamicOpened, toggleDynamicOpened] = useState(false);
    const [otherOpened, toggleOtherOpened] = useState(false);
    
    return (
        (<motion.div
        exit={{opacity: 0}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        style={{display: 'flex', flexDirection: 'column'}}
        >
            <div style={{display: 'flex', justifyContent: 'center', flexBasis: '100%'}}><div style={{display: 'flex', flexBasis: '50%', margin: '20px', textAlign: 'center', borderRadius: '10px', background: '#ec058e', color: 'white', padding: '10px' }}>The server side (usually through the web application, taught in Course Five) retrieves the requested resource, and places it into the body of the response. It then sends the response to the client.
            Click below to find out the different types of content the server can retrieve. Be aware that a server can retrieve any combination of this content, depending on what the client requests.</div></div>
            <div style={{display: 'flex', justifyContent: 'center', flexBasis: '100%'}}>
            <motion.div 
            whileHover={{scale: 1.2}}
            onClick={()=>toggleStaticOpened(!staticOpened)}
            style={{display: 'flex', flexBasis: '50%', margin: '20px', textAlign: 'center', justifyContent: 'center', borderRadius: '10px', background: 'rgb(116, 0, 184)', color: 'white', padding: '10px', cursor: 'pointer'}}>
                {!staticOpened && (<p style={{justifyContent: 'center', display: 'flex', fontWeight: '900', fontSize: '25px'}}>Static Files</p>)}
                {!!staticOpened && (<p style={{justifyContent: 'center', display: 'flex'}}>Static Files are hardcoded, and found by the server at the path of the url. For example,
                if you type in the URL "www.ilovecats.com/catblogpost.html", then the server will retrieve the file called "catblogpost.html" from its file system, and return it in an http response. These static files are pre-created, and can be written in
                HTML, CSS, Javascript, or other languages. These files will never be modified, so a server which only serves static content only needs to process GET requests (and not POST requests, for example). A server which serves dynamic data (see below) can also serve static files.</p>)}

                
            </motion.div>
            <motion.div 
            whileHover={{scale: 1.2}}
            onClick={()=>toggleDynamicOpened(!dynamicOpened)}
            style={{display: 'flex', flexBasis: '50%', margin: '20px', textAlign: 'center', justifyContent: 'center', borderRadius: '10px', background: '#3F88C5', color: 'white', padding: '10px', cursor: 'pointer'}}>
                {!dynamicOpened && (<p style={{justifyContent: 'center', display: 'flex', fontWeight: '900', fontSize: '25px'}}>Dynamic Data</p>)}
                {!!dynamicOpened && (<p style={{justifyContent: 'center', display: 'flex'}}>Dynamic data usually comes from a database on the server side, and is data that can be changed in some way by the client. When the client sends a GET request for this data, the web application on the server side will retrieve this data from the database, insert it into a html template (a static file) and return it as part of an HTTP response to the client.</p>)}

                
            </motion.div>
            <motion.div 
            whileHover={{scale: 1.2}}
            onClick={()=>toggleOtherOpened(!otherOpened)}
            style={{display: 'flex', flexBasis: '50%', margin: '20px', textAlign: 'center', justifyContent: 'center', borderRadius: '10px', background: '#EE5622', color: 'white', padding: '10px', cursor: 'pointer'}}>
                {!otherOpened && (<p style={{justifyContent: 'center', display: 'flex', fontWeight: '900', fontSize: '25px'}}>Other Types of Files</p>)}
                {!!otherOpened && (<p style={{justifyContent: 'center', display: 'flex'}}>The server does not just have to return HTTP responses. It can also return other file types (PDF, CSV, etc.), and other types of data (JSON, XML, etc.). Recently, single-page apps, which are based off of one html template and dynamically update their own content on the client side have become popular. There are pros and cons to structuring your full stack website in different ways. See Course Four for more on client-side rendering.</p>)}
            </motion.div>
            </div>
            <div style={{flexBasis: '100%', display: 'flex', justifyContent: 'center'}}>
            <div style={{cursor: 'pointer', position: 'relative'}}><p className={styles.underlineanim}><Link href='/courseThree/QuizThreeA' legacyBehavior><p style={{textDecoration: 'none'}}>go to quiz</p></Link></p></div>

            </div>
        </motion.div>)
    ); 
} 