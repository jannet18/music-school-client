const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:3000";

export const login = async () => {
  const response = fetch(`${API_BASE_URL}/`);
};
