import axios from 'axios'
import { validationError } from './validationErrors';

export const callApi = ()=>{
    const axiosInstance = axios.create({
        baseURL : 'http://localhost:5000/api'
    })

    axiosInstance.interceptors.request.use(
        (config) => {
            return config;
        },
        err  => {throw err}
    )

    
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        err  => {
            const response = err?.response
            if(response){
                if(response.status== 422){
                    throw new validationError(response.data.errors)
                }
            }
            
            throw err
        }
    )

    return axiosInstance;
}