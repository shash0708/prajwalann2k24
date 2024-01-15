import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gay from "./components/Gay";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Hackathon from "./components/Hackathon";
import Prize from "./components/Prize";
import AllCollapseExample from "./components/Faq";
import Contact from "./components/Contact";
import Popup from "./components/Popup";
import "./App.css";

export default function App() {
  return (
    <div >
     
      <Navbar />  
       {/* <Gay/> */}
        <Home />
        <Popup/>
      <section>
        <About />
      </section>
     
      {/* <Hackathon /> */}
     
   
        <Tracks />
      
      
        <Prize />
    
      
      
        
        <AllCollapseExample />  
      
      {/* <Contact/> */}
    </div>
  );
}