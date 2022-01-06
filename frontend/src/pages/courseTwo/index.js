import Title from '../../components/title'
import CliServPairTwo from '../../components/coursetwo/cliservpairtwo.js'
import ReqDiagram from '../../components/coursetwo/reqdiagram.js'
import ResDiagram from '../../components/coursetwo/resdiagram.js'
import { useState } from 'react';


export default function courseTwo() {

    const bodyStyles = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        marginBottom: '50px',
        marginLeft: '10px',
        marginRight: '10px'
    }

    const toggleReqOpen = (e) => {
        showReqOpen(e);
        showcsPair(!e);
        showResOpen(!e);
    };

    const toggleMidway = (e) => {
        showcsPair(e);
        showReqOpen(!e);
        showResOpen(!e);
    }

    const toggleResOpen = (e) => {
        showResOpen(e);
        showcsPair(!e);
        showReqOpen(!e);
    }

    const title = 'Client-Server Interaction: how do they communicate?'

    const [csPairOpen, showcsPair] = useState(true);
    const [reqOpen, showReqOpen] = useState(false);
    const [resOpen, showResOpen] = useState(false);

    return (
        <>
            <div>
                <Title text={title} />
                <div style={bodyStyles}>
                    {csPairOpen && <CliServPairTwo toggleReqOpen={toggleReqOpen} toggleResOpen={toggleResOpen} />}
                    {reqOpen && <ReqDiagram toggleMidway={toggleMidway}/>}
                    {resOpen && <ResDiagram toggleMidway={toggleMidway} />}
                </div>
            </div>
        </>

    );
}