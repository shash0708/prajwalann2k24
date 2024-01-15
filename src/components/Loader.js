import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Tracks from "./Tracks";
import Prize from "./Prize";
import AllCollapseExample from "./Faq";
import Contact from "./Contact";
import Popup from "./Popup";
import './css/loadaer.css'
function Loader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 4300);
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
          <Popup />
          <section>
            <About />
          </section>
          <Tracks />
          <Prize />
          <AllCollapseExample />
        </>
      )}
    </div>
  );
}

export default Loader;
