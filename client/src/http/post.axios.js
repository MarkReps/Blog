import axios from './index';


export const createPost = async (form) =>{
    console.log(form)
    const response = await axios.post('/posts',form)
    return response.data;
}

export const getAllPost = async (groupId) =>{
    const response = await axios.get('/posts/',{params:{
        groupId
    }})
    return response.data;
}
