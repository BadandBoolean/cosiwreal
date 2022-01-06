export default function WrongAnswerMessage() {


    const divStyle = {

        display: 'flex',

        border: '1px solid #014700',
        background: '#e00000',
        flexDirection: 'column'

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
            <p style={resultStyle}>That is incorrect! Go back and review the materials, then try again, or click to continue.</p>
        </div>
    );
}