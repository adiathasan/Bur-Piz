import React from "react";
import "./App.css";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { motion } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";
import useContextValue from "./data/ContextApi";
import { SET_MODAL_CLOSE } from "./varibles";
import Burger from "./components/Burger";

function App() {
  const location = useLocation();
  const { dispatch } = useContextValue();

  return (
    <div className="app">
      <Header motion={motion} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() =>
          dispatch({
            type: SET_MODAL_CLOSE,
          })
        }
      >
        <Switch location={location} key={location.key}>
          <Route exact path="/order">
            <Order motion={motion} />
          </Route>
          <Route exact path="/burger">
            <Burger />
          </Route>
          <Route exact path="/toppings">
            <Toppings motion={motion} />
          </Route>
          <Route exact path="/base">
            <Base motion={motion} />
          </Route>
          <Route exact path="/">
            <Home motion={motion} />
          </Route>
        </Switch>
        <Modal />
      </AnimatePresence>
    </div>
  );
}

export default App;
