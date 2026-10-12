import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.interceptors.request.use((config) => {
  const userData = JSON.parse(
    localStorage.getItem("devburguer:userData") || "{}",
  );

  const token = userData && userData.token;

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:3001",
// });
// api.interceptors.request.use((config) => {
//   const userData = JSON.parse(
//     localStorage.getItem("devburguer:userData") || "{}"
//   );

//   const token = userData && JSON.parse(userData).token;

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });
