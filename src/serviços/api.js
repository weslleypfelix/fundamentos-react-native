import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://pdm-cars-api.herokuapp.com/',
})

export default instance