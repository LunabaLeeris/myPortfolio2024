'use client'

import { useRef } from "react"

export default function Card() {
    const card = useRef()
    
    const rotate = (e) => {
        card.current.classList.toggle("rotatey-180")
    }

    return (
        <div className="cursor-pointer h-[250px] relative">
            <div onClick={rotate} className="skillCard absolute w-full h-full the-card" ref={card}>
                <div className="absolute w-full h-full content-center backface-hidden">
                    <div className="flex flex-col items-center opacity-70">
                        <img className="w-28" src="\skills\python.png"></img>
                        <p className="text-zinc-400 font-light">PYTHON</p>
                    </div>
                </div>
                <div className="absolute w-full content-center h-full backface-hidden rotatey-180">
                    <div className="flex flex-col items-center opacity-70">
                        <p className="text-zinc-400 font-light">HELLO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}