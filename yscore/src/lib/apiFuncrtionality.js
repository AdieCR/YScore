import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:8080/',
    timeout: 1000,
});


const loginAxios = async(value) => {
    const res = await instance.post('/users/login');
    if(res) return res.data;
}




export { loginAxios};