<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="900px" >
                <el-container >
                    <el-aside :class="{allwidth:!showContent,width2:showContent}">
                      <el-header class="chat_name">Header</el-header>
                      <el-main style="height: 75vh; position: relative;">
                              <div class="button-container">
                                <el-select v-model="value" class="m-2" placeholder="筛选群成员" >
                                  <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                  />
                                </el-select>
                                <el-select v-model="value" class="m-2" placeholder="信息分类"  >
                                  <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                  />
                                </el-select>
                                <button class="m-2" style="color: white; background: rgb(62,129,244); border: none;" @click="showContent=!showContent">备  注</button>
                                <button class="m-2" style="color: white; background: rgb(62,129,244); border: none;" @click="showmessage = true">添加聊天块</button>
                              </div>
                              <div style="height: 100%;">
                                  <div class="left_message" >
                                      <img mode="width-fix" src="../assets/img/people.png">
                                      <div style="width:100%">
                                              <div style="display: flex; width: 100%;">
                                              <div class="user_name">文峰</div>
                                              <div class="user_message">2020年5月31日16：00</div>
                                              </div>
                                              <div class="allmessage">111111111111111111111122222222222222222223333333</div>
                                      </div>
                                  </div>
                                  
                                <!--   <div class="right_message" >
                                      <div style="width:100%">
                                              <div style="display: flex; width: 100%;">
                                              <div class="user_message">2020年5月31日16：00</div>
                                              <div class="user_name">文峰</div>
                                              </div>
                                              <div class="allmessage">11111</div>
                                      </div>
                                      <img mode="width-fix" src="../assets/img/infor_all.png">
                                  </div> -->
                              </div>
                        </el-main>
                    </el-aside>
                    <el-main v-if="showContent"><header>备注</header> <div>#穆君遥帅爆了</div></el-main>
                    <div class="addchatmessage" v-if="showmessage">
                       <header>聊天块添加</header>
                       <el-container style="height: 90%;">
                        <el-aside  style="width: 40%;height: 102%; margin-top: 40px;">
                          <el-form
                            :label-position="left"
                            label-width="100px"
                            :model="formLabelAlign"
                            style="max-width: 460px;"
                            
                          >
                            <el-form-item label="标题： " style="margin-left: 0rem;">
                              <el-input v-model="formLabelAlign.name" />
                            </el-form-item>
                            <el-form-item label="客户： ">
                              <el-input v-model="formLabelAlign.type" />
                            </el-form-item>
                            <el-form-item label="备注： " >
                              <el-input  v-model="formLabelAlign.type" :rows="17" type="textarea"  />
                            </el-form-item>
                            <el-form-item>
                            <el-button type="primary" @click="onSubmit">创建</el-button>
                            <el-button @click="showmessage = false">取消</el-button>
                          </el-form-item>
                          </el-form>
                          
                        </el-aside>
                        <el-main style="width: 50%;height: 100%;">
                           <div class="news">
                            <div style="height: 90%;">
                                  <div class="left_message" >
                                      <img mode="width-fix" src="../assets/img/people.png">
                                      <div style="width:100%">
                                              <div style="display: flex; width: 100%;">
                                              <div class="user_name">文峰</div>
                                              <div class="user_message">2020年5月31日16：00</div>
                                              </div>
                                              <div class="allmessage">111111111111111111111122222222222222222223333333</div>
                                      </div>
                                  </div>
                              </div>
                            </div>
                        </el-main>
                      </el-container>
                    </div>
                </el-container>
        </el-aside>
        <el-main style="border-left: 0.5px solid;background-color: white; height:84vh;">
          <div class="handle-box">
				    <el-input  placeholder="输入群聊成员" style="width: 8rem;"></el-input>
				    <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
			    </div>
          <div  style="margin-left: 50px;margin-top: 20px;margin-bottom: 20px;">
              <el-row :gutter="20" >
                <el-col :span="4" ><img class="people" src="../assets/img/people.png"></el-col>
                <el-col :span="4"><img class="people" src="../assets/img/people.png"></el-col>
                <el-col :span="4"><img class="people" src="../assets/img/people.png"></el-col>
                <el-col :span="4"><img class="people" src="../assets/img/people.png"></el-col>
                <el-col :span="4"><img class="people" src="../assets/img/people.png"></el-col>
              </el-row>
              <el-row :gutter="20" style="margin-top: 0;">
                <el-col :span="4" class="peopleword">文权</el-col>
                <el-col :span="4" class="peopleword">文权</el-col>
                <el-col :span="4" class="peopleword">文权</el-col>
                <el-col :span="4" class="peopleword">文权</el-col>
                <el-col :span="4" class="peopleword">文权</el-col>
              </el-row>
          </div>
          <div  style="margin-left: 50px;margin-top: 20px;margin-bottom: 20px;">
              <el-row :gutter="20" >
                <el-col :span="4" ><img class="people" src="../assets/img/people.png"></el-col>
                <el-col :span="4"><img class="people" src="../assets/img/people.png"></el-col>
                <el-col :span="4"><img class="people" src="../assets/img/people.png"></el-col>
                <el-col :span="4"><img class="people" src="../assets/img/people.png"></el-col>
                <el-col :span="4"><img class="people" src="../assets/img/people.png"></el-col>
              </el-row>
              <el-row :gutter="20" style="margin-top: 0;">
                <el-col :span="4" class="peopleword">文权</el-col>
                <el-col :span="4" class="peopleword">文权</el-col>
                <el-col :span="4" class="peopleword">文权</el-col>
                <el-col :span="4" class="peopleword">文权</el-col>
                <el-col :span="4" class="peopleword">文权</el-col>
              </el-row>
          </div>
          <div style="width: 90%;border-bottom: 0.5px solid rgb(187,187,187);text-align: center;padding-bottom: 10px;margin-bottom: 15px;">
          <span class="el-dropdown-link" style="color:rgb(96,96,96); ">
            查看更多<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          </div>
           <head2 style="color: rgb(96,96,96); font-size: 15px;">群聊简介</head2>
           <div style="width: 90%;height: 10rem;margin-left: 1%;margin-top: 5px; margin-bottom: 10px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);border-radius: 10px;"></div>
           <head2 style="color: rgb(96,96,96); font-size: 15px;">查找群聊记录</head2>
           <el-row :gutter="20" style="margin-top: 10px;">
            <el-col :span="4"  class="record_word">群成员</el-col>
            <el-row :span="4"  :offset="2" class="record_word">日期</el-row>
            <el-col :span="5" :offset="1" class="record_word">图片或视频</el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 10px;">
            <el-col :span="3"  class="record_word">文件</el-col>
            <el-row :span="3"  :offset="2" class="record_word">链接</el-row>
            <el-col :span="3" :offset="1" class="record_word">交易</el-col>
          </el-row>
        </el-main>
    </el-container>
    </div>
  </template>

