import AboutMe from "./components/Pages/AboutMe"
import Skills from "./components/Pages/Skills"
import Links from "./components/raw/Links"
import { Element } from 'react-scroll';
import Navbar from "./components/raw/Navbar";
import Project from "./components/raw/Project";
import Lists from "./components/Pages/Lists";
import ImprovedContactForm from "./components/Pages/Contact";




function App() {
  return (
    <div className="flex flex-col h-full max-w-full  overflow-x-hidden gap-10" >
      <Navbar/>
      <Element className="w-full h-full flex flex-col" name="About">
        <AboutMe />
      </Element>

      <Links/>
      <Element className="w-full h-full flex flex-col" name="Skills">
        <Skills />
      </Element>
      <Element className="w-full h-screen flex flex-col justify-center " name="Projects">
        <Project />
      </Element>
      <Element className="w-full h-screen flex flex-col justify-center " name="Experience">
        <Lists />
      </Element>
      <Element className="w-full h-screen flex flex-col justify-center " name="Contact">
        <ImprovedContactForm />
      </Element>
    </div>
  )
}

export default App
