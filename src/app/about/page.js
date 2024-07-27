export default function About() {
    return (
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-white mt-16 text-2xl w-full text-center">ABOUT ME</h1>
            <div className="w-40 h-40 overflow-hidden border-zinc-700 border-[3px] bg-black rounded-full">
                <img className="object-fit" src="\profile.png"></img>
            </div>
            <div className="w-5/6 md:w-4/6">
                <p className="text-zinc-400 text-base font-light mt-3">
                    Hi! I'm <b className="text-highlight">Christian Lee Lunaba</b>.
                    I am currently a 3rd year, BS-CS student at National University-Manila
                    specializing in Machine Learning.
                </p>
                <p className="text-zinc-400 text-base font-light mt-3">
                    I am knowledgeable in multiple fields, especially <b className="text-highlight">Web/Game Development</b>, 
                    <b className="text-highlight">Data Scraping</b>, <b className="text-highlight"> Data Science</b>
                    , <b className="text-highlight">Machine learning</b>, <b className="text-highlight">UI/UX </b>
                    and <b className="text-highlight">Database Management</b>.
                </p>
                <p className="text-zinc-400 text-base font-light mt-3">
                    Above all, I have a keen interest in <b className="text-highlight">Mathematics</b> and have competed regionally and nationally.
                    I also participate in <b className="text-highlight">hackathons</b>, and <b className="text-highlight">competitive programming</b> tournaments. 
                </p>
                <p className="text-zinc-400 text-base font-light mt-3">
                    Beside all of these, I have a passion in music! In fact I am part of a band.
                </p>
            </div>
        </div>
    )
}