import { getSession } from "next-auth/react"
import { useSession } from 'next-auth/react'


export default function Score({ score }) {

    const { data: session, status } = useSession();

    const scoreWrapper = {
        display: 'flex',
        justifyContent: 'center',
        margin: '40px',
    }

    const scorestyle = {
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        fontWeight: '700',
        color: '#3D1FFF'
    }


    return (
        <div style={scoreWrapper}>
            <div style={scorestyle}><p>Score: {(status === "authenticated") ? (score) : (0)}</p></div>
        </div>
    );
}


