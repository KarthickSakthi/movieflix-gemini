import React, { useState, useRef, useEffect } from "react";
import { Header } from "./Header";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";

const FORM_TYPE = {
  SIGN_IN: "Sign In",
  SIGN_UP: "Sign Up",
};

export function Login() {
  const navigate = useNavigate();
  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef({});
  const passwordRef = useRef({});
  const nameRef = useRef({});

  function toggleSignin() {
    setIsSignin(!isSignin);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const formValidateData = isSignin
      ? validateFormData(emailRef.current.value, passwordRef.current.value)
      : validateFormData(
          emailRef.current.value,
          passwordRef.current.value,
          nameRef.current.value,
          !isSignin
        );
    console.log({ formValidateData });
    setErrorMessage(formValidateData);
    if (formValidateData) return;

    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log({ user });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("logged in user: ", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    }
  }

  useEffect(
    function onFormTypeChange() {
      setErrorMessage("");
      emailRef.current.value = "";
      passwordRef.current.value = "";
      nameRef.current.value = "";
    },
    [isSignin]
  );

  const formType = isSignin ? FORM_TYPE.SIGN_IN : FORM_TYPE.SIGN_UP;
  return (
    <div className="relative h-full w-full">
      <Header />
      <div className="w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg"
          alt="login background"
          className="w-full h-[100vh]"
        />
      </div>
      <form className="flex flex-col justify-start bg-black p-12 w-3/12  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-85">
        <h1 className=" text-white text-3xl text-start m-2 my-4 ">
          {formType}
        </h1>
        {!isSignin && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full"
            ref={nameRef}
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-2 m-2 w-full"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 m-2 w-full"
          ref={passwordRef}
        />

        <button
          className="p-2 m-2 my-4 bg-red-700 w-full"
          onClick={handleFormSubmit}
        >
          {formType}
        </button>
        {errorMessage && (
          <p className=" text-red-500 text-sm text-start p-2">{errorMessage}</p>
        )}
        <div className="m-2 my-6 flex flex-row gap-2">
          <p className="text-white  text-sm">
            {isSignin ? "No Account?" : "Already registered!"}
          </p>
          <p className=" text-blue-500 text-sm" onClick={toggleSignin}>
            {isSignin ? FORM_TYPE.SIGN_UP : FORM_TYPE.SIGN_IN}
          </p>
        </div>
      </form>
    </div>
  );
}
