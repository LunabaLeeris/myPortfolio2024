'use client'

import { useRef } from "react"

export default function Card({ speed, title, images, descriptions }) {
    const wrapper = useRef()
    const description = useRef()

    const slide = "slide-" + speed

    const toggleAnimation = () => {
        wrapper.current.classList.toggle(slide)
        description.current.classList.toggle("card-dsc-visible")
    }

    return (
        <div onMouseEnter={toggleAnimation} onMouseLeave={toggleAnimation} className="card-container card-border cursor-pointer" >
            <div className={"card-wrapper " + slide} ref={wrapper}>
                {
                    images.map((p, i) => <img className="card-img" key={i} src={p}></img>)
                }
            </div>
            <div className="bg-black card-description p-4" ref={description}>
                <h1 className="text-white">{title}</h1>
                {
                    descriptions.map((s, i) => <p key={i} className="text-zinc-400 text-sm font-light mt-3">{s}</p>)
                }
            </div>
        </div>
    )
}