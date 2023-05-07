<template>
    <div style="height: 100vh;width: 100%;">
        <el-container>
            <el-aside style="width:80px;padding:0px;background-color: rgb(98,129,250);height: 100vh;" >
                        <span class="head">
                            <img mode="withFix" class="h_img" src="../assets/yizi.png">
                        </span>
                        <br/>
                        <span class="name">twq</span>
                        <span class="setting">
                            <img mode="withFix" style="width: 30%;" src="../assets/setting.png">
                        </span>
                        <div class="allicon">
                            <div class="icon" v-for="(item,index) in pagestate" :key="index" @click="Changepage(index)">
                                <img :class="{left_icon: index!==page,active: index===page}" :src= item.imgs>
                                <span :class="{txt:index!==page,active_txt:index===page}">{{ item.name }}</span>
                            </div>
                            <div class="icon" style="margin-top: 340px;">
                                <img class="left_icon"   src= "../assets/exit.png">
                            </div>
                        </div>
            </el-aside>
            <el-aside style="width:150px; background-color:#fff;">
                    <state v-on:getMsgFormSon="getMsgFormSon" :statelist="statelist" v-if="page==2"></state>
                    <state v-on:getMsgFormSon="getMsgFormSon" :statelist="statelist2" v-if="page==3"></state>
            </el-aside>
            <el-container>
                <el-header style="background-color: rgb(239,239,239);"><top1/></el-header>
                <el-main style="padding: 0;background-color: #fff;"  >
                  <page2_1 v-show="page===2&&state==0" ></page2_1>
                  <page3_1 v-show="page===2&&state==1" ></page3_1>
                  <page3_2 v-show="page===3&&state==1" ></page3_2>
                  <page3_3 v-show="page===3&&state==2" ></page3_3>
                </el-main>
            </el-container>
        </el-container>
    </div> 
    </template>
    
    <script>
    import page2_1 from '@/components/page2/page2_1';
    import page3_1 from '@/components/page3/page3_1';
    import page3_2 from '@/components/page3/page3_2';
    import page3_3 from '@/components/page3/page3_3';
    import top1 from '@/components/top1';
    import state from '@/components/state';
    export default {
      components: {
        page2_1,
        top1,
        state,
        page3_1,
        page3_2,
        page3_3,
      },
      data() {
        return {
            pagestate:[{name:"办公",imgs:require("../assets/work.png")},
            {name:"常用",imgs:require("../assets/usual.png")},
            {name:"客户",imgs:require("../assets/more2.png")},
            {name:"账号",imgs:require("../assets/more.png")},
            
        ],
        statelist:[{name:"全部客户",imgs:require("../assets/customer.png")},
           {name:"客户类型",imgs:require("../assets/down-circle.png")},
           {name:"客户状态",imgs:require("../assets/down-circle.png")},
           {name:"联系更进",imgs:require("../assets/follow.png")},
           {name:"群聊汇总",imgs:require("../assets/chat.png")}],

           statelist2:[{name:"员工列表",imgs:require("../assets/page2_worker.png")},
           {name:"权限管理",imgs:require("../assets/page2_had.png")},
           {name:"登陆日志",imgs:require("../assets/log.png")}],
        page:2,
        state:1,
        }
      },
      methods: {
        Changepage(index){
           this.page=index;
        },
        getMsgFormSon(data){
                this.state = data;
                console.log(this.state);
            },
      },
   
    }
    </script>
    
    
    <style scoped>
      .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
      }
      
      .el-aside {
        padding: 0;
        text-align: center;
        background-color: rgb(98, 129, 250);
      }
      
      .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    
      }
      
      body > .el-container {
        height: 100vh;
      }
      .el-container{
        height: 100vh;
      }
      .el-container:nth-child(5) .el-aside,
      .el-container:nth-child(6) .el-aside {
        line-height: 260px;
      }
      
      .el-container:nth-child(7) .el-aside {
        line-height: 320px;
      }
    </style>
    
    <style>
    .head{
        width: 80%;
        background-color:rgb(62, 129, 244);
        height: auto;
        margin-top: 1vh;
    }
    
    .h_img{
          border-radius: 50%;
          width: 3vw;
          height: 5vh;
          overflow: hidden;
          margin-top: 1vh;
    }
    
    .name{
       font-size: 4px;
       margin-top: 1px;
       font-family: 'Montserrat', sans-serif;
       color: white;
    }
    
    .setting{
        display: block;
        margin-top: 6px;
       
    }
    
    .allicon{
        margin-top: 2vh;
         text-align: center;
         display: block;
    }
    
    .icon{
        width: 50%;
        display:inline-block;
        display: block;
        margin-left: 18%;
        padding: 3px;
        text-align: center;
        margin-bottom: 2vh;
    }
    
    .left_icon{
        width: 80%;
        opacity: 0.5;
        margin-top: 0;
        padding: 0;
        font-size: 10px;
        background-color:rgb(62, 129, 244);
    }
    
    .txt{
      width: 80%;
      opacity: 0.5;
      margin-top: 0;
      padding: 0;
      font-size: 10px;
    }
    
    .active_txt{
      font-size: 10px;
        font-weight: bold;
        width: 80%;
        opacity: 1;
        margin-top: 0;
        padding: 0;
    }
    
    .active{
       width: 80%;
        opacity: 1;
        margin-top: 0;
        padding: 0;
        background-color:rgb(62, 129, 244);
    }
    </style>
    
    
    <style>
    .search-box {
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 40px;
        width: 87.8%;
        height:4%;
        overflow: hidden;
        margin-left: 6.1%;
        margin-top: 20px;
      }
     
      .search-box img{
          width: 1vw;
      } 
    
      .search-button {
        background-color: transparent;
        border: none;
        margin-right: 1px;
      }
       
      .search-input {
        border: none;
        flex: 1;
        outline: none; /* 去掉搜索框聚焦时的默认边框 */
        font-size: 8px;
      }
    
      .list{
        margin-top: 20px;
        width: 100%;
      }
     .list img{
        width: 1vw;
        padding-right: 1vw;
     }
      .list_span{
        height:20%;
        padding-top: 8px;
        padding-left: 10%;
        padding-bottom: 8px;
        font-size: small;
        font-family: "微软雅黑", Arial, sans-serif;
        font-weight: lighter;
        opacity: 0.8;
        display: flex;
        margin-bottom: 4vh;
        background-color: rgb(249, 249, 249);
      }
      .list_span_active{
        height:20%;
        padding-top: 8px;
        padding-left: 10%;
        padding-bottom: 8px;
        font-size: small;
        font-family: "微软雅黑", Arial, sans-serif;
        font-weight: lighter;
        opacity: 0.8;
        display: flex;
        margin-bottom: 4vh;
        background-color: rgb(227, 235, 255);
        color: rgb(72, 129, 244);
      }
    </style>