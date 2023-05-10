import request from '../utils/request';
import { usingToken } from '../store/token';
import { Header } from 'element-plus/es/components/table-v2/src/components';
export const fetchData = () => {
    return request({
        url: './table.json',
        method: 'get'
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

const token=usingToken();
export const getuser=()=>{

    return request({
        url: 'http://localhost:9090/staff/select',
        method:'get',
        headers:{
            token:token.token,
        }
        
    });
}
