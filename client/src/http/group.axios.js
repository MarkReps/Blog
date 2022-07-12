import axios from './index';

export const getGroups = async () =>{
    const response = await axios.get('/groups/getAll')
    return response.data;
}

export const createGroup = async (form) =>{
    console.log(form)
    const response = await axios.post('/groups/create',{name:form})
    return response.data;
}