import React from "react";

function TeacherForm() {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
      <h1></h1>
      <form className="w-full flex flex-col gap-4">
        <label htmlFor="name" className="text-sm text-gray-700">
          Name:
        </label>
        <div className="flex items-start flex-row justify-start gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="email" className="text-sm text-gray-700">
            Email:
          </label>
          <input
            type="text"
            placeholder="Email"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="password" className="text-sm text-gray-700">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="confirm-password" className="text-sm text-gray-700">
            Confirm Password:
          </label>
          <input
            type="password"
            placeholder="Confirm-Password"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="confirm-password" className="text-sm text-gray-700">
            Qualifications:
          </label>
          <input
            type="text"
            placeholder="Qualification"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="confirm-password" className="text-sm text-gray-700">
            Instrument:
          </label>
          <input
            type="text"
            placeholder="Instrument Specialization"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="confirm-password" className="text-sm text-gray-700">
            Contact:
          </label>
          <input
            type="number"
            placeholder=""
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            name="remember_me"
            id="remember_me"
            //   {...register("acceptTerms", {
            //     required: "You must accept the terms and conditions",
            //   })}
          />
          <label htmlFor="remember_me" className="text-gray-700">
            I accept the{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              privacy policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#20b2a6] hover:bg-[#82abae] text-white rounded-sm p-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default TeacherForm;
