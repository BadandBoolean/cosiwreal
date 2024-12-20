import Title from "../../components/title";
import { useState, useRef } from "react";
import styles from "../../styles/courseThree.module.css";
import pagestyles from "../../styles/home.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Listening from "../../components/coursethree/listening.js";
import PiecesProcessed from "../../components/coursethree/piecesprocessed.js";
import Footer from "../../components/footer.js";
import NavBar from "../../components/NavBar";

export default function courseThree() {
  const bodyStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    marginBottom: "50px",
    marginLeft: "10px",
    marginRight: "10px",
  };

  const startButtonVar = {
    hover: {
      scale: 1.2,
    },
    notclicked: {
      opacity: 1,
      scale: 1,
    },
    clicked: {
      opacity: 0,
      scale: 0,
      transition: {
        scale: {
          type: "spring",
          duration: 1,
        },
        opacity: {
          duration: 1,
          type: "spring",
        },
      },
    },
  };

  const textVar = {
    notclicked: {
      opacity: 1,
    },
    before: {
      opacity: 0,
    },
  };

  const toggleStartClicked = (e) => {
    updateStartClicked(e);
    toggleCodeShowing(e);
  };

  const toggleProcessInfo = (e) => {
    openProcessInfo(e);
    toggleCodeShowing(!e);
  };

  const title =
    "Client-Server Interaction: How does the server-side handle queries from the client?";

  const [startClicked, updateStartClicked] = useState(false);
  const [codeShowing, toggleCodeShowing] = useState(false);
  const [processInfo, openProcessInfo] = useState(false);
  const constraintsRef = useRef(null);

  return (
    <div className={pagestyles.page}>
      <NavBar />
      <div>
        <Title text={title} />
        <div style={bodyStyles}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "80%",
              flexDirection: "column",
            }}
          >
            {!startClicked && (
              <motion.div
                variants={textVar}
                initial="before"
                animate="notclicked"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexBasis: "100%",
                  margin: "30px",
                  fontSize: "25px",
                }}
              >
                Drag to open a connection with the server and send a request
              </motion.div>
            )}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AnimatePresence>
                {" "}
                {!startClicked && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    exit={{
                      opacity: 0,
                      transition: { opacity: { duration: 1, type: "ease" } },
                    }}
                    key="1"
                    ref={constraintsRef}
                    style={{
                      display: "flex",
                      flexBasis: "50%",
                      height: "60px",
                      borderRadius: "20px",
                      background: "#ec058e",
                    }}
                  >
                    <motion.div
                      drag="x"
                      dragConstraints={constraintsRef}
                      dragElastic={0}
                      whileDrag={{ scale: 1.01 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                        transition: {
                          scale: { duration: 1, type: "ease" },
                          opacity: { duration: 1, type: "ease" },
                        },
                      }}
                      style={{
                        borderRadius: "20px",
                        background: "white",
                        margin: "2px",
                        width: "65px",
                        cursor: "pointer",
                      }}
                      onDragEnd={() => toggleStartClicked(true)}
                    >
                      &nbsp;
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {!!codeShowing && (
                <Listening key={1} toggleProcessInfo={toggleProcessInfo} />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!!processInfo && <PiecesProcessed key={3} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
