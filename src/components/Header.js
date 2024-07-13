import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice.js";
import { LOGO, SUPPORTED_LANGUAGES } from "../constants.js";
import { toggleGeminiSearchView } from "../store/geminiSlice.js";
import { changeLanguage } from "../store/configSlice.js";
export function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGeminiSearch = useSelector((store) => store.gemini.showGeminiSearch);
  const dispatch = useDispatch();
  useEffect(function listenAuthChange() {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  function handleGeminiSearch() {
    dispatch(toggleGeminiSearchView());
  }

  function handleLanguageChange(event) {
    dispatch(changeLanguage(event.target.value));
  }
  return (
    <div className=" absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img className=" w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex gap-2 items-center justify-between">
          {showGeminiSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGeminiSearch}
          >
            {showGeminiSearch ? "Home Page" : "GEMINI Search"}
          </button>
          <button
            className=" bg-red-700 font-bold text-white p-2  rounded-lg"
            onClick={handleSignOut}
          >
            (Sign out)
          </button>
          <img
            src={user?.photoURL}
            alt="sign out"
            className="hidden md:block w-12 h-12"
          />
        </div>
      )}
    </div>
  );
}
