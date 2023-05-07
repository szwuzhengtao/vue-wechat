<template>
    <div>
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
                                  <span><img src="../../assets/search2.png">搜索</span>
                                  <span type="button" onclick="dianwo()"><img src="../../assets/increase.png">新建</span>
                                  <span><img src="../../assets/download.png">导入<img style="margin-left: 2rem;" src="../../assets/upload.png">导出</span>
                                  <el-dropdown style="margin-left: 700px;">
                                      <el-button type="primary" style="color: black; background-color: #fff;border: none;margin-bottom: 2px;border-radius: 0;">
                                        排序<i class="el-icon-arrow-down el-icon--right"></i>
                                      </el-button>
                                      <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>黄金糕</el-dropdown-item>
                                        <el-dropdown-item>狮子头</el-dropdown-item>
                                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                        <el-dropdown-item>双皮奶</el-dropdown-item>
                                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                      </el-dropdown-menu>
                                   </el-dropdown>
                              </div>
                          </div>
                      </div>
       </div>
       <tablee :tabletitle="tabletitle" :tableData="tableData"></tablee>
      </div>
  </template>
  
  
  <script>
  import tablee from '@/components/Atable.vue';
  export default {
      components: {
      tablee,
    },
    data() {
      return {
        activeIndex: 0 ,// 默认为全部
        tabletitle:[{title:"客户ID"},{title:"客户名称"},{title:"客户性别"},{title:"客户电话"},{title:"客户地址"},{title:"客户获取时间"},{title:"邮箱"},{title:"负责人"},{title:"操作"}],
              tableData: [
                      { customerId: 10, customerName: "Alice", customerEmail: "alice@example.com", customerPhone: "1234567", customerGender: "男", customerAddress: "深圳", customerJointime: "1月1日", chargeStaff: "杜总" },
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
      
    }
  }
  </script>
  
  <style>
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
    margin-left: 2%;
    margin-top: 3px;
    margin-bottom: 3px;
    padding-right: 10px;
  }
  
  .data_button span img{
    width: 1rem;
    height: 1rem;
    margin-top: 2px;
    margin-right: 0.5rem;
  }
  </style>