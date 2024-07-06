import React from "react";
// import { RxAvatar } from "react-icons/rx";
import { GiGrandPiano } from "react-icons/gi";

function Popular() {
  return (
    <div>
      {/* Piano Courses
Guitar Courses
Music Theory Courses
Digital Music Courses
Music Production Courses
Audio Engineering Courses
Songwriting Courses
Ableton Live Courses */}
      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 p-4 ">
        <div className="bg-white p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <GiGrandPiano className="w-16 h-16 bg-[#20b2a6] p-1 rounded-full" />
            {/* rating */}
            <h2 className="text-gray-800 font-bold text-2xl">Guitar Courses</h2>
          </div>
          {/* teacher */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-[#9fc5ce]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <h4 className="text-md font-semibold text-gray-600">by Jane Doe</h4>
            {/* no of lectures */}
          </div>
          <div className="flex flex-col items-center space-y-4">
            {/* amount btn */}
            <button
              type="button"
              className="bg-gray-100 text-[#20b2a6] p-1 rounded-sm"
            >
              KES 10,000 All Courses/ KES 5000 per Month
            </button>
            {/* enroll */}
            <button
              type="button"
              className="text-[#20b2a6] bg-white p-1 w-full border border-[#20b2a6] "
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="bg-white p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <GiGrandPiano className="w-16 h-16 bg-[#20b2a6] p-1 rounded-full" />
            {/* rating */}
            <h2 className="text-gray-800 font-bold text-2xl">Guitar Courses</h2>
          </div>
          {/* teacher */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-[#9fc5ce]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <h4 className="text-md font-semibold text-gray-600">by Jane Doe</h4>
            {/* no of lectures */}
          </div>
          <div className="flex flex-col items-center space-y-4">
            {/* amount btn */}
            <button
              type="button"
              className="bg-gray-100 text-[#20b2a6] p-1 rounded-sm"
            >
              KES 10,000 All Courses/ KES 5000 per Month
            </button>
            {/* enroll */}
            <button
              type="button"
              className="text-[#20b2a6] bg-white p-1 w-full border border-[#20b2a6] "
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="bg-white p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <GiGrandPiano className="w-16 h-16 bg-[#20b2a6] p-1 rounded-full" />
            {/* rating */}
            <h2 className="text-gray-800 font-bold text-2xl">Guitar Courses</h2>
          </div>
          {/* teacher */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-[#9fc5ce]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <h4 className="text-md font-semibold text-gray-600">by Jane Doe</h4>
            {/* no of lectures */}
          </div>
          <div className="flex flex-col items-center space-y-4">
            {/* amount btn */}
            <button
              type="button"
              className="bg-gray-100 text-[#20b2a6] p-1 rounded-sm"
            >
              KES 10,000 All Courses/ KES 5000 per Month
            </button>
            {/* enroll */}
            <button
              type="button"
              className="text-[#20b2a6] bg-white p-1 w-full border border-[#20b2a6] "
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="bg-white p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <GiGrandPiano className="w-16 h-16 bg-[#20b2a6] p-1 rounded-full" />
            {/* rating */}
            <h2 className="text-gray-800 font-bold text-2xl">Guitar Courses</h2>
          </div>
          {/* teacher */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-[#9fc5ce]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <h4 className="text-md font-semibold text-gray-600">by Jane Doe</h4>
            {/* no of lectures */}
          </div>
          <div className="flex flex-col items-center space-y-4">
            {/* amount btn */}
            <button
              type="button"
              className="bg-gray-100 text-[#20b2a6] p-1 rounded-sm"
            >
              KES 10,000 All Courses/ KES 5000 per Month
            </button>
            {/* enroll */}
            <button
              type="button"
              className="text-[#20b2a6] bg-white p-1 w-full border border-[#20b2a6] "
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="bg-white p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <GiGrandPiano className="w-16 h-16 bg-[#20b2a6] p-1 rounded-full" />
            {/* rating */}
            <h2 className="text-gray-800 font-bold text-2xl">Guitar Courses</h2>
          </div>
          {/* teacher */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-[#9fc5ce]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <h4 className="text-md font-semibold text-gray-600">by Jane Doe</h4>
            {/* no of lectures */}
          </div>
          <div className="flex flex-col items-center space-y-4">
            {/* amount btn */}
            <button
              type="button"
              className="bg-gray-100 text-[#20b2a6] p-1 rounded-sm"
            >
              KES 10,000 All Courses/ KES 5000 per Month
            </button>
            {/* enroll */}
            <button
              type="button"
              className="text-[#20b2a6] bg-white p-1 w-full border border-[#20b2a6] "
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="bg-white p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <GiGrandPiano className="w-16 h-16 bg-[#20b2a6] p-1 rounded-full" />
            {/* rating */}
            <h2 className="text-gray-800 font-bold text-2xl">Guitar Courses</h2>
          </div>
          {/* teacher */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-[#9fc5ce]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <h4 className="text-md font-semibold text-gray-600">by Jane Doe</h4>
            {/* no of lectures */}
          </div>
          <div className="flex flex-col items-center space-y-4">
            {/* amount btn */}
            <button
              type="button"
              className="bg-gray-100 text-[#20b2a6] p-1 rounded-sm"
            >
              KES 10,000 All Courses/ KES 5000 per Month
            </button>
            {/* enroll */}
            <button
              type="button"
              className="text-[#20b2a6] bg-white p-1 w-full border border-[#20b2a6] "
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
