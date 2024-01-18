import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Organizer from "./Organizer";
import About1 from "./About1";
import Tracks from "./Tracks";
import Prize from "./Prize";
import AllCollapseExample from "./Faq";
import Faculty from "./Faculty";
import Popup from "./Popup";
import './css/loadaer.css'
import Hackathon from "./Hackathon";
function Loader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="loader-container">
      {loading ? (
        <div className="loader-wrapper">
          <HashLoader id="we" color={"#36d7b7"} loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          {/* <Popup /> */}
        
            {/* <About1 /> */}
          
          <About />
          {/* <Hackathon/> */}
          <Organizer/>
          {/* <section>
            <About1/>
          </section> */}
          
          <Tracks />
          <Prize />
          <AllCollapseExample />
          <Faculty/>
        </>
      )}
    </div>
  );
}

export default Loader;
