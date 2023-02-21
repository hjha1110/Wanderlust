import axios from "axios";

const get=(url:string)=>{
const client = axios.create();
return client.get(`${process.env.API_BASE_URL}${url}`).catch(err=>console.log(err))
}

const post=(url:string, payload:unknown)=>{
    const client = axios.create();
    return client.post(`${process.env.API_BASE_URL}${url}`,payload).catch(err=>console.log(err));
}

export default {get,post};