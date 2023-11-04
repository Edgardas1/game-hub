import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "beed7d1f2d1840af9b22382d4725903d"
    }
})

class APIClient<T>{
    endpoint: string

    constructor(endpoint: string){
        this.endpoint = endpoint 
    }

    getAll = (config: AxiosRequestConfig) =>{
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res=> res.data)
    }
}


export default APIClient