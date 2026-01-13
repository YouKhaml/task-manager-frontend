import axios from "axios";

const CustomAxios = axios.create({
    baseURL : import.meta.env.VITE_API_URL, 
    headers : {
            "Content-Type": "application/json",
    }
})

CustomAxios.interceptors.response.use(
    reponse=>reponse,
    error => {
        console.error("API Error",error)
        return Promise.reject(error)
    }
)

export default CustomAxios 