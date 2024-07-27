'use client'
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

export default function Nav() {
    const [icon, setIcon] = useState("burger")
    const router = useRouter()
    const navLinkSm = useRef()
    const navLinkLg = useRef()

    const menu = () => {
        if (icon == "burger") {
            setIcon(() => "remove")
            navLinkSm.current.classList.remove('right-[-100%]')
            navLinkSm.current.classList.add('right-1')
            navLinkLg.current.classList.add('md:flex')
            navLinkLg.current.classList.remove('left-[1000px]')
            navLinkLg.current.classList.add('left-[-100px]')
        }
        else {
            setIcon(() => "burger")
            navLinkSm.current.classList.add('right-[-100%]')
            navLinkSm.current.classList.remove('right-1')
            navLinkLg.current.classList.remove('md:flex')
            navLinkLg.current.classList.add('left-[1000px]')
            navLinkLg.current.classList.remove('left-[-100px]')
        }
    }

    return (
        <nav className="w-auto bg-transparent h-20 flex flex-row justify-between md:px-28 px-10 pt-10 md:items-center">
            <div>
                <p onClick={() => router.push("/")}  className="text-highlight text-lg cursor-pointer select-none"><b>CLL</b></p>
            </div>
            <div className={`min-h-[100vh] duration-200 md:w-auto w-44 absolute md:min-h-fit md:p-0 pr-10
                 md:static right-[-100%] top-24 bg-opacity-85 bg-black md:text-left text-right z-50`} ref={navLinkSm}>
                <ul className="flex md:flex-row flex-col gap-10 content-center">
                    <li>
                        <p onClick={() => router.push("/tech")} className="nav-text">TECH</p>
                    </li>
                    <li>
                        <p onClick={() => router.push("/projects")}  className="nav-text">PROJECTS</p>
                    </li>
                    <li>
                        <p onClick={() => router.push("/about")}  className="nav-text">ABOUT</p>
                    </li>
                    <li className="block md:hidden">
                        <p onClick={() => router.push("/experience")}  className="nav-text">EXPERIENCE</p>
                    </li>
                    <li className="block md:hidden">
                        <p onClick={() => router.push("/education")}  className="nav-text">EDUCATION</p>
                    </li>
                    <li className="block md:hidden">
                        <p onClick={() => router.push("/achievement")}  className="nav-text">ACHIEVEMENT</p>
                    </li>
                    <div className="md:block hidden relative w-[25px]">
                        <img src={`\\icons\\${icon}.svg`} onClick={menu} className="cursor-pointer"></img>
                        <ul className="absolute left-[1000px] flex-col py-2 px-5 bg-opacity-90 rounded-sm bg-black 
                        text-right gap-5 mt-5 duration-75 hidden" ref={navLinkLg}>
                            <li className="hidden md:block">
                                <p onClick={() => router.push("/experience")}  className="nav-text">EXPERIENCE</p>
                            </li>
                            <li className="hidden md:block">
                                <p onClick={() => router.push("/education")}  className="nav-text">EDUCATION</p>
                            </li>
                            <li className="hidden md:block">
                                <p onClick={() => router.push("/achievement")}  className="nav-text">ACHIEVEMENT</p>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
            <img src={`\\icons\\${icon}.svg`} onClick={menu} className="md:hidden duration-300 cursor-pointer"></img>
        </nav>
    )
}