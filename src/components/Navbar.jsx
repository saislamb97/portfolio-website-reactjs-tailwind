import React from 'react'

export default function Navbar() {
  let url = ""
  return (
    <div className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Saiful Islam</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href={url}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
    </div>
  )
}
