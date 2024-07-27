export default async function Home() {
  return (
    <section className="flex flex-wrap py-[100px] h-fit bg-transparent items-center">
      <div className="w-full lg:w-1/3 lg:block hidden opacity-70 bg-black hover:opacity-100 duration-100">
        <img src="\techs.svg"></img>
      </div>
      <div className="w-full flex-col flex gap-20 lg:w-2/3">
        <p className="text-white font-thin text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-right" id="quote">SHOOT FOR THE SKY THE STARS ARE WAITING</p>
        <div>
          <p className="text-highlight text-right" >CHRISTIAN LEE LUNABA</p>
          <p className="text-white text-right white-glow" id="description">FULL STACK | APP DEV | WEB SCRAPING | UI/UX | MACHINE LEARNING/AI  </p>
        </div>
      </div>
    </section>
  );
}  