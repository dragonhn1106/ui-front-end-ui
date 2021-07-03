import axios from 'axios'

export default axios.create({
    baseURL: 'https://60dfe6fa6b689e001788c83e.mockapi.io',
    headers: {
        "Content-type": "application/json"
    }
})