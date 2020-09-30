import { auth, provider } from "../config/firebaseSetup";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/Header.css";
import { btnVariants } from "./Base";
import useContextValue from "../data/ContextApi";
import { SET_USER, UNSET_USER } from "../varibles";
import { Avatar } from "@material-ui/core";
import useAuth from "../hooks/useAuth";

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

const useUser = useAuth();

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
const Header = () => {
  const { dispatch, state } = useContextValue();
  const { user } = state;
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user &&
        dispatch({
          type: SET_USER,
          user: {
            user_name: user?.displayName,
            user_email: user?.email,
            user_phone: user?.phoneNumber,
            user_photo: user?.photoURL,
          },
        });
    });
  }, [user]);

  const handleAuth = () => {
    auth.signInWithPopup(provider).then(({ user }) => {});
  };
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
      <div className="header__auth">
        {<Avatar className="avatar" src={user?.user_photo} />}
        {!user ? (
          <motion.button
            variants={btnVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            onClick={handleAuth}
          >
            sign-up
          </motion.button>
        ) : (
          <motion.button
            onClick={() =>
              auth.signOut().then(() => {
                dispatch({
                  type: UNSET_USER,
                });
              })
            }
            whileHover="hover"
            initial="hidden"
            animate="visible"
            variants={btnVariants}
          >
            sign-out
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Header;
