import axios from "axios";


export const api = axios.create({
    // baseURL: "http://127.0.0.1:8000/"
    baseURL:  import.meta.env.VITE_BASE_URL
    // baseURL: process.env.VITE_BASE_URL
});
