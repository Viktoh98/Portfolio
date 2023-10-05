import axios from "axios";

export default async function fetchToken() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/csrf_token/");
    return response.data;
  } catch (error) {
    throw error;
  }
}
