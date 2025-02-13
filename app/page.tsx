import About from "./components/About/About";
import Hero from "./components/Hero-section/Hero";
import Project from "./components/Project/Project";

export default function Home(){
  return(
    <div className="max-h-full max-w-full flex flex-col items-center justify-center ">
      <div className=" w-full h-40 mt-32 flex items-center justify-center" id="Home">
      <Hero />
    </div>
    <div className="flex w-full items-center flex-col mt-64" id="About">
      <About />
    </div>
    <div className="flex items-center flex-col w-full mt-20" id="Projects">
      <h1 className="text-3xl font-extrabold p-2">PROJECTS</h1>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      
      <Project image="/Images/comforty.png" link="https://sanity-comforty.vercel.app/"/>
      <Project image="/Images/exclusive.png" link="https://exclusive-shop-2-0.vercel.app/"/>
      <Project image="/Images/blog.png" link="https://blog-web-20.vercel.app/"/>
      <Project image="/Images/fashion.png" link="https://fashion-shop-sepia.vercel.app/"/>
      <Project image="/Images/amazon.png" link="https://amazon-clone-j3fv.vercel.app/"/>
      <Project image="/Images/resume.png" link="https://hackathon-milestone-500.vercel.app/"/>
      <Project image="/Images/weather.png" link="https://weather-app-typescript-theta.vercel.app/"/>
      <Project image="/Images/dice.png" link="https://dice-game-react-two.vercel.app/"/>
      
    </div>
    </div>
    </div>
  )
}