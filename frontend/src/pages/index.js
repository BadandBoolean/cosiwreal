import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/home.module.css'
import { useSession } from 'next-auth/react'
import { getSession } from "next-auth/react"
import prisma from '../../lib/prisma'
import Score from '../components/score'

export default function HomePage({userDetails}) {

  const { data: session, status } = useSession();

  const oneVar = {

    hover: {
      scale: 1.1,
      marginRight: '30px'
    },

    hidden: {
      opacity: 0,
      scale: 0.3,
    },

    final: {
      opacity: 1,
      scale: 1,
      transition: {
        scale: {
        type: 'spring',
        duration: 0.7,
        delay: 0,
        },
        opacity: {
          type: 'spring',
          duration: 0.4,
          delay: 0,
        }
      }

    }

  }

  const updateProgress = async (e) => {
    if (!!session) {
    const response = await fetch('api/updateProg', {
      method: 'POST',
      body: JSON.stringify({"courseNum": e, "color": "#F4CF15", "userEmail": session.user.email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
  }
  }


  return (
    <>
      <Score score={(!!userDetails) ? (userDetails.score) : (0)} />
      <div className={styles.introStyle}>
        {(status === "authenticated") && <div style={{display: 'flex', justifyContent: 'center'}}><p style={{width: '70%', color: '#169873', fontWeight: '700', fontSize: '20px', marginBottom: '0px' }}>
          Welcome back, {session.user.name ?? session.user.email}
        </p></div>}
        {(status === "unauthenticated") && <div style={{display: 'flex', justifyContent: 'center'}}><p style={{width: '70%', color: '#169873', fontWeight: '700', fontSize: '20px', marginBottom: '0px' }}>
          Welcome, Stranger.
        </p></div>} 
        <div style={{display: 'flex', justifyContent: 'center'}}><p style={{width: '70%', color: '#169873', fontWeight: '700', fontSize: '20px', marginBottom: '0px' }}>
          
          Select a course to learn more about how a website works.
          
          
        </p>
        </div>
        {(status === "unauthenticated") && <div style={{display: 'flex', justifyContent: 'center'}}><p style={{width: '70%', color: '#169873', fontWeight: '700', fontSize: '20px' }}>
          Log in to save your progress.
        </p></div>} 
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerStyle}>
          <motion.div 
          className={styles.blockBasic} 
          style={{background: (status === "authenticated") ? (userDetails.progOne) : ('#E47A77') }}
          variants={oneVar}
          whileHover="hover"
          initial="hidden"
          animate="final"
          > 
            <Link href="/courseOne">
            <div onClick={() => {updateProgress(1)}} style={{display: 'flex', justifyContent: 'center', textDecoration: 'none'}}>
            <p style={{display: 'flex', textAlign: 'center', fontWeight: '700', fontSize: '20px'}}>ONE
            <br />
            <br />
            Client and Server - what are they?</p>
            </div>
            </Link>
          </motion.div>

          <motion.div 
          className={styles.blockBasic} 
          style={{background: (status === "authenticated") ? (userDetails.progTwo) : ('#E47A77')}}
          variants={oneVar}
          whileHover="hover"
          initial="hidden"
          animate="final"
          > 
            <Link href="/courseTwo">
            <div onClick={() => {updateProgress(2)}} style={{display: 'flex', justifyContent: 'center', textDecoration: 'none'}}>
            <p style={{display: 'flex', textAlign: 'center', fontWeight: '700', fontSize: '20px'}}>TWO
            <br />
            <br />
            Interactions between Client and Server</p>
            </div>
            </Link>
          </motion.div>

          <motion.div 
          className={styles.blockBasic} 
          style={{background: (status === "authenticated") ? (userDetails.progThree) : ('#E47A77')}}
          variants={oneVar}
          whileHover="hover"
          initial="hidden"
          animate="final"
          > 
            <Link href="/courseThree">
            <div onClick={() => {updateProgress(3)}} style={{display: 'flex', justifyContent: 'center', textDecoration: 'none'}}>
            <p style={{display: 'flex', textAlign: 'center', fontWeight: '700', fontSize: '20px'}}>THREE
            <br />
            <br />
            In detail: Req, res on the serverside</p>
            </div>
            </Link>
          </motion.div>

          <motion.div 
          className={styles.blockBasic} 
          style={{background: (status === "authenticated") ? (userDetails.progFour) : ('#E47A77')}}
          variants={oneVar}
          whileHover="hover"
          initial="hidden"
          animate="final"
          > 
            <Link href="/courseTwo">
            <div onClick={() => {updateProgress(4)}} style={{display: 'flex', justifyContent: 'center', textDecoration: 'none'}}>
            <p style={{display: 'flex', textAlign: 'center', fontWeight: '700', fontSize: '20px'}}>FOUR
            <br />
            <br />
            Client-side rendering</p>
            </div>
            </Link>
          </motion.div>

          <motion.div 
          className={styles.blockBasic} 
          style={{background: (status === "authenticated") ? (userDetails.progFive) : ('#E47A77')}}
          variants={oneVar}
          whileHover="hover"
          initial="hidden"
          animate="final"
          > 
            <Link href="/courseTwo">
            <div onClick={() => {updateProgress(5)}} style={{display: 'flex', justifyContent: 'center', textDecoration: 'none'}}>
            <p style={{display: 'flex', textAlign: 'center', fontWeight: '700', fontSize: '20px'}}>FIVE
            <br />
            <br />
            Working with databases and dynamic content</p>
            </div>
            </Link>
          </motion.div>





        </div>





      </div>
      </div>

      
    </>
  );

}

export async function getServerSideProps(context) {
  
  const session = await getSession(context); 
  let user;
  if (!!session) {
  user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    }
  });
}
  return {
    props: {
      userDetails: user || null
    },
  }
}



