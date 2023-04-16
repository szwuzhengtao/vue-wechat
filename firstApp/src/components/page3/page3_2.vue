<template>
    <div>
      <div v-show="isshow" >
        <img src="../../assets/page3_2_x.png" style="margin-left: 95%; margin-top: 10px;" @click="isshow = false">
        <div class="bigbox">
          <el-container>
         <el-aside width="270px" class="elside" >
          <div>
          <span><img src="../../assets/page3_2_charactor.png">角色</span>
          <span><img src="../../assets/page3_2_plus.png">新建角色</span>
        </div>
        <div>
          <div class="leftcontent">
            <div style=" border: solid 1px rgb(22,132,252);width: 99%;display: flex;" v-for="(item,index) in manager" :key="index" :class="{ismange:index===ismanager}" @click="ismanager=index">
             <img src="../../assets/page3_2_man.png">
             <div style="width: 6rem;">{{item.name }}</div>
             <img  src="../../assets/page3_2_plus2.png" @click="showPopover">
             <el-popover v-model="visible"  trigger="click"  width="20px" v-if="index==ismanager">
                    <!-- Popover 内容 -->123
               </el-popover>
            </div>
          </div>
        </div>
        </el-aside>
        <el-main>
          <div class="smallbox">
              <div >
                <div class="data2">客户管理</div>
                <div class="dataall">
                  <div class="item_2_2">
                          <span  v-for="(item,index) in first" :key="index" @click="item.has=!item.has" :class="{selected: item.has,hadselected:true}">{{item.name}}</span>
                  </div> 
                </div>
              </div>
              <div >
                <div class="data2">员工管理</div>
                <div class="dataall">
                  <div class="item_2_2">
                          <span  v-for="(item,index) in second" :key="index" @click="item.has=!item.has" :class="{selected: item.has,hadselected:true}">{{item.name}}</span>
                  </div> 
                </div>
              </div>
              <div >
                <div class="data2">群聊管理</div>
                <div class="dataall">
                  <div class="item_2_2">
                          <span  v-for="(item,index) in thrid" :key="index" @click="item.has=!item.has" :class="{selected: item.has,hadselected:true}">{{item.name}}</span>
                  </div> 
                </div>
              </div>
          </div>
      </el-main>
        </el-container>
        </div>
      </div>
      <div v-show="!isshow">
    <div class="middle" style="width: 100%;" >
                        <ul class="page_button" >
                        <li :class="{ active: activeIndex === 0, normal: activeIndex !== 0 }" @click="activeIndex = 0">全部</li>
                        <li :class="{ active: activeIndex === 1, normal: activeIndex !== 1 }" @click="activeIndex = 1">今日新增</li>
                        <li :class="{ active: activeIndex === 2, normal: activeIndex !== 2 }" @click="activeIndex = 2">从未联系</li>
                        <li :class="{ active: activeIndex === 3, normal: activeIndex !== 3 }" @click="activeIndex = 3">今日跟进过</li>
                        <li :class="{ active: activeIndex === 4, normal: activeIndex !== 4 }" @click="activeIndex = 4">近7天联系过</li>
                        <li :class="{ active: activeIndex === 5, normal: activeIndex !== 5 }" @click="activeIndex = 5">7天未联系过</li>
                      </ul>
                      <div class="alldata" >
                          <div class="used_data">
                              <div class="data_button">
                                <el-input
                        placeholder="请输入内容"
                        v-model="input2" 
                        style="padding-right: 0;width: 15rem;margin-top: 1px;"
                        ></el-input>
                                  <span><img class="Simg" src="../../assets/search2.png">搜索</span>
                              </div>
                          </div>
                      </div>
       </div>
       <tablee :tabletitle="tabletitle" :tableData="tableData" v-on:getMsgFormSon2="getMsgFormSon2"></tablee>
      </div>
      </div>
  </template>
  
  
  <script>
  import tablee from '@/components/page3/page3_table';
  export default {
      components: {
      tablee,
    },
    data() {
      return {
        isshow:false,
        ismanager:1,
        first:[{name:"修改客户信息",has:true},{name:"修改员工信息",has:true},{name:"添加新客户",has:true}],
           second:[{name:"修改员工信息",has:true},{name:"获取员工信息",has:true},{name:"添加新员工",has:false}],
              thrid:[{name:"获取群聊信息信息",has:true},{name:"查找群聊记录",has:true},{name:"导入新群聊",has:true}],

        input2:"",
        selected:[],
        visible: false,
        activeIndex: 0 ,// 默认为全部
        manager:[{name:"系统管理员"},{name:"超级管理员"},{name:"部门管理员"},{name:"普通成员"}],
        tabletitle:[{title:" "},{title:"员工ID"},{title:"员工名称"},{title:"员工电话"},{title:"员工邮箱"},{title:"员工状态"},{title:"员工职位"},{title:"员工部门"},{title:"操作"}],
              tableData: [
                      { customerId: 1, customerName: "Alice", customerEmail: "alice@example.com", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" },
                      { customerId: 2, customerName: "Bob", customerEmail: "bob@example.com", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" },
                      { customerId: 3, customerName: "Charlie", customerEmail: "charlie@example.com", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" },
                      { customerId: 4, customerName: "David", customerEmail: "david@example.com", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" },
                      { customerId: 5, customerName: "Emily", customerEmail: "emily@example.com", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" },
                      { customerId: 6, customerName: "Frank", customerEmail: "frank@example.com", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" },
                      { customerId: 7, customerName: "George", customerEmail: "george@example.com", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" },
                      { customerId: 8, customerName: "Helen", customerEmail: "helen@example.com", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" },
                      { customerId: 9, customerName: "Ivy", customerEmail: "ivy@example.com", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" },
                      { customerId: 10, customerName: "Jack", customerEmail: "jackdalskjfla", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" }],

      }
    },
    created:function(){
      
    },
    methods: {
      getMsgFormSon2(data){
                this.isshow=true;
                console.log(data);
            },
            showPopover() {
      this.visible = !this.visible;
    }   
    }
  }
  </script>
<style scoped>
.item_2_2{
    margin:0.5rem;
    
    display: flex;
    flex-wrap: wrap;
 }

.hadselected{
    padding: 0.5rem;
    margin-right: 3rem;
    margin-top: 1rem;
    border: 1px solid #ccc;
    
 }

.selected {
    background-color: rgb(0,94,255);
    color: white;
  }
</style>
  <style scoped>
  .dataall{
    padding: 10px;
  }
  .data2{
       border-left: 5px solid rgb(22,132,252);
       width: 100%;
       background-color: rgb(236,248,255);
       text-align: left;
       padding-left: 20px;
       height: 3rem;
       line-height: 3;
       color:black;
  }
  .ismange{
    background-color: rgb(22,132,252);
    color: white;
  }

.leftcontent{
  border-top: solid 3px rgb(22,132,252);
  font-size: 17px;
}

.leftcontent img{
  width: 1rem;
  height: 1rem;
  margin-top: 8px;
  margin-left: 30px;
  margin-right: 20px;
}
  .bigbox{
    height: 84vh;
    margin-left: 8px;
    margin-right: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .elside{
    height: 80vh;  
    padding: 0;
    text-align: justify;
    line-height: 2.5;
    margin-top: 10px;
    margin-left: 30px;
  }

  .elside span{
    margin-left: 1.5rem;
    font-size: 20px;
    color: black;
  }

  .elside img{
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: middle;

  }
  .smallbox{
    height: 70vh;
    margin-top: 5vh;
    width: 90%;
    margin-left: 2%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

</style>


  <style scoped>

  .page_button{
    display: flex;
    text-align: center;
    align-items: center;
    list-style: none;
    padding-left: 10px;
  }
  
  .page_button .normal{
    padding-left: 15px;
    padding-right: 15px;
    font-size: 15px;
    font-weight: lighter;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  
  .page_button .active{
  
    /*font-size: 10px;*/
    padding-left: 15px;
    padding-right: 15px;
    font-weight: lighter;
    width: fit-content;
    margin-top: 2px;
    margin-bottom: 2px;
    background-color: rgb(22,132,252);
    height: 25px;
    padding-top: 5px;
      color: white;
  }
  .alldata .data_button{
    width: 97%;
    padding-left: 2%;
    display: flex;
    background-color: rgb(239, 239, 239);
    margin-left: 1.5%;
    margin-right: 2.5%;
    box-sizing: border-box;
  }
  
  .data_button span{
    display: flex;
    padding: 5px;
    background-color: rgb(255, 255, 255);
    margin-right: 2%;
    text-align: center;
    align-items: center;
    margin-top: 3px;
    margin-bottom: 3px;
    padding-right: 10px;
  }
  
 .Simg{
    width: 1rem;
    height: 1rem;
    margin-top: 2px;
    margin-right: 0.5rem;
  }
  </style>