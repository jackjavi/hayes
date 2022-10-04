import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="h-full">
      <NavBar />
      <Header />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
