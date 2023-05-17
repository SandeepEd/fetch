import axios from "axios";

const client = axios.create({
    baseURL: "https://frontend-take-home-service.fetch.com",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "credentials": "include",
    },
});

export default client;