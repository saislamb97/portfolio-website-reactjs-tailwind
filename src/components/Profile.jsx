import React from 'react'
import avatar from "../assets/avatar.png"

export default function Profile() {
  return (
    <div className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
         <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Saiful Islam
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I use React.js and Node.js to develope full stack web app
            </p>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <img src={avatar} alt="profilepic"/>
            </div>
    </div>
  )
}
