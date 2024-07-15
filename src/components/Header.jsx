import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setDropdownMenu(!dropdownMenu);
  };

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
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
                  <div className="relative py-3 ">
                    <button
                      type="button"
                      className=" flex items-center hover:bg-white rounded-md py-2 px-1 hover:text-gray-800"
                      aria-expanded="false"
                      onClick={toggleDropdown}
                    >
                      <span>Pages</span>
                      <svg
                        className="text-gray-400 ml-2 w-4 h-4 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {dropdownMenu && (
                      <div className="absolute top-12 left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20">
                        <a href="#" className="block px-4 py-2 text-gray-800">
                          <MdDashboard className="inline-block mr-2 text-[#20b2a6]" />
                          Admin Dashboard
                        </a>
                        <a href="#" className="block px-4 py-2 text-gray-800">
                          <MdDashboard className="inline-block mr-2 text-[#20b2a6]" />
                          Teacher Dashboard
                        </a>
                        <a href="#" className="block px-4 py-2 text-gray-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="inline-block mr-2 h-5 w-5 text-[#20b2a6]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                            />
                          </svg>
                          Students
                        </a>
                        <a
                          href="/login"
                          className="block px-4 py-2 text-gray-800"
                        >
                          Sign Out
                        </a>
                      </div>
                    )}
                    {/* <div>
                      <div>
                        <a href="">Admin Dashboard</a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <a href="">Teacher Dashboard</a>
                        <MdDashboard />
                      </div>
                      <div>
                        <a href="">Students </a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                          />
                        </svg>
                      </div>
                    </div> */}
                  </div>
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
              Contacts
            </a>
            <div className="relative px-1">
              <button
                type="button"
                className="py-1.5 px-4 text-sm text-[#f8f8f8] flex items-center hover:bg-white hover:text-gray-800 rounded-md"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                <span>Pages</span>
                <svg
                  className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownMenu && (
                <div className="absolute left-5 top-7 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20">
                  <a href="#" className="block px-4 py-2 text-gray-800">
                    <MdDashboard className="inline-block mr-2 mb-1  text-[#20b2a6]" />
                    Admin Dashboard
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800">
                    <MdDashboard className="inline-block mr-2  text-[#20b2a6]" />
                    Teacher Dashboard
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="inline-block mr-2 h-5 w-5  text-[#20b2a6]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                    Students
                  </a>
                  <a href="/login" className="block px-4 py-2 text-gray-800">
                    Sign Out
                  </a>
                </div>
              )}
            </div>
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
            Explore our courses and get started with your musical journey!
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
