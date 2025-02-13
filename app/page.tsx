import About from "./components/About/About";
import Hero from "./components/Hero-section/Hero";

export default function Home(){
  return(
    <div className="max-h-full max-w-full flex flex-col gap-96 items-center justify-center ">
      <div className=" w-full h-40 mt-32 flex items-center justify-center" id="Home">
      <Hero />
    </div>
    <div className="flex w-full items-center flex-col" id="About">
      <About />
    </div>
    </div>
  )
}