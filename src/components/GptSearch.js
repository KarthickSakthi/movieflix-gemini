import React from "react";
import { GptSearchBar } from "./GptSearchBar";
import { GptMovieSuggestion } from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE_SIGNIN } from "../constants";

export function GptSearch(){
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
           <GptSearchBar />
           <GptMovieSuggestion />
         </div>
       </>
     );
}