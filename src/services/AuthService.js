import axios from "axios";

const API_URL = "http://localhost:3000";

export default {
  login(email, password) {
    return axios.post(`${API_URL}/login`, {
      email,
      password,
    });
  },
  logout() {
    return axios.post(`${API_URL}/logout`);
  },
  register(email, password) {
    return axios.post(`${API_URL}/register`, {
      email,
      password,
    });
  },
};