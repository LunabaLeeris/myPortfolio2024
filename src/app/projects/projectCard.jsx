'use client'

import { useRef } from "react"

export default function Card({title, images, descriptions}) {
    const wrapper = useRef()
    const description = useRef()
    const durations = ["slow", "medium", "fast"]

    const slide = "slide-" + durations[(title.charCodeAt(0) * title.charCodeAt(1))%durations.length]

    const toggleAnimation = () => {
        wrapper.current.classList.toggle(slide)
        description.current.classList.toggle("card-dsc-visible")
    }

    return (
        <div onMouseEnter={toggleAnimation} onMouseLeave={toggleAnimation} className="card-container h-[500px] card-border cursor-pointer" >
            <div className={"flex-row flex w-full relative"} ref={wrapper}>
                {
                    images.map((p, i) => <img className={"object-cover " + slide} key={i} src={p}></img>)
                }
            </div>
            <div className="bg-black bg-opacity-85 card-description p-4" ref={description}>
                <h1 className="text-white">{title}</h1>
                {
                    descriptions.map((s, i) => <p key={i} className="text-zinc-400 text-sm font-light mt-3">{s}</p>)
                }
            </div>
        </div>
    )
}