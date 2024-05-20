import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className=" w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex gap-2 items-center">
          <img src={user?.photoURL} alt="sign out" className="  w-10 h-10" />
          <button
            className=" bg-red-700 font-bold text-white p-2  rounded-lg"
            onClick={handleSignOut}
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
}
