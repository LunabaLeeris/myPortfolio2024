'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Contact() {
    const router = useRouter()

    return (
        <div className="flex md:flex-row flex-col md:gap-3 gap-2 justify-end mt-5 md:mt-3 w-full text-sm">
            <div className="flex flex-row justify-end gap-3 items-center">
                <Image alt="Linked In Logo" width={16} height={16} onClick={() => router.push("https://www.linkedin.com/in/christianlee-lunaba-72229025b/")}
                    className="cursor-pointer hover:translate-y-[-5px] opacity-70 hover:opacity-100 duration-100" src="\icons\linkedIn.svg"></Image>
                <Image alt="Github Logo" width={16} height={16} onClick={() => router.push("https://github.com/LunabaLeeris?tab=repositories")}
                    className="cursor-pointer hover:translate-y-[-5px]  opacity-70 hover:opacity-100 duration-100" src="\icons\github.svg"></Image>
            </div>
            <a href="\CLL-RESUME.pdf" className="flex flex-row gap-2 justify-end" download>
                <Image alt="Download Resume Logo" width={16} height={16} className="cursor-pointer hover:translate-y-[-5px]  opacity-70 hover:opacity-100 duration-100"
                    src="\icons\download.svg"></Image>
                <p className="cursor-pointer text-zinc-400">Resume</p>
            </a>
            <div className="flex flex-row gap-2 justify-end">
                <Image alt="Call Logo" width={16} height={16} className="opacity-80" src="\icons\call.svg"></Image>
                <p className="text-zinc-400">+63-916-707-9075</p>
            </div>
            <div className="flex flex-row gap-2 justify-end">
                <Image alt="SMS Logo" width={16} height={16} className="opacity-80" src="\icons\sms.svg"></Image>
                <p className="text-zinc-400">Lunabachristianlee@gmail.com</p>
            </div>
        </div>
    )
}