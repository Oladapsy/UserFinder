// axios configuration
import axios from "axios";

const BaseUrl = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: BaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;