import request from '../utils/request';
import { Header } from 'element-plus/es/components/table-v2/src/components';
export const fetchData = () => {
    return request({
        url: 'http://localhost:9090/chat/select',
        method: 'post',
        headers:{
            token:Token,
        }
    });
};

interface RequestBody {
    // Specify the properties and their types in the requestBody
    staffAccount: string;
    staffPassword: String;
    // ...
  }
export const getlogin=(requestBody:RequestBody)=>{
  
    return request({
        url: 'http://localhost:9090/user/login',
        method:'post',
        data:requestBody
    });
}

const Token:string  =localStorage.getItem('ms_token');


export const getuser=()=>{
    console.log(Token);
    return request({
        url: 'http://localhost:9090/staff/select',
        method:'get',
        headers:{
            token:Token,
        }
        
    });
  
}

export const getchat=()=>{

    return request({
        url: 'http://localhost:9090/chat/select',
        method:'get',
        headers:{
            token:Token,
        }
        
    });
}
