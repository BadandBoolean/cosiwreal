import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

import { useState } from "react";
import { SessionProvider } from "next-auth/react";

// The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. Therefore, any props you send to Component will be received by the page.

// When you add getInitialProps in your custom app, you must import App from "next/app", call App.getInitialProps(appContext) inside getInitialProps and merge the returned object into the return value.

// will be useful later with authentication and layout and stuff

function MyApp({ Component, pageProps }) {
  const [score, updateScore] = useState(0);

  const makeUpdateScore = (e) => {
    updateScore(score + e);
    // TODO: will have to push this to Prisma so database can also be updated with their score
  };

  return (
    <div>
      <SessionProvider session={pageProps.session}>
        
        <Component {...pageProps} />
        
      </SessionProvider>
    </div>
  );
}

export default MyApp;
