import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Toppings.css";
import useContextValue from "../data/ContextApi";
import { SET_PIZZA_TOPPINGS } from "../varibles";
import { btnVariants, containerVariants, liVariants } from "./Base";

const Toppings = ({ motion }) => {
  const { dispatch } = useContextValue();
  const history = useHistory();
  const [topping, setTopping] = useState([]);
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  const handleToppings = (item, e) => {
    if (topping.includes(item)) {
      let arr = topping.filter((ingredient) => item !== ingredient);
      setTopping(arr);
    } else {
      setTopping([...topping, item]);
    }
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      div
      className="toppings"
    >
      <h2>Step 2: Choose Your Toppings</h2>
      <ul>
        {toppings?.map((item) => (
          <motion.li
            variants={liVariants}
            whileHover="hover"
            className={topping.includes(item) ? "active" : ""}
            key={item}
            onClick={(e) => handleToppings(item, e)}
          >
            {(topping.includes(item) ? `> ` : "") + item}
          </motion.li>
        ))}
      </ul>
      {topping.length > 0 && (
        <motion.button
          variants={btnVariants}
          whileHover="hover"
          onClick={() => {
            dispatch({
              type: SET_PIZZA_TOPPINGS,
              topping,
            });
            history.push("/order");
          }}
        >
          {`Next >`}
        </motion.button>
      )}
    </motion.div>
  );
};

export default Toppings;
