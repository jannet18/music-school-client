import React from "react";

function Blog() {
  return (
    <div className="bg-gray-100 space-y-20">
      <h1 className=" uppercase font-bold text-xl text-[#20b2a6] flex items-center justify-center pt-20">
        Our Blog
      </h1>
      <div className="grid grid-cols-2 md:grid-col-4 gap-6">
        <div className="bg-white text-gray-800 grid grid-cols-1 gap-2 p-8">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="object-cover w-full"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center justify-start space-x-3">
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Admin
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                Date
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center text-[#20b2a6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Comments
              </span>
            </div>
            <h2 className="text-xl font-semibold">
              Build your Dream and passion in playing Music
            </h2>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              distinctio debitis. Voluptatibus maiores cupiditate beatae
              dolorem, blanditiis alias odio unde qui cum earum eius ipsam sed?
              Autem officiis enim maxime. Iure a, et quos dicta ea perspiciatis
              nisi quod vero soluta maiores minima in blanditiis commodi nihil
              accusamus autem quam voluptates omnis nemo? Harum ullam aspernatur
              tempore nesciunt at obcaecati.
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-800 grid grid-cols-1 gap-2 p-8">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="object-cover w-full"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center justify-start space-x-3">
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Admin
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                Date
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center text-[#20b2a6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Comments
              </span>
            </div>
            <h2 className="text-xl font-semibold">
              Build your Dream and passion in playing Music
            </h2>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              distinctio debitis. Voluptatibus maiores cupiditate beatae
              dolorem, blanditiis alias odio unde qui cum earum eius ipsam sed?
              Autem officiis enim maxime. Iure a, et quos dicta ea perspiciatis
              nisi quod vero soluta maiores minima in blanditiis commodi nihil
              accusamus autem quam voluptates omnis nemo? Harum ullam aspernatur
              tempore nesciunt at obcaecati.
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-800 grid grid-cols-1 gap-2 p-8">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="object-cover w-full"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center justify-start space-x-3">
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Admin
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                Date
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center text-[#20b2a6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Comments
              </span>
            </div>
            <h2 className="text-xl font-semibold">
              Build your Dream and passion in playing Music
            </h2>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              distinctio debitis. Voluptatibus maiores cupiditate beatae
              dolorem, blanditiis alias odio unde qui cum earum eius ipsam sed?
              Autem officiis enim maxime. Iure a, et quos dicta ea perspiciatis
              nisi quod vero soluta maiores minima in blanditiis commodi nihil
              accusamus autem quam voluptates omnis nemo? Harum ullam aspernatur
              tempore nesciunt at obcaecati.
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-800 grid grid-cols-1 gap-2 p-8">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="object-cover w-full"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center justify-start space-x-3">
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Admin
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                Date
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center text-[#20b2a6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Comments
              </span>
            </div>
            <h2 className="text-xl font-semibold">
              Build your Dream and passion in playing Music
            </h2>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              distinctio debitis. Voluptatibus maiores cupiditate beatae
              dolorem, blanditiis alias odio unde qui cum earum eius ipsam sed?
              Autem officiis enim maxime. Iure a, et quos dicta ea perspiciatis
              nisi quod vero soluta maiores minima in blanditiis commodi nihil
              accusamus autem quam voluptates omnis nemo? Harum ullam aspernatur
              tempore nesciunt at obcaecati.
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-800 grid grid-cols-1 gap-2 p-8">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="object-cover w-full"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center justify-start space-x-3">
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Admin
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                Date
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center text-[#20b2a6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Comments
              </span>
            </div>
            <h2 className="text-xl font-semibold">
              Build your Dream and passion in playing Music
            </h2>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              distinctio debitis. Voluptatibus maiores cupiditate beatae
              dolorem, blanditiis alias odio unde qui cum earum eius ipsam sed?
              Autem officiis enim maxime. Iure a, et quos dicta ea perspiciatis
              nisi quod vero soluta maiores minima in blanditiis commodi nihil
              accusamus autem quam voluptates omnis nemo? Harum ullam aspernatur
              tempore nesciunt at obcaecati.
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-800 grid grid-cols-1 gap-2 p-8">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="object-cover w-full"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center justify-start space-x-3">
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Admin
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                Date
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center text-[#20b2a6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Comments
              </span>
            </div>
            <h2 className="text-xl font-semibold">
              Build your Dream and passion in playing Music
            </h2>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              distinctio debitis. Voluptatibus maiores cupiditate beatae
              dolorem, blanditiis alias odio unde qui cum earum eius ipsam sed?
              Autem officiis enim maxime. Iure a, et quos dicta ea perspiciatis
              nisi quod vero soluta maiores minima in blanditiis commodi nihil
              accusamus autem quam voluptates omnis nemo? Harum ullam aspernatur
              tempore nesciunt at obcaecati.
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-800 grid grid-cols-1 gap-2 p-8">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="object-cover w-full"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center justify-start space-x-3">
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Admin
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                Date
              </span>
              <span className="flex space-x-4 uppercase text-sm items-center text-[#20b2a6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#20b2a6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Comments
              </span>
            </div>
            <h2 className="text-xl font-semibold">
              Build your Dream and passion in playing Music
            </h2>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              distinctio debitis. Voluptatibus maiores cupiditate beatae
              dolorem, blanditiis alias odio unde qui cum earum eius ipsam sed?
              Autem officiis enim maxime. Iure a, et quos dicta ea perspiciatis
              nisi quod vero soluta maiores minima in blanditiis commodi nihil
              accusamus autem quam voluptates omnis nemo? Harum ullam aspernatur
              tempore nesciunt at obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
