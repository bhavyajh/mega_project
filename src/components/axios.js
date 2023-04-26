//FOR RELATIVE PATH FOR API CALLS
import axios from "axios";
const ex=axios.create({
    baseURL:"https://localhost:7074"
})
export default ex;