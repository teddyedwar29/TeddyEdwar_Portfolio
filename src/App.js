import Navbar from "./scenes/Navbar";
import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient"
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage,setSelectedPage] = useState('home');
  const [isTopOfPage,setIsTopOfPage] = useState(true);
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");

useEffect(() => {
  const handleScroll =  () => {
    if (window.scrollY === 0) setIsTopOfPage(true);
    if (window.scrollX !== 0) setIsTopOfPage(false);
  }
  window.addEventListener("scroll",handleScroll);
  return () => window.removeEventListener("scroll", handleScroll)
},[])

  return (
    <div className="app bg-blue-950">
      <Navbar isTopOfPage={isTopOfPage} selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediaScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills/>
      </div>
   
      <div className="w-5/6 mx-auto ">
        <Projects/>
      </div>
      
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <Contact/>
      </div>
      <div>
        <br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
