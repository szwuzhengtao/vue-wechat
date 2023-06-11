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

//获得所有群聊
export const getchat=()=>{

    return request({
        url: 'http://localhost:9090/chat/select',
        method:'post',
        headers:{
            token:Token,
        }
        
    });
}

//查找某个群群聊记录

export const getchatdetail=(id:string)=>{

    const formData = new URLSearchParams();
    formData.append('chatId', id);
  
    console.log(id);
    return request({
        url: 'http://localhost:9090/record/select/chat',
        method:'post',
        data: formData.toString(),
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

//获得所有用户
export const getcustomer=()=>{
    return request({
        url: 'http://localhost:9090/customer/select',
        method:'post',
        headers:{
            token:Token,
        },
        
        
    });
}

//添加聊天块
interface lastdata {
	recordIds:any[],
  customerId:string,
  title:string,
  note:string,
  staffId:string,
}
export const addchatdetail=(Lastdata:lastdata)=>{
    return request({
        url: 'http://localhost:9090/block/add',
        method:'post',
        data:Lastdata,
        headers:{
            token:Token,
        },
        
        
    });
}


//查找用户的聊天块

export const getchatblock=(a:String)=>{
    return request({
        url: 'http://localhost:9090/block/select/person',
        method:'post',
        data:{personId:a},
        headers:{
            token:Token,
        },
        
        
    });
}
