import Navbarr from "./components/Navbarr";
import Home from "./components/Home";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Hackathon from "./components/Hackathon";
import Prize from "./components/Prize";
import AllCollapseExample from "./components/Faq";
import "./App.css";

export default function App() {
  return (
    <div >
   
      <Navbarr />  
       
        <Home />
     
      {/* <section>
        <About />
      </section> */}
     
      <Hackathon />
     
   
        <Tracks />
      
      
        <Prize />
    
      
      
        
        <AllCollapseExample />  
      
    </div>
  );
}
