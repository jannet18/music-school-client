import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import * as apiClient from "../api-client";
import ReCAPTCHA from "react-google-recaptcha";
import { appContext } from "../contexts/AppContext";

function StudentsForm() {
  const { showToast } = useContext(appContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [captcha, setCaptcha] = useState("");

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Sign up Successfull", type: "SUCCESS" });
    },
    onError: async (error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  const onSubmit = (data) => {
    if (captcha) {
      data.captchaToken = captcha;
      //   console.log(data);
      data.role = "student";
      mutation.mutate(data);
    } else {
      console.log("please complete captcha");
    }
  };
  const onCaptchaChange = (value) => {
    setCaptcha(value);
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="name" className="text-sm text-gray-700">
            First Name:
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-sm text-red-500">First Name is required</span>
          )}
          <label htmlFor="name" className="text-sm text-gray-700">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && (
            <span className="text-sm text-red-500">Last Name is required</span>
          )}
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="email" className="text-sm text-gray-700">
            Email:
          </label>
          <input
            type="text"
            placeholder="Email"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">Email is required</span>
          )}
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="password" className="text-sm text-gray-700">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">Password is required</span>
          )}
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="confirm-password" className="text-sm text-gray-700">
            Confirm Password:
          </label>
          <input
            type="password"
            placeholder="Confirm-Password"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
            {...register("password_confirmation", { required: true })}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              Confirm Password is required
            </span>
          )}
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="confirm-password" className="text-sm text-gray-700">
            Instrument:
          </label>
          <input
            type="text"
            placeholder="Instrument"
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
            {...register("instrument", { required: true })}
          />
          {errors.instrument && (
            <span className="text-sm text-red-500">Instrument is required</span>
          )}
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="grade-level" className="text-sm text-gray-700">
            Grade Level:
          </label>
          <select
            name="grade-level"
            className=""
            {...register("grade", { required: true })}
          >
            <option defaultValue="Grade">Choose Level</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
            <option value="7">Grade 7</option>
            <option value="8">Grade 8</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
          </select>
          {errors.grade && (
            <span className="text-sm text-red-500">
              Grade Level is required
            </span>
          )}
        </div>
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="confirm-password" className="text-sm text-gray-700">
            Contact:
          </label>
          <input
            type="number"
            placeholder=""
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
            {...register("guardian_contact", { required: true })}
          />
          {errors.guardian_contact && (
            <span className="text-sm text-red-500">Contact is required</span>
          )}
        </div>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            name="remember_me"
            {...register("accepted_terms", {
              required: true,
            })}
          />
          {errors.accept_terms && (
            <span className="text-sm text-red-500">
              You must accept terms & conditions
            </span>
          )}
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
          {errors.terms && (
            <span className="text-sm text-red-500 flex">
              You must accept the terms and conditions
            </span>
          )}
        </div>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={onCaptchaChange}
          className=""
        />
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

export default StudentsForm;
