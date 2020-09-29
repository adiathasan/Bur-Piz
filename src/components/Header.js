import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router-dom";
import "../css/Header.css";

const variants = {
  initial: {
    rotate: -180,
  },
  animate: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const pathVariance = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const Header = ({ motion }) => {
  const history = useHistory();
  return (
    <div className="header">
      <motion.div
        drag
        dragElastic={1}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <motion.svg
          variants={variants}
          initial="initial"
          animate="animate"
          onClick={() => {
            history.push("/");
          }}
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariance}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariance}
            initial="initial"
            animate="animate"
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        className="title"
      >
        <h1>Bur-Piz</h1>
      </motion.div>
    </div>
  );
};

export default Header;
