import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import AboutUspage from './AboutUspage';
import Services from './Services';
import OurPortfolio from './OurPortfolio'
import OurProductPage from "./OurProductPage"
import Career from './Career';
import Client from './Client';
import BlogPage from './BlogPage';
import ContactUsPage from './ContactUsPage'
import Error404 from './Error404';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutUspage />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<OurPortfolio />} />
      <Route path="product" element={<OurProductPage />} />
      <Route path="career" element={<Career />} />
      <Route path="clients" element={<Client />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="contact" element={<ContactUsPage />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
