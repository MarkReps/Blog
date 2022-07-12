import axios from './index';


export const loginUser = async (payload) => {
    const response = await axios.post('/user/login', payload)
    window.localStorage.setItem('token',response.data.accessToken)
    return response.data
}

export const registerUser = async (payload) =>{
    const response = await axios.post('/user/registration',payload)
    window.localStorage.setItem('token',response.data.accessToken)
    return response.data
}

export const check = async () =>{
    const response = await axios.get('/user/check')
    return response.data
}