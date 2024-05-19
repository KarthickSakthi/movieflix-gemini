import React from "react";

export function Header() {
  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className=" w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div className="flex gap-2 items-center">
        <img
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt="sign out"
          className="  w-10 h-10"
        />
        <button className=" bg-red-700 font-bold text-white p-2  rounded-lg">(Sign out)</button>
      </div>
    </div>
  );
}
