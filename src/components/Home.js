import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Loader from "./Loader";

const btnVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 8px rgb(255, 255, 255)",
    boxShadow: "0 0 8px rgb(255, 255, 255)",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const homeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.8, duration: 1.5 } },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Home = ({ motion }) => {
  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home"
    >
      <h2>Welcome to Bur-Piz</h2>
      <Loader />
      <Link to="/base" className="home__base">
        <motion.button variants={btnVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Link to="/burger">
        <motion.button variants={btnVariant} whileHover="hover">
          Create Your Burger
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
