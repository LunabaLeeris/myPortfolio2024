'use client'

import { useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Card({ link, title, images, descriptions }) {
    const wrapper = useRef()
    const description = useRef()
    const durations = ["slow", "medium", "fast"]
    const router = useRouter()

    const slide = "slide-" + durations[(title.charCodeAt(0) * title.charCodeAt(1)) % durations.length]

    const toggleAnimation = () => {
        wrapper.current.classList.toggle(slide)
        description.current.classList.toggle("card-dsc-visible")
    }

    return (
        <div onClick={() => router.push(link)} onMouseEnter={toggleAnimation} onMouseLeave={toggleAnimation} className="card-container h-[500px] card-border cursor-pointer" >
            <div className={"flex-row flex w-[300%] h-[300px] relative"} ref={wrapper}>
                {   
                    images.map((p, i) =>
                        <div key={i} className={"w-[300%] h-[300px] relative " + slide}>
                            <Image alt="Project Image" src={p} fill className={"object-cover"}></Image>
                        </div>
                    )
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