<template>   
     <div class="all">
        <JawboneHeroImage style="z-index:-1;position:relative;" />
        <div class="logo" style="display: flex; align-items: center;padding-bottom: 20px;margin-left: 30%;padding-top: 60px; " >
            <img  style="width: 65px;height: 65px; margin-left: 15%;" src="../assets/wechat.png">
            <span style="font-size: 30px;font-weight: bold;margin-left: 7%; color:white; line-height:1.5; text-shadow:2px 2px 2px gray;" >客户管理</span>
        </div>
        <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
            <h3 class="loginTitle">
            <span @click="change1" v-bind:class="{ title:!show , title_active: show }">密码登录</span>
            <span @click="change2" v-bind:class="{title:show , title_active: !show }">用户注册</span>
            </h3>
            <div v-if="show">
                <el-form-item prop="username">
                    <el-input type="text" v-model="loginForm.username" placeholder="用户名/邮箱号" >
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" placeholder="密码" >
                    </el-input>
                </el-form-item>
                <div style="display: flex;justify-content: space-between;">
                <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
                <a href="#">忘记密码?</a>
                </div>
                <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
            </div>
            <div v-else>
                <el-form-item prop="username">
                    <el-input type="text" v-model="loginForm.username" placeholder="手机号" >
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" placeholder="输入短信验证码" >
                    </el-input>
                </el-form-item>
                <el-button type="primary" style="width:100%" @click="submitLogin">用户注册</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import JawboneHeroImage from '@/components/JawboneHeroImage.vue';
export default {
    
  name: "Login",
  components: {
    JawboneHeroImage,
  },
    data(){
      return{
        
          show: true,
          captchaUrl: "",
          loginForm:{
            staffAccount:"admin",
            staffPassword:"ssssss",
              code:'',
              staffId:"",
              staffName:"",
              token:""
          },
          checked: true,
          rules:{
            staffAccount:[{required:true,message:"请输入用户名",trigger:"blur"},{ min: 5, max: 14, message: '长度在 5 到 14 个字符', trigger: 'blur' }
              ],
            staffPassword:[{required:true,message:"请输入密码",trigger:"blur"},,{ min: 6,  message: '密码长度要大于6', trigger: 'blur' }],
              code:[{required:true,message:"请输入验证码",trigger:"blur"}],
          }

      }
  },
 
  
    methods:{
      submitLogin(){
          this.$refs.loginForm.validate((valid) => {
              if (valid) {
               this.$router.push({name:'Mainpage'});
                fetch('http://localhost:9090/user/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                staffAccount: this.staffAccount,
                               staffPassword:this.staffPassword,
                            })
                            })
                            .then(response => {
                            return response.json();
                            })
                            .then(data => {
                               
                            console.log(data);
                           this.staffId=data.staffId;
                           this.token=data.token
                           this.staffName=data.staffName;
                           
                            })
                            .catch(error => {
                            console.error(error);
                            });

                 
              } else {
                  this.$message.error('登录出错请重新输入');
                  return false;
              }
          });
      },
      change1(){
        this.show=true;
      },
      change2(){
        this.show=false;
      },
    }
};
</script>

<style  >
    .loginContainer{
        border-radius: 15px;
        background-clip: padding-box;
        margin: 10px auto;
        width: 350px;
        padding: 30px 35px 70px 35px;
        background-color: #FFFFFF;
        border:24px solid rgba(255,255,255,.3);
        z-index: 1;
    }
    .title{
        font-size: 20px;
        font-weight: lighter;
        margin-right: 3rem;
        margin-left: 1rem ;
        cursor: pointer;
    }
    .title_active{
        position: relative;
        color: #1a1a1a;
        font-weight: 600;
        font-synthesis: style;
        margin-right: 3rem;
        margin-left: 1rem ;
        font-size: 20px;
        position: relative;
        padding-bottom: 20px;
        cursor: pointer;
    }

    .title_active::after {/*点击后*/
        content: "";
        display: block;
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background-color: #0084ff;

}
    .loginTitle{
        margin: 0px auto 40px auto;
        text-align: center;
    }
    .loginRemember{
        text-align: left;
        margin: 0px 0px 15px 0px;
    }

</style>

