import request from '../utils/request';
import { Header } from 'element-plus/es/components/table-v2/src/components';
export const fetchData = () => {
    return request({
        url: './table.json',
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

//获得所以群聊
export const getchat=()=>{

    return request({
        url: 'http://localhost:9090/chat/select',
        method:'post',
        headers:{
            token:Token,
        }
        
    });
}




//获得所有权限
export const gethad=(a:String)=>{
    return request({
        url: 'http://localhost:9090/role-manu/select',
        method:'post',
        data:{roleId:a},
        headers:{
            token:Token,
        },
        
        
    });
}


export const changehad=(a:String)=>{
    return request({
        url: 'http://localhost:9090/role-manu/select',
        method:'post',
        data:{roleId:a},
        headers:{
            token:Token,
        },
        
        
    });
}


// 查询某个用户的所有角色
export const getstaff_role=(a:String)=>{
    return request({
        url: 'http://localhost:9090/staff-role/select',
        method:'post',
        data:{staffId:a},
        headers:{
            token:Token,
        },
        
        
    });
}


//数据总览
export const gethome=()=>{
    return request({
        url: 'http://localhost:9090/analyze/home',
        method:'post',
        headers:{
            token:Token,
        },
        
        
    });
}