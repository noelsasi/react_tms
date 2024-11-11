import axios from "axios";

export const getCsrfToken = async () => {
  try {
    const response = await axios.get("/api/auth/csrf");
    return response.data.csrfToken;
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
    return null;
  }
};
export const getSession = async () => {
    try {
      const response = await axios.get('/api/auth/session');
      return response.data;
    } catch (error) {
      console.error("Error fetching session:", error);
      return null;
    }
  };