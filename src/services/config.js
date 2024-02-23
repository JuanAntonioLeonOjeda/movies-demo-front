import axios from 'axios'

const app = axios.create({
  baseURL: "https://movies-demo.onrender.com/api/"
})

export default app