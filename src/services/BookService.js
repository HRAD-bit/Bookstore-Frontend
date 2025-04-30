import axios from "axios";

const API_URL = "http://localhost:3000";

export default {
  getBooks() {
    return axios.get(`${API_URL}/books`);
  },
  getBook(id) {
    return axios.get(`${API_URL}/books/${id}`);
  },
};
