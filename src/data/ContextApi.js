import React, { useReducer, createContext, useContext } from "react";
import {
  USER_SIGNED_UP,
  USER_SIGNED_OUT,
  SET_PIZZA_TOPPINGS,
  SET_PIZZA_BASE,
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE, SET_BURGER
} from "../varibles";
const contextApi = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case USER_SIGNED_UP:
      return {};
    case USER_SIGNED_OUT:
      return {};
    case SET_PIZZA_TOPPINGS:
      return {
        ...state,
        pizza: { ...state.pizza, toppings: action.topping },
      };
    case SET_BURGER:
      return {
        ...state,
        burger: action.ingredient,
      };
    case SET_PIZZA_BASE:
      return {
        ...state,
        pizza: { ...state.pizza, base: action.base },
      };
    case SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
      };
    case SET_MODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};
export const ContextApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    pizza: { base: "", toppings: [] },
    isModalOpen: false,
    burger: []
  });
  return (
    <contextApi.Provider value={{ dispatch, state }}>
      {children}
    </contextApi.Provider>
  );
};

const useContextValue = () => useContext(contextApi);

export default useContextValue;
