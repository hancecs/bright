import React from "react";
import Navbar from "./components/homepage/Navbar";
import Hero from "./components/homepage/Hero";
import Map from "./components/homepage/Map";
// import ImageGallery from "./components/ImageGallery";

import './App.css';
import { CanvasRevealEffectDemo } from "./components/homepage/Cards";
import { AppleCardsCarousel } from "./components/homepage/AppleCards";
import Testimonial from "./components/homepage/testimonial";
import Footer from "./components/homepage/footer";



const App = () => {
  return (
    <>
      {/* Homepage Section */}
      <div className="homepage">
        <Navbar />
        <Hero />
        <Map />
        <CanvasRevealEffectDemo />
        <div className="bg-black">
          <AppleCardsCarousel />
        </div>
        <Testimonial />
        <Footer />
      </div>

      <div id="netwroks">

      </div>

    </>
  );
};

export default App;
