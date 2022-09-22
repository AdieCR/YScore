import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: true,
});

const loginAxios = async (value) => {
  try {
    const res = await instance.post("/users/login", value);
    if (res) return res.data;
  } catch (err) {
    console.log(err);
  }
};

const logoutAxios = async () => {
  try {
    const res = await instance.get("/users/logout");
    if (res) return res.data.ok;
  } catch (err) {
    console.log(err);
  }
};


export { loginAxios, logoutAxios };
