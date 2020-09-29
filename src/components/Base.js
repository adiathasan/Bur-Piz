import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Base.css";
import useContextValue from "../data/ContextApi";
import { SET_PIZZA_BASE } from "../varibles";

export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    transition: {
      type: "spring",
      stiffness: 120,
      when: "beforeChildren",
      mass: 1,
      damping: 9,
      staggerChildren: 0.8,
    },
    opacity: 1,
    x: 0,
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export const liVariants = {
  hover: {
    textShadow: "0 0 8px rgb(255, 255, 255)",
    scale: 1.3,
    originX: 0,
    color: "#f8e112",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

export const btnVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
    },
    opacity: 1,
    x: 0,
  },
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

const Base = ({ motion }) => {
  const { dispatch } = useContextValue();

  const history = useHistory();
  const [layer, setLayer] = useState(null);
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const handleBase = (base, e) => {
    setLayer(base);
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="base"
    >
      <h2>Step 1: Choose Your Base</h2>
      <ul>
        {bases?.map((base) => (
          <motion.li
            variants={liVariants}
            whileHover="hover"
            className={layer === base ? "active" : ""}
            key={base}
            onClick={(e) => handleBase(base, e)}
          >
            {(layer === base ? `> ` : "") + base}
          </motion.li>
        ))}
      </ul>
      {layer && (
        <motion.button
          variants={btnVariants}
          whileHover="hover"
          onClick={() => {
            dispatch({
              type: SET_PIZZA_BASE,
              base: layer,
            });
            history.push("/toppings");
          }}
        >
          {`Next >`}
        </motion.button>
      )}
    </motion.div>
  );
};

export default Base;
