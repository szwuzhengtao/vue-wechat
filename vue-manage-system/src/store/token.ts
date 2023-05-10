import { List } from '@element-plus/icons-vue';
import { defineStore } from 'pinia';

interface ListItem {
	token1:string;
}

export const usingToken=defineStore('token',{
    state: () => {
		return {
			token:"null",
		};
	},
    actions:{
        setToken(a:string){
           this.token=a;
        }
    }
})