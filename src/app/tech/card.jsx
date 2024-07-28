'use client'

import Image from "next/image"
import { useRef } from "react"

export default function Card({ image, title, description }) {
    const card = useRef()

    const rotate = (e) => {
        card.current.classList.toggle("rotatey-180")
    }

    return (
        <div className="cursor-pointer h-64 relative">
            <div onClick={rotate} className="card-border absolute w-full h-full the-card" ref={card}>
                <div className="absolute w-full h-full content-center backface-hidden">
                    <div className="flex flex-col items-center opacity-70 hover:opacity-100 duration-75 gap-3">
                        <Image alt="card image logo" width={96} height={96} src={image}></Image>
                        <p className="text-zinc-400 font-light">{title}</p>
                    </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotatey-180 p-4">
                    {
                        description.map((s, i) => {  
                            return <p key={i} className="text-zinc-400 text-sm font-light mt-3">{s}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}