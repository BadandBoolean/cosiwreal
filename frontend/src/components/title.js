export default function Title(props) {

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#344055',
        margin: '20px',
        height: '10vh'
    }


    return (
        <section style={styles}
        >{props.text}</section>
    );

}