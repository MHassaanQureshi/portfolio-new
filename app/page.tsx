import About from "./components/About/About";
import Hero from "./components/Hero-section/Hero";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";
import Education from "./components/Education/Education";
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
      
      <Project image="/images/comforty.png" link="https://sanity-comforty.vercel.app/"/>
      <Project image="/images/exclusive.png" link="https://exclusive-shop-2-0.vercel.app/"/>
      <Project image="/images/blog.png" link="https://blog-web-20.vercel.app/"/>
      <Project image="/images/fashion.png" link="https://fashion-shop-sepia.vercel.app/"/>
      <Project image="/images/amazon.png" link="https://amazon-clone-j3fv.vercel.app/"/>
      <Project image="/images/resume.png" link="https://hackathon-milestone-500.vercel.app/"/>
      <Project image="/images/weather.png" link="https://weather-app-typescript-theta.vercel.app/"/>
      <Project image="/images/dice.png" link="https://dice-game-react-two.vercel.app/"/>
      
    </div>
    <div className="flex items-center flex-col w-full mt-20" id="Skills">
      <h1 className="text-3xl font-extrabold p-2">SKILLS</h1>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-12 md:mt-10">
      <Skill link="/images/nextjs-icon.png" />
      <Skill link="/images/react.png" />
      <Skill link="/images/python.png" />
      <Skill link="/images/html.png" />
      <Skill link="/images/css-1.png" />
      <Skill link="/images/java-script.png" />
      <Skill link="/images/typescript.png" />
      <Skill link="/images/sanity.png" />
      <Skill link="/images/Tailwind.png" />
      <Skill link="/images/bootstrap.png" />
      
      </div>
    <div className="flex items-center flex-col w-full mt-20" id="Skills">
      <h1 className="text-3xl font-extrabold p-2">TOOLS I USE</h1>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-12 md:mt-10">
      <Skill link="/images/window.webp" />
      <Skill link="/images/github-2.png" />
      <Skill link="/images/streamlit.svg" />
      <Skill link="/images/vs.png" />
      <Skill link="/images/colab.svg" />
      <Skill link="/images/vercel.png" />
      
      </div>
      </div>

      <div className="flex items-center flex-col w-full mt-20" id="Education">
      <h1 className="text-3xl font-extrabold p-2">EDUCATION</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-12 md:mt-10 md:ml-[35%]">
      <Education />
      
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}
