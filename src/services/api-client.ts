import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[]
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "beed7d1f2d1840af9b22382d4725903d"
    }
})