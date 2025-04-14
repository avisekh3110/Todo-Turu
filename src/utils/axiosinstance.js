import axios from "axios";

const server = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export default server;
// harr jagha axios server aur env use na krna pre iss lye ek instance bna lye h
