import { AnimatePresence } from "framer-motion";
import React from "react";
import "../css/Modal.css";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { btnVariants } from "./Base";
import useContextValue from "../data/ContextApi";

const backDropVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const modalVariants = {
  initial: {
    y: "-100vh",
    rotateZ: 180,
    opacity: 0,
  },
  animate: {
    y: 0,
    rotateZ: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = () => {
  const { state } = useContextValue();
  const { isModalOpen } = state;
  const history = useHistory();
  return (
    <AnimatePresence exitBeforeEnter>
      {isModalOpen && (
        <motion.div
          variants={backDropVariants}
          initial="initial"
          animate="animate"
          className="modal"
          exit="initial"
        >
          <motion.div
            exit="exit"
            variants={modalVariants}
            className="modal__center"
          >
            <p>Want to make another pizza? </p>
            <motion.button
              onClick={() => history.push("/")}
              variants={btnVariants}
              whileHover="hover"
            >
              start again!
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
