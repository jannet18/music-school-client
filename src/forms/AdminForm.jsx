import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { appContext } from "../contexts/AppContext";
function AdminForm() {
  const [captcha, setCaptcha] = useState("");
  const { showToast } = useContext(appContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(apiClient.register, {
    onSuccess: () => {
      showToast({ message: "Registration Successful!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Registration Failed!", type: "ERROR" });
    },
  });

  const onSubmit = () => {
    if (captcha) {
      data.captchaToken = captcha;
      data.role = "admin";
      mutation.mutate(data);
    } else {
      console.log("Please complete captcha");
    }
  };
  const onCaptchaChange = (value) => {
    if (captcha) {
      data.captchaToken = captcha;
    }
    setCaptcha(value);
  };
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
      <h1></h1>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-start flex-col justify-start gap-3">
          <label htmlFor="firstname" className="text-sm text-gray-700">
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
          <label htmlFor="lastname" className="text-sm text-gray-700">
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
            Contact:
          </label>
          <input
            type="number"
            placeholder=""
            className="w-full px-3 rounded-sm border border-gray-300 focus:outline-nome focus:ring-1 focus:ring-blue-500"
            {...register("contact", { required: true })}
          />
          {errors.contact && (
            <span className="text-sm text-red-500">Contact is required</span>
          )}
        </div>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            name="remember_me"
            id="remember_me"
            {...register("accept_terms", {
              required: true,
            })}
          />
          {errors.accept_terms && (
            <span className="text-sm text-red-500">
              You must accept the terms & conditions
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
        </div>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={onCaptchaChange}
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

export default AdminForm;
