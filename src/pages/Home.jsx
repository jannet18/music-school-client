import React from "react";
import Header from "../components/Header";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#82abae] text-[#f8f8f8]">
      <Header />
      <Courses />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
// #048A81
// #0F7173
// #00CC99
