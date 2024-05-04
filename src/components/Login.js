import React from "react";
import { Header } from "./Header";

export function Login(){
    return(
        <div className="relative h-full w-full">
            <Header/>
            <div  className="w-full h-full">
            <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg"
            alt="login background"
            className="w-full h-[100vh]"
            />
            </div>
            <form className="flex flex-col justify-start bg-black p-12 w-3/12  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-85">
                <h1 className=" text-white text-3xl text-start m-2 my-4 ">Sign in</h1>
                <input type="text" placeholder="Email address" className="p-2 m-2 w-full"/>
                <input type="password" placeholder="password" className="p-2 m-2 w-full"/>
              
                <button className="p-2 m-2 my-4 bg-red-700 w-full">Sign In</button>
                <div className="m-2 my-6 flex flex-row gap-2">
            <p className="text-white  text-sm">Don't you have an account?</p><p className=" text-blue-500 text-sm">Sign Up</p>
            </div>
            </form>

            
        </div>
    )
}