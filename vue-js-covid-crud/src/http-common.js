import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3031/api/",
  headers: {
    "Content-type": "application/json"
  }
});