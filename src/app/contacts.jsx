'use client'

import { useRouter } from "next/navigation"

export default function Contact() {
    const router = useRouter()

    return (
        <div className="flex md:flex-row flex-col md:gap-3 gap-2 justify-end mt-5 md:mt-3 w-full ">
            <div className="flex flex-row justify-end gap-3 items-center">
                <img onClick={() => router.push("https://www.linkedin.com/in/christianlee-lunaba-72229025b/")} 
                className="cursor-pointer hover:translate-y-[-5px] opacity-70 hover:opacity-100 duration-100" src="\icons\linkedIn.svg"></img>
                <img onClick={() => router.push("h  ttps://github.com/LunabaLeeris?tab=repositories")} 
                className="cursor-pointer hover:translate-y-[-5px]  opacity-70 hover:opacity-100 duration-100" src="\icons\github.svg"></img>
            </div>
            <div onClick={() => router.push("https://www.linkedin.com/in/christianlee-lunaba-72229025b/")}  className="flex flex-row gap-2 justify-end cursor-pointer">
                <img className="hover:translate-y-[-5px]  opacity-70 hover:opacity-100 duration-100"
                 src="\icons\download.svg"></img>   
                <p className="text-zinc-400">Resume</p>
            </div>
            <div className="flex flex-row gap-2 justify-end">
                <img className="opacity-80" src="\icons\call.svg"></img>
                <p className="text-zinc-400">+63-916-707-9075</p>
            </div>
            <div className="flex flex-row gap-2 justify-end">
                <img className="opacity-80" src="\icons\sms.svg"></img>
                <p className="text-zinc-400">Lunabachristianlee@gmail.com</p>
            </div>  
        </div>
    )
}