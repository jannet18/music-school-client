import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [miniMenu, setMiniMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleMini = () => {
    setMiniMenu(!miniMenu);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center text-[#f8f8f8] p-3">
          <div className="flex flex-col">
            <h2 className="uppercase font-bold text-3xl">Music Lessons</h2>
            <span className="uppercase text-xl">E-Learning</span>
          </div>
          <div className="flex space-x-2">
            <a href="#">
              <FaInstagram className="h-8 w-8 border rounded-full p-1.5 text-[#20b2a6] bg-gray-300" />
            </a>
            <a href="#">
              <FaFacebookF className="h-8 w-8 border rounded-full p-1.5 text-[#20b2a6] bg-gray-300" />
            </a>
            <a href="#">
              <FaXTwitter className="h-8 w-8 border rounded-full p-1.5 text-[#20b2a6] bg-gray-300" />
            </a>
            <a href="#">
              <CiYoutube className="h-8 w-8 border rounded-full p-1.5 text-[#20b2a6] bg-gray-300" />
            </a>
            <a href="#">
              <FaTiktok className="h-8 w-8 border rounded-full p-1.5 text-[#20b2a6] bg-gray-300" />
            </a>
          </div>
        </div>
      </div>
      <nav className="">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex ">
                  <a href="#" className="py-5 px-3  text-[#f8f8f8]">
                    Home
                  </a>
                  <a href="#" className="py-5 px-3  text-[#f8f8f8]">
                    About
                  </a>
                  <a href="#" className="py-5 px-3 text-[#f8f8f8]">
                    News
                  </a>
                  <a href="#" className="py-5 px-3  text-[#f8f8f8]">
                    pages
                  </a>
                  <a href="#" className="py-5 px-3  text-[#f8f8f8]">
                    Contacts
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-3 mb-1">
              <input
                type="text"
                placeholder="Search"
                className="border-none outline-none rounded-sm p-2 text-gray-600"
              />
            </div>
            <div className="md:hidden flex items-center">
              <button type="button" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu here */}
        {showMenu && (
          <div className="text-[#f8f8f8]">
            <a href="#" className="block py-2 px-4 text-sm">
              Home
            </a>
            <a href="#" className="block py-2 px-4 text-sm">
              About
            </a>
            <a href="#" className="block py-2 px-4 text-sm">
              News
            </a>
            <a href="#" className="block py-2 px-4 text-sm">
              Pages
            </a>
            <a href="#" className="block py-2 px-4 text-sm">
              Contacts
            </a>
          </div>
        )}
      </nav>
      <div className="md:flex flex-row  space-x-3 space-y-10 p-10">
        <div className="space-y-3">
          <h1 className="uppercase font-semibold text-xl">
            Welcome to Music School
          </h1>
          <p className="capitalize font-bold flex flex-col">
            Best Online Education <span>Expertise</span>
          </p>
          <p className="whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus libero reprehenderit harum quibusdam facilis est.
          </p>
          <div className="flex space-x-4">
            <div className="">
              <button
                type="button"
                className="bg-[#20b2a6] flex items-center rounded-sm gap-2 p-2 uppercase font-bold"
              >
                Get Started Now
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="bg-white text-[#20b2a6] flex items-center gap-2 p-2 uppercase font-bold "
              >
                View Courses
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-2 ">
            <img
              src="https://media.istockphoto.com/id/1468830962/photo/attractive-young-female-university-student-using-a-laptop-while-studying.webp?b=1&s=170667a&w=0&k=20&c=2xaFv1MhGVNz9gkTgPoAmokrGZwxDsMTO9WqyZ03TkI="
              alt=""
              className="w-full object-cover"
            />
            <span>Learn with Experts</span>
            <span>Pursue your passions</span>
            <span>Maximise your Potential</span>
          </div>
          <button
            className="bg-[#20b2a6] p-2 rounded-sm uppercase text-sm font-bold mt-2 cursor-pointer hover:bg-[#bdd9dd]"
            type="button"
          >
            Book Lessons
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
