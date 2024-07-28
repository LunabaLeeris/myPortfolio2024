import Image from "next/image";
import Contact from "./contacts";

export default async function Home() {
  return (
    <section className="flex flex-wrap py-[100px] h-fit bg-transparent items-center">
      <div className="w-full lg:w-1/3 lg:block hidden opacity-70 bg-black hover:opacity-100 duration-100">
        <Image alt="Technologies Used" width={634} height={501} src="\techs.svg"></Image>
      </div>
      <div className="w-full flex-col flex gap-20 lg:w-2/3">
        <p className="text-white font-thin text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-right" id="quote">SHOOT FOR THE SKY THE STARS ARE WAITING</p>
        <div>
          <p className="text-highlight text-right">CHRISTIAN LEE LUNABA</p>
          <p className="text-white text-right white-glow" id="description">MACHINE LEARNING/AI | FULL STACK | WEB SCRAPING | UI/UX  </p>
          <Contact></Contact>
        </div>
      </div>
    </section>
  );
}  