<script  setup lang="ts">
import { reactive, ref } from 'vue'
const showContent=ref(false);
const showmessage=ref(false);
const formLabelAlign={name:'',region:'',type:''};




</script>



<style >

::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
.chat_name{
   background: white;
   text-align: center;
   line-height: 3.5;
   font:bolder;
   color: black;
}

.chat_message{
    background: rgb(249,249,249);

}

.left_message{
    width: 50%;
    display: flex;
    height: 70px;
    padding-bottom: 5px;
    margin-bottom: 10px;
}

.left_message img{
   height: 40px;
}

.left_message .user_message{
    font-size: 8px;
    font-weight: lighter;
    color:rgb(140,140,140);
   margin-left: auto;
   padding-right: 4px;
}
.left_message .user_name{
    font-size: 10px;
    font-weight: bold;
    color:black;
    margin-left: 10px;
}

.allmessage{
     width:97%;
     word-break: break-all;
   word-wrap: break-word;
  background: rgb(62,129,244);
   color:white;
   min-height: 1rem;
   padding-left: 5px;
   margin-top:7px;
   padding-bottom: 5px;
   padding-top: 5px;
   border-radius: 10px;
}


.right_message{
    width: 50%;
    display: flex;
    height: 70px;
    padding-bottom: 5px;
    margin-left: auto;
}

.right_message img{
   height: 40px;
}
.right_message .user_message{
    font-size: 8px;
    font-weight: lighter;
    color:rgb(140,140,140);
   padding-right: 4px;
}
.right_message .user_name{
    font-size: 10px;
    font-weight: bold;
    color:black;
    margin-left:auto;
}

</style>


<style>
.button-container {
  position: absolute;
  top: 10px; /* 距离页面顶部的距离 */
  right: 20px; /* 距离页面右侧的距离 */
  display: flex;
  flex-direction: column;
}

.m-2{
  width: 7rem;
  height: 2rem;
  padding: 1px;
  margin-bottom: 1rem;
}

.allwidth{
  width: 100%;
}

.width2{
  width: 70%;
}

.addchatmessage{
  position: absolute;
  width: 55%;
  height: 85vh;
  right: 0;
  z-index: 999;
  background: white;
}

.news{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  height: 95%;
  margin-top: 20px;
  border-radius: 10px;
}


.people{
  width: 35px;
  height: 45px;
}

.peopleword{
   font-family:  '微软雅黑';
   font-size: 5px;
}

.record_word{
  color: rgb(0,94,255);
  font-size: 15px;
}
</style>