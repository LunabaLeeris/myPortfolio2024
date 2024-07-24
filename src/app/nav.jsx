'use client'
import Link from "next/link"
import { useRef, useState } from "react"

export default function Nav() {
    const [icon, setIcon] = useState("burger")
    const navLink = useRef()

    const menu = () => {
        if (icon == "burger") {
            setIcon(() => "remove")
            navLink.current.classList.toggle('right-0')
        }
        else {
            setIcon(() => "burger")
            navLink.current.classList.toggle('right-0')
        }
    }

    return (
        <nav className="w-auto bg-black h-20 flex flex-row justify-between md:px-28 px-10 pt-10 md:items-center">
            <div>
                <Link href="/" className="text-highlight text-lg font-semibold">CLL</Link>
            </div>
            <div className={`min-h-[100vh] duration-500 md:w-auto w-44 absolute md:min-h-fit md:p-0 pr-10
                 md:static right-[-100%] top-24 bg-none backdrop-blur-sm  md:text-left text-right`} ref={navLink}>

                <ul className="flex md:flex-row flex-col gap-10">
                    <li>
                        <Link href="/skills" className="nav-text">SKILLS</Link>
                    </li>
                    <li>
                        <Link href="/" className="nav-text">PROJECTS</Link>
                    </li>
                    <li>
                        <Link href="/" className="nav-text">EXPEREINCE</Link>
                    </li>
                    <li>
                        <Link href="/" className="nav-text">EDUCATION</Link>
                    </li>
                </ul>
            </div>
            <img src={`\\icons\\${icon}.svg`} onClick={menu} className="md:hidden duration-300 cursor-pointer"></img>
        </nav>
    )
}