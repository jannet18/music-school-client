import React from "react";
import { IoIosSend } from "react-icons/io";

function Newsletter() {
  return (
    <div className="bg-[#20b2a6] p-10">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2  place-content-center text-center space-y-5 space-x-5 relative">
          <h3 className="text-xl font-bold ">
            Newsletter - <span>Stay tuned and get the latest update</span>
          </h3>
          <form className="">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full outline-none p-1 cursor-pointer"
            />
            <button
              type="submit"
              className="mt-2 rounded bg-emerald-500 p-2 font-bold text-white sm:rounded-l-none sm:rounded-r-md"
            >
              Get First Email
            </button>
          </form>
          <IoIosSend className="absolute w-4 h-4 top-8 right-4 md:right-2 text-[#20b2a6]" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
