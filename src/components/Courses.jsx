import React from "react";
import Popular from "./Popular";
import { PiGuitar } from "react-icons/pi";
function Courses() {
  return (
    <div className="bg-gray-200">
      <Popular />

      <h1>Courses</h1>
      <span>Explore Our Courses</span>
      <div className="">
        <div className="grid grid-cols-3 md:grid-cols-6">
          <div className="bg-white space-x-4">
            <div className="grid grid-cols-1 place-items-center text-center gap-2 p-4">
              <PiGuitar className="w-16 h-16 text-[#20b2a6]" />
              <h4 className="text-gray-900">Guitar</h4>
              <span className="text-gray-700">
                The guitar is a stringed musical instrument
              </span>
              <button
                type="button"
                className="text-[#20b2a6] bg-gray-100 p-2 rounded-sm w-full"
              >
                25 Courses
              </button>
            </div>
          </div>
          <div className="bg-white space-x-4">
            <div className="grid grid-cols-1 justify-items-center text-center gap-2 p-4">
              <PiGuitar className="w-16 h-16 text-[#20b2a6]" />
              <h4 className="text-gray-900">Guitar</h4>
              <span className="text-gray-700">
                The guitar is a stringed musical instrument
              </span>
              <button
                type="button"
                className="text-[#20b2a6] bg-gray-100 p-2 rounded-sm w-full"
              >
                25 Courses
              </button>
            </div>
          </div>
          <div className="bg-white space-x-4">
            <div className="grid grid-cols-1  place-items-center text-center gap-2 p-4">
              <PiGuitar className="w-16 h-16 text-[#20b2a6]" />
              <h4 className="text-gray-900">Guitar</h4>
              <span className="text-gray-700">
                The guitar is a stringed musical instrument
              </span>
              <button
                type="button"
                className="text-[#20b2a6] bg-gray-100 p-2 rounded-sm w-full"
              >
                25 Courses
              </button>
            </div>
          </div>
          <div className="bg-white space-x-4">
            <div className="grid grid-cols-1  place-items-center text-center gap-2 p-4">
              <PiGuitar className="w-16 h-16 text-[#20b2a6]" />
              <h4 className="text-gray-900">Guitar</h4>
              <span className="text-gray-700">
                The guitar is a stringed musical instrument
              </span>
              <button
                type="button"
                className="text-[#20b2a6] bg-gray-100 p-2 rounded-sm w-full"
              >
                25 Courses
              </button>
            </div>
          </div>
          <div className="bg-white space-x-4">
            <div className="grid grid-cols-1  place-items-center text-center gap-2 p-4">
              <PiGuitar className="w-16 h-16 text-[#20b2a6]" />
              <h4 className="text-gray-900">Guitar</h4>
              <span className="text-gray-700">
                The guitar is a stringed musical instrument
              </span>
              <button
                type="button"
                className="text-[#20b2a6] bg-gray-100 p-2 rounded-sm w-full"
              >
                25 Courses
              </button>
            </div>
          </div>
          <div className="bg-white space-x-4">
            <div className="grid grid-cols-1 place-items-center text-center  gap-2 p-4">
              <PiGuitar className="w-16 h-16 text-[#20b2a6]" />
              <h4 className="text-gray-900">Guitar</h4>
              <span className="text-gray-700">
                The guitar is a stringed musical instrument
              </span>
              <button
                type="button"
                className="text-[#20b2a6] bg-gray-100 p-2 rounded-sm w-full"
              >
                25 Courses
              </button>
            </div>
          </div>
          <div className="bg-white space-x-4">
            <div className="grid grid-cols-1  place-items-center text-center gap-2 p-4">
              <PiGuitar className="w-16 h-16 text-[#20b2a6]" />
              <h4 className="text-gray-900">Guitar</h4>
              <span className="text-gray-700">
                The guitar is a stringed musical instrument
              </span>
              <button
                type="button"
                className="text-[#20b2a6] bg-gray-100 p-2 rounded-sm w-full"
              >
                25 Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
