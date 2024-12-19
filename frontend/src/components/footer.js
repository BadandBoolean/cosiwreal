import Link from 'next/link';

export default function Footer() {

    const wrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        background: '#3D1FFF',
        color: 'white',
        height: '2.5rem',
        alignItems: 'center',

    }

    return (
        (<div style={wrapperStyle}>
            <div style={{font: 'italic 15px', textDecoration: 'none'}}>
                Created by <Link style={{textDecoration: 'none'}} href='https://www.linkedin.com/in/aliya-ismagilova-9651331a5/'>Aliya Ismagilova</Link> '22 for COS 497: Senior Independent Work 
            </div>
        </div>)
    );

}