import React from "react";
import StudentsForm from "../forms/StudentsForm";
import TeacherForm from "../forms/TeacherForm";
import AdminForm from "../forms/AdminForm";

function Register() {
  return (
    <>
      <StudentsForm />;
      <TeacherForm />
      <AdminForm />
    </>
  );
}

export default Register;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useMutation } from "react-query";
// import axios from "axios";

// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const role = watch("role");

//   const mutation = useMutation((newUser) => axios.post("/users", newUser));

//   const onSubmit = (data) => {
//     mutation.mutate(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         type="email"
//         {...register("email", { required: true })}
//         placeholder="Email"
//       />
//       {errors.email && <span>Email is required</span>}

//       <input
//         type="password"
//         {...register("password", { required: true, minLength: 6 })}
//         placeholder="Password"
//       />
//       {errors.password && <span>Password must be at least 6 characters</span>}

//       <input
//         type="password"
//         {...register("passwordConfirmation", {
//           required: true,
//           validate: (value) => value === watch("password"),
//         })}
//         placeholder="Confirm Password"
//       />
//       {errors.passwordConfirmation && <span>Passwords must match</span>}

//       <input
//         type="text"
//         {...register("name", { required: true })}
//         placeholder="Full Name"
//       />
//       {errors.name && <span>Name is required</span>}

//       <select {...register("role", { required: true })}>
//         <option value="student">Student</option>
//         <option value="teacher">Teacher</option>
//         <option value="admin">Admin</option>
//       </select>
//       {errors.role && <span>Role is required</span>}

//       {role === "student" && (
//         <>
//           <input
//             type="date"
//             {...register("date_of_birth")}
//             placeholder="Date of Birth"
//           />
//           <input type="text" {...register("grade")} placeholder="Grade" />
//           <input
//             type="text"
//             {...register("guardian_contact")}
//             placeholder="Guardian Contact"
//           />
//         </>
//       )}

//       {role === "teacher" && (
//         <>
//           <input
//             type="text"
//             {...register("subject_specialization")}
//             placeholder="Subject Specialization"
//           />
//           <input
//             type="text"
//             {...register("qualifications")}
//             placeholder="Qualifications"
//           />
//           <input
//             type="text"
//             {...register("contact_number")}
//             placeholder="Contact Number"
//           />
//         </>
//       )}

//       {role === "admin" && (
//         <input
//           type="text"
//           {...register("contact_number")}
//           placeholder="Contact Number"
//         />
//       )}

//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
