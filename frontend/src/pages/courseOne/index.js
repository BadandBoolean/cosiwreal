import Title from "../../components/title";
import ClientServerPair from "../../components/courseone/clientserverpair";
import ClientDiagram from "../../components/courseone/clientDiagram.js";
import ServerDiagram from "../../components/courseone/serverDiagram.js";
import { useState } from "react";
import styles from "../../styles/home.module.css";
import Footer from "../../components/footer.js";
import NavBar from "../../components/NavBar";

export default function courseOne() {
  const toggleClientInfo = (e) => {
    showClientInfo(e);
    showcsPair(!e);
  };

  const toggleServerInfo = (e) => {
    showServerInfo(e);
    showcsPair(!e);
  };

  const togglePair = (e) => {
    showcsPair(e);
    showClientInfo(!e);
    showServerInfo(!e);
    setClickPink(!e);
    setClickBlue(e);
  };

  const [clientInfoOpen, showClientInfo] = useState(false);
  const [serverInfoOpen, showServerInfo] = useState(false);
  const [csPairOpen, showcsPair] = useState(true);
  const [clickPink, setClickPink] = useState(true);
  const [clickBlue, setClickBlue] = useState(false);

  const title = "Client-Server Interaction: client and server - what are they?";

  const bodyStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    marginBottom: "50px",
    marginLeft: "10px",
    marginRight: "10px",
  };

  return (
    <div className={styles.activityPage}>
      <NavBar />

      <Title text={title} />
      <div style={bodyStyles}>
        {csPairOpen && (
          <ClientServerPair
            toggleClientInfo={toggleClientInfo}
            toggleServerInfo={toggleServerInfo}
            clickPink={clickPink}
            clickBlue={clickBlue}
          />
        )}
        {clientInfoOpen && (
          <section
            style={{
              alignItems: "flex-start",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              width: "90%",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <ClientDiagram togglePair={togglePair} />
          </section>
        )}
        {serverInfoOpen && (
          <section
            style={{
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "90%",
              paddingBottom: "70px",
              paddingTop: "150px",
            }}
          >
            <ServerDiagram togglePair={togglePair} />
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}
