import React, { useEffect } from "react";
import useContextValue from "../data/ContextApi";
import "../css/Order.css";
import { containerVariants } from "./Base";
import { SET_MODAL_OPEN } from "../varibles";

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { when: "afterParent" },
  },
};

const Order = ({ motion }) => {
  const { dispatch, state } = useContextValue();
  const { pizza, burger } = state;

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: SET_MODAL_OPEN,
      });
    }, 5000);
  }, [dispatch]);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="order"
    >
      <h2>Thank you for your order 🍕 🍔 </h2>
      <motion.p variants={childVariants}>
        You ordered a <span>{pizza.base}</span>
        <span>pizza {burger && " & burger"}</span> with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings?.map((topping) => (
          <div key={topping} className="order__toppings">
            {"> " + topping}
          </div>
        ))}
      </motion.div>
      <motion.div variants={childVariants}>
        {burger?.map((topping) => (
          <div key={topping} className="order__toppings">
            {"> " + topping}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
