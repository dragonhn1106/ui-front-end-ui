import axios from 'axios'

export default axios.create({
    baseURL: 'localhost:3002',
    headers: {
        "Content-type": "application/json"
    }
})