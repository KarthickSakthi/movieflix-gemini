import React from "react";

export function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-24 bg-gradient-to-r from-black">
      <h1 className="text-white text-left text-6xl text-bold">{title}</h1>
      <p className="text-left  text-white py-6 text-lg w-1/4">{overview} </p>
      <div className="flex gap-4">
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}
