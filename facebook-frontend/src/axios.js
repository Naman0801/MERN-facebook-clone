import axios from 'axios'

const instance = axios.create({
    baseURL: 'YOUR_HEROKU_LINK'
})

export default instance