<template>
    <div id="search">
        <div id="fenye">
            <div class="top">
                <img src="../img/left_arrow.png" alt="" class="left">
                <img src="../img/home.png" alt="" class="right">
            </div>
            <div class="nav">
                <ol class="ll">
                    <li @click="show(1)"><a href="#" :style="{color:num==1&&bool?'#fe4070':'#666'}">品牌 <img :src="num==1&&bool?src1:src"></img></a>
                        <ul v-show="num==1&&bool" class="list">
                            <li v-for="a in arr">{{a}}</li>
                        </ul>
                    </li>
                    <li @click="show(2)">  <a href="#" :style="{color:num==2&&bool?'#fe4070':'#666'}">分类 <img :src="num==2&&bool?src1:src"></img></a>
                        <ul v-show="num==2&&bool" class="list">
                            <li v-for="b in arr1">{{b}}</li>
                        </ul>
                    </li>
                    <li @click="show(3)"><a href="#" :style="{color:num==3&&bool?'#fe4070':'#666'}">功效 <img :src="num==3&&bool?src1:src"></img></a>
                        <ul v-show="num==3&&bool" class="list">
                            <li v-for="c in arr3">{{c}}</li>
                        </ul>
                    </li>
                    <li @click="show(4)"> <a href="#" :style="{color:num==4&&bool?'#fe4070':'#666'}">价格 <img :src="num==4&&bool?src1:src"></img></a>
                        <ul v-show="num==4&&bool" class="list">
                            <li v-for="d in arr4">{{d}}</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <ul class="liebiao">
                <li>
                    <div class="nox">
                        <img src="../img/p.jpg" alt="" class="pic">
                        <img src="../img/free.jpg" alt="" class="pic1">
                    </div>
                    <div class="r">
                        <h4>AHC五代保湿紧致修护眼霜60ml</h4>
                        <h5>1219人已购买</h5>
                        <p><span>￥118</span></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                num: -1,
                bool:false,
                src:require('../img/arrow_down.png'),
                src1:require('../img/arrow_up2.png'),
                arr:["全部","伊蒂之屋","韩熙贞","玛丽黛佳","MISTINE","伊势半","爱丽小屋","得鲜","井田","卡姿兰","谜尚","托尼魅力","净颜小筑","悦诗风吟","思薇娜"],
                arr1:["全部","眼线笔","眼影","眼线液","眼线膏/胶"],
                arr3:["全部","眼部造型","不易脱妆","持久","装扮","防晕染","修饰","易卸妆","防水","定妆","修容","遮瑕","温和","保湿","滋润"],
                arr4:["全部","1-49","50-99","100-199","200-299","300-399","400-599","600-799","800以上"]
            }
        },
        methods:{
            show(num){
                this.num = num
                this.bool = !this.bool
            }
        },
        watch:{
            num(){
                this.bool=true
            }
        }
    }
</script>

<style scoped>
    #fenye{
        border: 1px solid #e3e3e4;
    }
    .top{
        height: .44rem;
        border-bottom: 1px solid #e3e3e4;
        padding: 0 .2rem;
        box-sizing: border-box;
    }
    .left{
        width: .07rem;
        height: .14rem;
        margin-top: .15rem;
    }
    .right{
        float: right;
        width: .2rem;
        height: .2rem;
        margin-top: .12rem;
    }
    .nav{
        height: .44rem;
        border-bottom: 1px solid #e3e3e4;
    }
    .ll li a{
        display: inline-block;
        padding-left: .34rem;
        width: .56rem;
        line-height: .44rem;
        font-size: .13rem;
        color: #666;
        border-bottom: 1px solid #e3e3e4;

    }
    .nav a img{
        width: .07rem;
        height: .03rem;

        margin-left: .08rem;
    }
    .list,.ll{
        overflow: hidden;
        width: 3.73rem;
    }
    .list{
        /*display: none;*/
        position: absolute;
        left: 0;
        z-index: 999;
        background: #fff;
    }
    .list li{
        width: 1.24rem;
        height: .43rem;
        float: left;
        border-bottom:1px solid #e3e3e4 ;
        border-right:1px solid #e3e3e4 ;
        box-sizing: border-box;
        text-align: center;
        line-height: .43rem;
        font-size: .13rem;
        color: #666;
    }
    .list li:nth-of-type(3n){
        border-right:0 ;
    }

    .ll li{
        float: left;
    }
    .liebiao li{
        height: 1.24rem;
        border-bottom:1px solid #e3e3e4 ;
        padding: .12rem;
        box-sizing: border-box;
        overflow: hidden;
    }
    .liebiao li .pic{
        width: 1rem;
        height: 1rem;
    }
    .nox{
        width: 1rem;
        height: 1rem;
        position: relative;
        float: left;
        margin-right: 0.1rem;
    }
    .r{
        float: left;
    }
    .r h4{
        font-size: .14rem;
        color: #595959;
    }
    .r p{
        color: #fe4070;
        font-size: 0.14rem;
        margin-top: .2rem;
    }
    h5{
        color: #9f9f9f;
        font-size: .12rem;
        margin-top: .24rem;
    }
    .pic1{
        width: .3rem;
        height: .23rem;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>