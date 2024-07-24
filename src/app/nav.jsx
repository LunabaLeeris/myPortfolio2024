'use client'

import { useRef, useState } from "react"

export default function Nav() {
    const [icon, setIcon] = useState("burger")
    const navLink = useRef()

    const menu = () => {
        if (icon == "burger") {
            setIcon(() => "remove")
            navLink.current.classList.toggle('right-2')
        }
        else {
            setIcon(() => "burger")
            navLink.current.classList.toggle('right-2')
        }
    }

    return (
        <nav className="w-screen bg-black h-20 flex flex-row justify-between md:px-28 px-10 pt-10 md:items-center">
            <div>
                <span className="text-highlight text-lg font-semibold">CLL</span>
            </div>
            <div className={`min-h-[100vh] duration-500 md:w-auto w-44 absolute md:min-h-fit md:p-0 pr-4
                 md:static right-[-100%] top-24 bg-none backdrop-blur-sm  md:text-left text-right`} ref={navLink}>

                <ul className="flex md:flex-row flex-col gap-10">
                    <li>
                        <a href="#" className="nav-text">SKILLS</a>
                    </li>
                    <li>
                        <a href="#" className="nav-text">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#" className="nav-text">EXPEREINCE</a>
                    </li>
                    <li>
                        <a href="#" className="nav-text">EDUCATION</a>
                    </li>
                </ul>
            </div>
            <img src={`\\icons\\${icon}.svg`} onClick={menu} className="md:hidden duration-300 cursor-pointer"></img>
        </nav>
    )
}