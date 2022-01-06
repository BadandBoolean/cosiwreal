export default function RightAnswerMessage({ infoText }) {


    const divStyle = {

        display: 'flex',

        border: '1px solid #014700',
        background: '#04e000',
        flexDirection: 'column',


    };

    const resultStyle = {
        fontWeight: 'bold',
        margin: '10px'
    };

    const paraStyle = {
        margin: '10px',
    }

    return (
        <div style={divStyle}>
            <p style={resultStyle}>This is correct!</p>
            <p style={paraStyle}>{infoText}</p>
        </div>
    );
}