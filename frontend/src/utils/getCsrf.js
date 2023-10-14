import axios from "axios";

export default async function fetchToken() {
  try {
    const API_URL = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${API_URL}csrf_token/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
