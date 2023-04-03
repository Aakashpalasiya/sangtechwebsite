import React from "react";
import OurFeatures from "./Components/Home/OurFeatures";
import Product from "./Components/Home/Product";
import ContactUs from "./Components/Home/ContactUs";
import About from "./Components/Home/About";
import Carosoul from "./Components/Home/Carosoul";
import LayOutComponent from "./LayOutComponent";

function HomePage() {
  return (
    <LayOutComponent>
    <Carosoul/>
    <About/>
    <Product/>
    <OurFeatures/>
    <ContactUs/>
    </LayOutComponent>
  );
}

export default HomePage;
