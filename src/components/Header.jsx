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
      {/* <div className="bg-white">
        <div className="max-w-7xl mx-auto flex justify-around p-1">
          <button onClick={toggleMini}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
          {miniMenu && (
            <>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 border rounded-full p-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span>0713000000</span>
                    <span>0713000000</span>
                  </div>
                </button>
                <div className="flex items-center space-x-2 ">
                  <button className="flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 border rounded-full p-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col">
                    <span>P.O, Box 1212</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 md:hidden">
                <button
                  type="button"
                  className="bg-blue-600 p-1.5 rounded-md text-white"
                >
                  Book
                </button>

                <button
                  type="button"
                  className="bg-yellow-full0 p-1.5 rounded-md text-white"
                >
                  Volunteer
                </button>

                <button
                  type="button"
                  className="bg-red-400 p-1.5 rounded-md text-white"
                >
                  Donate
                </button>
              </div>
            </>
          )}
        </div>
        <div>
          <div className="md:hidden">
            <div className="flex flex-col items-center space-x-4">
              <button className="flex items-center space-x-2 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 border rounded-full p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <div className="flex flex-col">
                  <span>0713000000</span>
                  <span>0713000000</span>
                </div>
              </button>
              <div className="flex items-center space-x-2 md:hidden">
                <button className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 border rounded-full p-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </button>
                <div className="flex flex-col">
                  <span>P.O, Box 1212</span>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            {miniMenu && (
              <div className="flex flex-col items-center space-x-3">
                <button
                  type="button"
                  className="bg-blue-600 p-1.5 rounded-md text-white"
                >
                  Book
                </button>

                <button
                  type="button"
                  className="bg-yellow-full0 p-1.5 rounded-md text-white"
                >
                  Volunteer
                </button>

                <button
                  type="button"
                  className="bg-red-400 p-1.5 rounded-md text-white"
                >
                  Donate
                </button>
              </div>
            )}
          </div>
        </div>
      </div> */}
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
              {/* <FiYoutube /> */}
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
                {/* <a href="#" className="flex items-center py-3 px-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mr-1 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                    />
                  </svg>
                  <span>Music School</span>
                </a> */}
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
