import React from "react";
import { GeminiSearchBar } from "./GeminiSearchBar";
import { GeminiMovieSuggestion } from "./GeminiMovieSuggestion";
import { BACKGROUND_IMAGE_SIGNIN } from "../constants";

export function GeminiSearch() {
  return (
    <>
      <div className=" fixed -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BACKGROUND_IMAGE_SIGNIN}
          alt="logo"
        />
      </div>
      <div className="">
        <GeminiSearchBar />
        <GeminiMovieSuggestion />
      </div>
    </>
  );
}
