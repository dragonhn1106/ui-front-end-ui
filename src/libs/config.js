import axios from 'axios'

export const httpFile =  axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
        "Content-Type": "multipart/form-data",
    },
})

export const http =  axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
        "Content-type": "application/json",
    },
})