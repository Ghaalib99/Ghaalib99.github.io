import Banner from "./Banner/Banner"
import About from "./About/About"
import Skills from "./Skills/Skills"
import Projects from "./Projects/Projects"
import Services from "./Services/Services"
import Contact from "./Contact/Contact"
import Example from "./Example"

const Main = () => {
  return (
    <div className="w-4/5 relative" style={{left:'20%'}}>
        <Banner />
        <About />
        {/* <Skills /> */}
        <Projects />
        <Services />
        <Contact />
    </div>
  )
}

export default Main