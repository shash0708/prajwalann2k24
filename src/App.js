import Navbar from "./components/Navbar";
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
      <section>
        <Navbar />
      
        <Home />

        <Hackathon />

      </section>
      {/* <section>
        <About />
      </section> */}
      {/* <section>
        <Hackathon />
      </section> */}
      <section>
        <Tracks />
      </section>
      <section>
        <Prize />
      </section>
      
      <section>
        
        <AllCollapseExample />
      </section> 
    </div>
  );
}
