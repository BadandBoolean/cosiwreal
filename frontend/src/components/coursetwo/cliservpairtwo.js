import styles from '../../styles/clientserverpair.module.css'
import ReqResArrows from './reqresarrows.js'

export default function CliServPairTwo({toggleReqOpen, toggleResOpen}) {



    return (

        <>
        <div className={styles.mainBoxtwo}>
            <div className={styles.shapeContainer} >
                <div className={styles.shapeWrapper}><div className={styles.shapeclient} /></div>
                <p className={styles.labels}>Client</p>
            </div>
            <div style={{flexBasis: '50%', display: 'flex', alignItems: 'start', height: '100%'}}>
            <ReqResArrows toggleReqOpen={toggleReqOpen} toggleResOpen={toggleResOpen} />
            </div>
            <div className={styles.shapeContainer} >
            <div className={styles.shapeWrapper}><div className={styles.shapeserver} /></div>
                <p className={styles.labels}>Server</p>
            </div>
        </div>
    </>

    );
}