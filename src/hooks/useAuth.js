import { useEffect } from "react";
import { auth } from "../config/firebaseSetup";
import useContextValue from "../data/ContextApi";
import { SET_USER } from "../varibles";

const useAuth = () => {
  // const { dispatch } = useContextValue();
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     user &&
  //       dispatch({
  //         type: SET_USER,
  //         user: {
  //           user_name: user?.displayName,
  //           user_email: user?.email,
  //           user_phone: user?.phoneNumber,
  //           user_photo: user?.photoURL,
  //         },
  //       });
  //   });
  // });

  return {};
};

export default useAuth;
