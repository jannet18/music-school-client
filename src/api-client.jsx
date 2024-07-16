const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:3000";

export const register = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: formData }),
    });
    if (!response.ok) {
      throw new Error("Failed to register");
    }
    console.log(formData);
    return (await response).json();
  } catch (error) {
    console.log(error);
  }
};
// export const login = async () => {
//   const response = await axios.post(`${API_BASE_URL}/users`, data);
// };
