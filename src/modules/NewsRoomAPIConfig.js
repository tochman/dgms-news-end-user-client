import axios from "axios";

let apiUrl;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiUrl = "http://locahost:3001/api";
} else {
  apiUrl = "https://newsrooms-whatever.herokuapp.com/api";
}

const NewsRoomAPI = axios.create({ baseURL: apiUrl });

export default NewsRoomAPI;
