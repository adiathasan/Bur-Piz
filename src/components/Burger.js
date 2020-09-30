import React, { useState } from "react";
import "../css/Burger.css";
import { motion, AnimatePresence } from "framer-motion";
import { btnVariants, liVariants } from "./Base";
import { useHistory } from "react-router-dom";
import useContextValue from "../data/ContextApi";
import { SET_BURGER } from "../varibles";

const Burger = () => {
  const ingredients = ["salad", "meat", "cheese"];
  const { dispatch } = useContextValue();
  const history = useHistory();
  const [ingredient, setIngredient] = useState([]);
  const handleToppings = (item) => {
    // if (ingredient.includes(item)) {
    //   let arr = ingredient.filter((cheese) => item !== cheese);
    //   setIngredient(arr);
    // } else {
    // }
    setIngredient([...ingredient, item]);
  };
  const variants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        stiffness: 120,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      variants={variants}
      exit={"exit"}
    >
      <h2>Choose Your Ingredients</h2>
      <AnimatePresence>
        <motion.div className="burger">
          <div className="burger__images">
            <motion.img layout src="/images/top.png" alt="burger__shit" />
            {ingredient.length > 0 ? (
              ingredient.map((item, i) => (
                <motion.img
                  variants={variants}
                  layout
                  key={i}
                  src={`/images/${item}.png`}
                  alt="burger__shit"
                />
              ))
            ) : (
              <h2>nothing selected</h2>
            )}
            <motion.img layout src="/images/bottom.png" alt="burger__shit" />
          </div>
          <div className="burger__selector">
            <ul>
              {ingredients?.map((item) => (
                <motion.li
                  variants={liVariants}
                  whileHover="hover"
                  className={ingredient.includes(item) ? "active" : ""}
                  key={item}
                  onClick={() => handleToppings(item)}
                >
                  {(ingredient.includes(item) ? `> ` : "") + item}
                </motion.li>
              ))}
            </ul>
            {ingredient.length > 0 && (
              <motion.button
                variants={btnVariants}
                whileHover="hover"
                onClick={() => {
                  dispatch({
                    type: SET_BURGER,
                    ingredient,
                  });
                  history.push("/order");
                }}
              >
                {`Next >`}
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Burger;
