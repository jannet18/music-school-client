import React, { useState } from "react";
import StudentsForm from "../forms/StudentsForm";
import TeacherForm from "../forms/TeacherForm";
import AdminForm from "../forms/AdminForm";
import { useForm } from "react-hook-form";

function Register() {
  const [role, setRole] = useState("");
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    // <>
    <div className=" mx-auto bg-white rounded-lg px-8 py-10 flex flex-col items-center">
      <div className="flex items-start flex-row justify-start gap-3">
        <label htmlFor="role" className="text-sm text-gray-700">
          Role:
        </label>
        <select
          onChange={handleRoleChange}
          // {...register("role", { required: true })}
          className="w-full px-3 rounded-sm border border-gray-300 focus:outline-none "
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && (
          <span className="text-sm text-red-500">Role is required</span>
        )}
      </div>
      {/* <div className="registration-container">
        <h1>Register</h1>
        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              onChange={handleRoleChange}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="teacher"
              onChange={handleRoleChange}
            />
            Teacher
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              onChange={handleRoleChange}
            />
            Admin
          </label>
        </div>
      </div> */}
      <>
        {role === "student" && <StudentsForm />}
        {role === "teacher" && <TeacherForm />}
        {role === "admin" && <AdminForm />}
      </>
    </div>
  );
}

export default Register;
