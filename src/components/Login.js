import { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, FIREBASE_AUTH_ERROR_CODES } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR, BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("")


  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    //validate form data
    const name = !isSignInForm ? nameRef.current.value : "";
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const errorMsg = checkValidData(isSignInForm, name, email, password);
    setErrorMsg(errorMsg);

    if (errorMsg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateAuthProfile(user, name);
        })
        .catch((error) => {
          setLoginErrorMsg(error);
        });
    }
    else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          setLoginErrorMsg(error);
        });
    }
  }

  const updateAuthProfile = (user, name) => {
    updateProfile(user, {
      displayName: name,
      photoURL: USER_AVATAR,
    }).then(() => {
      dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL }));

      console.log("Profile updated successfully");
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });

  }

  const setLoginErrorMsg = (error) => {
    const errorCode = error.code;
    console.log(errorCode);
    if (errorCode === FIREBASE_AUTH_ERROR_CODES.CREDENTIAL_ALREADY_IN_USE ||
      errorCode === FIREBASE_AUTH_ERROR_CODES.EMAIL_EXISTS) {
      setErrorMsg("Email already exists. Please use a different email.");
      return;
    }
    else if (errorCode === FIREBASE_AUTH_ERROR_CODES.INVALID_LOGIN_CREDENTIALS) {
      setErrorMsg("Invalid Credentails.");
      return;
    }
    else {
      setErrorMsg("An unexpected error occurred. Please try again later.");
      console.error("Error during authentication: ", error.code + " - " + error.message);
      return;
    }
  }


  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            alt="background-image"
            src={BACKGROUND_IMAGE}
          />
        </div>
        <form className="w-3/12 absolute p-8 bg-black my-32 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
          <h1 className="font-bold text-3xl py-4 m-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && <input
            type="text"
            ref={nameRef}
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-600 rounded-lg"
          />}
          <input
            type="text"
            ref={emailRef}
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-600 rounded-lg"
          />

          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            className="p-2 my-4 w-full bg-gray-600 rounded-lg"
          />
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {!isSignInForm
              ? "Already registered? Sign In Now"
              : "New to Netflix? Sign Up Now"}{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
