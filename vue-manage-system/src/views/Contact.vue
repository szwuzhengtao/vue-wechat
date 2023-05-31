<template xmlns="http://www.w3.org/1999/html">
    <div id="app">
        <div class="dialog" v-show="flag">
            <div class="new_top" >
                {{"新 建 跟 进"}}
            </div>
            <div class="new">
                {{"  客户 "}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <input v-model="follow_man_new" type="text">

                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp


                {{"跟进联系人 "}}&nbsp&nbsp&nbsp&nbsp
                <input v-model="phone_man_new" type="text">
                <br/><br/>
                <p class="line"></p>
                <br/><br/>
                {{"跟进时间"}}&nbsp&nbsp&nbsp
                <input v-model="time_new" type="datetime-local">

                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

                {{"跟进方式 "}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <input v-model="type_new" type="text">
                <br/><br/>
                <p class="line"></p>
                <br/>
                {{"跟进内容 "}}&nbsp&nbsp
                <textarea v-model="follow_word_new" type="text"
                          style="word-wrap: break-word;word-break: normal;
                          width: 76%;height: 20%;overflow:hidden;resize: none;
                          padding-top: 10px;padding-left: 10px;font-family:  Arial, sans-serif">
                </textarea>

                <br/><br/>
                <p class="line"></p>

                <br/><br/>
                {{"附加文件"}}&nbsp&nbsp&nbsp
                <input  type="file">
            </div>
            <div class="new_bottom">
                <button class="btn" @click="add">{{"保存"}}</button>
                <button class="btn" @click="close">{{"退出"}}</button>
            </div>
        </div>

        <div class="top">
            <input v-model="SearchWord" placeholder="请输入搜索内容" class="ipt">
            <button class="btn" >{{"搜索"}}</button>
            <button class="btn" @click="dig_open">{{"新建跟进"}}</button>
            <button class="btn">{{"导入"}}</button>
            <button class="btn"> {{"导出"}}</button>
        </div>


        <br/>
<!--        <div>-->
            <img :src="ImgSrc[index1*2]"  :title="follow_man[index1*2]" class="picture">
            <!--        <div v-text="ImgSrc[index1]" class="FName"></div>-->
            <div v-text="follow_man[index1*2]" class="FName"></div>
            <!--            <h2>v-text="follow_man1111111</h2>-->
            <div v-text="'跟进人: '+phone_man[index1*2]"  class="PName"></div>
            <div v-text="'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+time[index1*2]" class="FTime"></div>
            <div v-text="follow_word[index1*2]" class="follow_word"></div>
        <div class="btn-three">
            <button class="infor_edit" ><img style="width: 15px" class="btn-1" src="../assets/img/infor_all.png">详情
            </button>&nbsp;
            <button class="infor_edit" ><img style="width: 15px" class="btn-1" src="../assets/img/infor_delete.png">修改
            </button>&nbsp;
            <button class="infor_edit" @click="delete1"><img style="width: 15px" class="btn-1" src="../assets/img/infor_edit.png">删除
            </button>
        </div>


            <br/>

            <img :src="ImgSrc[index1*2+1]"  :title="follow_man[index1*2+1]" class="picture">
            <!--        <div v-text="ImgSrc[index1]" class="FName"></div>-->
            <div v-text="follow_man[index1*2+1]" class="FName"></div>
            <!--            <h2>v-text="follow_man1111111</h2>-->
            <div v-text="'跟进人: '+phone_man[index1*2+1]"  class="PName"></div>
            <div v-text="'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+time[index1*2+1]" class="FTime"></div>
            <div v-text="follow_word[index1*2+1]" class="follow_word"></div>
        <div class="btn-three">
            <button class="infor_edit" ><img style="width: 15px" class="btn-1" src="../assets/img/infor_all.png">详情
            </button>&nbsp;
            <button class="infor_edit" ><img style="width: 15px" class="btn-1" src="../assets/img/infor_delete.png">修改
            </button>&nbsp;
            <button class="infor_edit" @click="delete2"><img style="width: 15px" class="btn-1" src="../assets/img/infor_edit.png">删除
            </button>
        </div>




<!--        </div>-->


        <br/><br/><br/>
        <div class="bottom">
            <button @click="PageLast" class="btn">{{"上一页"}}</button>
            <button @click="PageNext" class="btn" >{{"下一页"}}</button>
        </div>

    </div>
</template>

<script>

    export default {
        data(){
            return{
                flag:false,
                follow_man: ["李小红","穆穆君","益小轩","海鸥桑","文一权","政伍涛","丁纯真","王小美"],
                index1:0,
                SearchWord:"",
                time:["2023-05-19T20:56",
                    "2023-05-18T15:30",
                    "2023-05-16T13:50",
                    "2023-05-02T05:10",
                    "2023-05-01T22:47",
                    "2023-04-24T10:14",
                    "2023-04-08T12:06",
                    "2023-04-01T10:30"],
                phone_man:["穆穆君","益小轩","海鸥桑","文一权","政伍涛","丁纯真","王小美","李小红"],
                follow_word:[
                    "祥林嫂是鲁迅笔下的一个身处社会底层的农村妇女，她具有中国传统妇女应该具备的勤劳、善良、质朴、仁爱、" +
                    "坚强品性，与所有封建社会的女性一样，处于受剥削、压迫地位。然而，她对自己的地位和被剥削命运毫不知晓，" +
                    "心甘情愿地接受封建社会对其进行的经济剥削和精神奴役。这就是她性格的可悲之处。当命运发生重大变故时，" +
                    "所有的人对祥林嫂都没有同情，她处于矛盾痛苦的挣扎之中，当然掌握不了自己的命运，反而成为被践踏、被伤害、" +
                    "被愚弄的对象，遭人鄙视，慢慢地被封建社会所吞噬。",

                    "孔乙己一到店," +
                    "对柜里说，“温两碗酒，要一碟茴香豆。”便排出九文大钱。他们又故意的高声嚷道，“你一定又偷了人家的东西了！”" +
                    "孔乙己睁大眼睛说，“你怎么这样凭空污人清白……”“什么清白？我前天亲眼见你偷了何家的书，吊着打。" +
                    "”孔乙己便涨红了脸，额上的青筋条条绽出，争辩道，“窃书不能算偷……窃书！……读书人的事，能算偷么？”" ,

                    "孔乙己低声说道，“跌断，跌，跌……”他的眼色，很像恳求掌柜，不要再提。此时已经聚集了几个人，便和掌柜都笑了。" +
                    "我温了酒，端出去，放在门槛上。他从破衣袋里摸出四文大钱，放在我手里，见他满手是泥，原来他便用这手走来的。" +
                    "不一会，他喝完酒，便又在旁人的说笑声中，坐着用这手慢慢走去了。",

                    "我是一个特别固执的人，我从来不会在意别人跟我说什么，让我去做，让我去怎么做，我不管。如果，你也可以像我一样，" +
                    "那我觉得，这件事情，太酷辣!!!",

                    "穿过挪威的森林，让我走进你的梦里，夕阳落在我的铠甲，王子不一定骑白马，现在是上午十一点二十七，你不必故作冷淡，" +
                    "我也不想做最后的纠缠。最后问一句，肯德基疯狂星期四，谁请我吃？",

                    "我都懂，我都明白，我是选项E，我是planB，是分叉的头发，洗衣机流出的泡沫，超市里被捏碎的饼干，是吃腻的奶油，" +
                    "是落寞的城市，是地上的草，我是被踩踏的，是西装的备用扣，是被雨淋湿的小狗，是腐烂的橘子，是过期的牛奶，是断线的风筝，" +
                    "是被随意丢弃的向日葵，是沉默寡言的小朋友，所以能v我52吗，今天肯德基疯狂星期四" ,

                    "路上只我一个人，背着手踱着。这一片天地好像是我的;我也像超出了平常的自己，到了另一世界里。我爱热闹，也爱冷静;爱群居，" +
                    "也爱独处。像今晚上，一个人在这苍茫的月下，什么都可以想，什么都可以不想，便觉是个自由的人。白天里一定要做的事，" +
                    "一定要说的话，现在都可不理。这是独处的妙处，我且受用这无边的荷香月色好了。" ,

                    "燕子去了，有再来的时候;杨柳枯了，有再青的时候;桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去" +
                    "不复返呢?--是有人偷了他们罢：那是谁?又藏在何处呢?是他们自己逃走了罢：现在又到了哪里呢?"],
                // follow_man:"hkb",
                search:"",
                ImgSrc:[
                    "src/assets/img/1.jpg",
                    "src/assets/img/2.jpg",
                    "src/assets/img/3.jpg",
                    "src/assets/img/4.jpg",
                    "src/assets/img/5.jpg",
                    "src/assets/img/6.jpg",
                    "src/assets/img/7.jpg",
                    "src/assets/img/8.jpg",
                    "src/assets/img/9.jpg",
                ],
                follow_man_new:"",
                phone_man_new:"",
                time_new:"",
                type_new:"",
                follow_word_new:"",
            }
        },
        methods:{
            PageNext:function(){
                if(this.index1*2+2<=this.follow_man.length-1){
                    this.index1+=1;
                    console.log(this.ImgSrc[this.index1*2]);
                    console.log(this.follow_man.length-1);
                }
                else{
                    alert("已经是最后一页啦！");
                }
            },
            PageLast:function(){
                if(this.index1>0){
                    this.index1-=1;
                }
                else{
                    alert("这是第一页！");
                }
            },
            add:function (){
                this.ImgSrc.splice(0,0,this.type_new);
                this.follow_man.splice(0,0,this.follow_man_new);
                this.phone_man.splice(0,0,this.phone_man_new);
                this.time.splice(0,0,this.time_new);
                this.follow_word.splice(0,0,this.follow_word_new);
                // console.log(this.follow_man_new);
                // console.log(this.phone_man_new);
                // console.log(this.time_new);
                // console.log(this.follow_word_new);
                this.flag=false;
                alert("添加成功！");
            },
            delete1:function (){
                this.ImgSrc.splice(this.index1*2,1);
                this.follow_man.splice(this.index1*2,1);
                this.phone_man.splice(this.index1*2,1);
                this.time.splice(this.index1*2,1);
                this.follow_word.splice(this.index1*2,1);
                alert("删除成功！");
            },
            delete2:function (){
                this.ImgSrc.splice(this.index1*2+1,1);
                this.follow_man.splice(this.index1*2+1,1);
                this.phone_man.splice(this.index1*2+1,1);
                this.time.splice(this.index1*2+1,1);
                this.follow_word.splice(this.index1*2+1,1);
                alert("删除成功！");
            },
            dig_open:function (){
                this.flag=true;
                this.follow_word_new=null;
                this.phone_man_new=null;
                this.follow_man_new=null;
                this.type_new=null;
                this.time_new=null;
                // console.log(this.flag);
            },
            close:function (){
                this.flag=false;
                // console.log(this.flag);
            },
        },
    }
</script>

<style scoped>
    #app{
        background-color: #ffffff;
        text-align: left;
        vertical-align: middle;
        width:1350px;
        height: 620px;
        box-shadow: 0px 2px 4px 6px #CBCBCB;
        display: inline-block;
        position: absolute;
        border-radius:1%;
        padding-top: 20px;
        padding-left: 20px;
    }
    .top{
        /*margin: 20px;*/
        background: #efefef;
        width: 1320px;
        border-radius: 10px;
        /*border-radius:5%;*/
    }
    .picture{
        width: 50px;
        /*border: 10px #333333;*/
        border-radius:50%;
        float: left;
        /*border-width: 100px;*/
        /*padding-left: 20px;*/

    }
    .FName{
        text-decoration: none;
        /*font-family: Montserrat,serif;*/
        padding-left: 70px;
        padding-top: 4px;
        font-size: 20px;
        color: #1684FC;
        /*float: left;*/
        /*word-break:keep-all;*/
    }
    .FTime{
        text-decoration: none;
        /*font-family: Montserrat,serif;*/
        padding-left: 100px;
        padding-top: 3px ;
        font-size: 15px;
        color: #333333;

        /*word-break:keep-all;*/
    }
    .PName{
        text-decoration: none;
        /*font-family: Montserrat,serif;*/
        padding-left: 20px;
        font-size: 15px;
        color: #333333;
        float: left;
        /*word-break:keep-all;*/
    }
    .btn {
        /*display: flex;*/
        justify-content: center;
        /*align-items: center;*/
        padding: 6px 8px 6px 8px;
        gap: 4px;
        height: 30px;
        width: 128px;
        margin: 10px;
        /*border: none;*/
        border-width: 1px;
        background: #FFFFff;
        border-radius: 5px;
        cursor: pointer;
    }
    .btn:hover {
        background: #efefef;
    }

    .btn:hover .svg-icon {
        animation: spin 1s linear infinite;
    }
    .ipt {
        /*display: flex;*/
        justify-content: center;
        /*align-items: center;*/
        padding: 6px 8px 3px 8px;
        gap: 8px;
        height: 20px;
        width: 200px;
        margin: 10px;
        /*border: none;*/
        border-width: 1px;
        background: #FFFFff;
        border-radius: 5px;
        cursor: pointer;
    }
    .ipt:hover {
        background: #efefef;
    }

    .ipt:hover .svg-icon {
        animation: spin 1s linear infinite;
    }
    .follow_word{
        margin: 10px 10px 10px 10px;
        white-space: pre-line;
        color: #000000;
        font-weight: 400;
        line-height: 1.5;
        position: relative;
        background-color: #efefef;
        padding: 1em;
        z-index: 5;
        /*box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);*/
        border-radius: 10px;
        max-width: 1265px;
        transition: 200ms ease-in-out;
        /*margin-bottom: 4px;*/
    }
    .bottom{
        height: 45px;
        line-height: 45px;
        position: absolute;
        bottom: 20px;
        /*left: 20px;*/
        text-align: center;
        /*right: 100px;*/
        background: #efefef;
        width: 1320px;
        border-radius: 10px;
        /*padding-left: 20px;*/
    }
    .btn-three {
        justify-content: center;
        gap: 4px;
        height: 50px;
        width: 500px;
        margin: 10px;
        border-width: 1px;
        /*border-radius: 10px;*/
        background: #FFFFFF;

    }
    .btn-1{

        max-width: 320px;
        display: flex;
        padding: 0.1rem 1.4rem;
        /*font-size: 0.875rem;*/
        /*line-height: 1.25rem;*/
        /*font-weight: 700;*/
        text-align: center;
        text-transform: uppercase;
        vertical-align: middle;
        /*align-items: center;*/
        /*border: 1px solid rgba(0, 0, 0, 0.25);*/
        gap: 0.75rem;
        color: rgb(65, 63, 63);
        background-color: #efefef;
        cursor: pointer;
        transition: all .6s ease;
        height: 15px;
        width: 30px;
        /*font-size: 100px;*/
    }
    .btn-1:hover {
        background-color: #bebebe;
    }

    .btn-1:hover .svg-icon {
        animation: spin 1s linear infinite;
    }
    .dialog{
        width: 100%;
        height: 100%;
        position: fixed;
        left:0;
        top:0;
        background: rgb(0,0,0,0.6);
        z-index: 99;
    }
    .new_top{
        width: 50.5%;
        height: 5%;
        position: fixed;
        left:25.1%;
        top:25%;
        background: #efefef;
        z-index: 100;
        text-align: left;
        font-size: 20px;
        padding-top: 10px;
        padding-left: 20px;
    }
    .new_bottom{
        width: 52.1%;
        height: 5%;
        position: fixed;
        left:25%;
        bottom:15%;
        background: #efefef;
        z-index: 100;
        text-align: center;
        font-size: 20px;
        padding-bottom: 10px;
        /*padding-left: 20px;*/
    }
    .new{
        width: 50%;
        height: 50%;
        position: fixed;
        left:25%;
        top:25%;
        background: rgb(255,255,255,1);
        /*box-shadow: 0px 0px 4px 2px #CBCBCB;*/
        z-index: 99;
        padding-left: 30px;
        padding-top: 70px;
    }
    .line{
        width: 90%;
        /*height: 5px;*/
        border-top: solid #dbdbdb 1px;
        /*top:50%;*/
    }
</style>