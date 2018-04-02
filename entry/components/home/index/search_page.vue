<template>
    <div id="boc" :style="{display:ss&&!showSearch2?'block':'none'}">
        <div id="search_page" class="show" style="transform-origin: 0px 0px 0px; opacity: 1;">
            <div class="search_head">
                <input type="text" @focus="showSearch3" placeholder="搜索商品名称、品牌、功效" id="search_input" class="search_input">
                <span @click="hideSearch" id="search_back" class="search_btn" style=" opacity: 1;">返回</span>
            </div>

            <ul class="search_links" style="height: 634px; opacity: 1;">
                <li class="search_link" @click="show(0)"><span :style="{color:num==0&&bool?'#fe4070':'#666'}">面部护肤 <img :src="num==0&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==0&&bool">
                        <li class="search_sub"><a href="#">眼部护理</a></li>
                        <li class="search_sub"><a href="#">化妆水/爽肤水</a></li>
                        <li class="search_sub"><a href="#">啫哩/凝露/凝胶</a></li>
                        <li class="search_sub"><a href="#">精华</a></li>
                        <li class="search_sub"><a href="#">面霜</a></li>
                        <li class="search_sub"><a href="#">唇部护理</a></li>
                        <li class="search_sub"><a href="#">洁面</a></li>
                        <li class="search_sub"><a href="#">T区/特殊护理</a></li>
                        <li class="search_sub"><a href="/#">面膜</a></li>
                        <li class="search_sub"><a href="/#">乳液</a></li>
                        <li class="search_sub"><a href="/#">精油</a></li>
                        <li class="search_sub"><a href="/#">护肤套装</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(1)"><span :style="{color:num==1&&bool?'#fe4070':'#666'}">彩妆<img :src="num==1&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==1&&bool">
                        <li class="search_sub"><a href="#">眼部</a></li>
                        <li class="search_sub"><a href="#">粉饼/散粉</a></li>
                        <li class="search_sub"><a href="#">唇部</a></li>
                        <li class="search_sub"><a href="#">睫毛</a></li>
                        <li class="search_sub"><a href="#">眉部</a></li>
                        <li class="search_sub"><a href="#">美甲</a></li>
                        <li class="search_sub"><a href="#">隔离</a></li>
                        <li class="search_sub"><a href="#">底妆</a></li>
                        <li class="search_sub"><a href="#">遮瑕/修容</a></li>
                        <li class="search_sub"><a href="#">防晒</a></li>
                        <li class="search_sub"><a href="#">卸妆</a></li>
                        <li class="search_sub"><a href="#">腮红</a></li>
                        <li class="search_sub"><a href="#">彩妆套装</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(2)"><span :style="{color:num==2&&bool?'#fe4070':'#666'}">身体护理<img :src="num==2&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==2&&bool">
                        <li class="search_sub"><a href="#">个人护理</a></li>
                        <li class="search_sub"><a href="#">润肤</a></li>
                        <li class="search_sub"><a href="#">纤体/美体</a></li>
                        <li class="search_sub"><a href="#">手足护理</a></li>
                        <li class="search_sub"><a href="#">护发</a></li>
                        <li class="search_sub"><a href="#">沐浴</a></li>
                        <li class="search_sub"><a href="#">洗发</a></li>
                        <li class="search_sub"><a href="#">美发造型</a></li>
                        <li class="search_sub"><a href="#">口腔护理</a></li>
                        <li class="search_sub"><a href="#">颈部护理</a></li>
                        <li class="search_sub"><a href="#">身体护理套装</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(3)"><span :style="{color:num==3&&bool?'#fe4070':'#666'}">香水<img :src="num==3&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==3&&bool">
                        <li class="search_sub"><a href="#">女士香水</a></li>
                        <li class="search_sub"><a href="#">香水套装</a></li>
                        <li class="search_sub"><a href="#">男士香水</a></li>
                        <li class="search_sub"><a href="#">中性香水</a></li>
                        <li class="search_sub"><a href="#">Q版香水</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(4)"><span :style="{color:num==4&&bool?'#fe4070':'#666'}">男士护理<img :src="num==4&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==4&&bool">
                        <li class="search_sub"><a href="#">男士护肤</a></li>
                        <li class="search_sub"><a href="#">男士身体护理</a></li>
                        <li class="search_sub"><a href="#">男士套装</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(5)"><span :style="{color:num==5&&bool?'#fe4070':'#666'}">套装礼盒<img :src="num==5&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==5&&bool">
                        <li class="search_sub"><a href="#">小样/旅行套装</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(6)"><span :style="{color:num==6&&bool?'#fe4070':'#666'}">美容工具<img :src="num==6&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==6&&bool">
                        <li class="search_sub"><a href="#">护肤工具</a></li>
                        <li class="search_sub"><a href="#">彩妆工具</a></li>
                        <li class="search_sub"><a href="#">美发工具</a></li>
                        <li class="search_sub"><a href="#">美体工具</a></li>
                        <li class="search_sub"><a href="#">美甲工具</a></li>
                        <li class="search_sub"><a href="#">其他美容工具</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(7)"><span :style="{color:num==7&&bool?'#fe4070':'#666'}">其他<img :src="num==7&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==7&&bool">
                        <li class="search_sub"><a href="#">喜从盒来</a></li>
                        <li class="search_sub"><a href="#">会员生日礼包</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import $ from "jquery"
    export default {
        data() {
            return {
                num: -1,
                bool: false,
                img1:require("../../../img/xia.png"),
                imgg2:require("../../../img/shang.png")
            }
        },
        methods: {
            show(num) {
                this.num = num
                this.bool = !this.bool
            },
            hideSearch(){
                this.$store.state.isShow = false;
            },
            showSearch3(){
                 this.$store.state.isShow2=true
            },

        },
        computed: {
            ss() {
                return this.$store.state.isShow
            },
            showSearch2(){
                return this.$store.state.isShow2
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
    #boc {
        background: rgba(0, 0, 0, .6);
        overflow: hidden;
        position: fixed;
        z-index: 999;
        top:0;
        width: 100%;
    }

    #search_page {
        padding: 0 0.14rem;
        float: right;
        box-sizing: border-box;
        width: 3.16rem;
        overflow-y: auto;
        background: #fff;
    }

    .search_head {
        border-bottom: 1px solid #f5f5f5;
        background: #fff;
        position: relative;
        width: 3.16rem;
        height: 0.46rem;
        margin-top: .07rem;
    }

    #search_input {
        width: 2.4rem;
        height: .32rem;
        background: url("../../../img/search_btn.png") no-repeat 0.15rem center #f5f5f5;
        background-size: 0.16rem;
        border: 0;
        border-radius: .16rem;
        margin-top: 0.08rem;
        padding-left: 0.33rem;
        font-size: 0.16rem;
        color: #757575;
        box-sizing: border-box;
    }

    #search_back {
        font-size: 0.14rem;
        color: #acacac;
        margin-left: 0.16rem;
    }

    .search_link {
        border-bottom: 1px solid #f5f5f5;
        line-height: .44rem;
        color: #6b6b6b;
        overflow: hidden;
        font-size: .14rem;
    }
    .search_link span img{
        float: right;
        width: 0.09rem;
        height: .04rem;
        margin-top: .2rem;
    }

    .search_subs {
        background: #f5f5f5;
    }

    .search_subs li {
        border-bottom: 1px solid #fff;
        line-height: .44rem;
        padding-left: 0.18rem;
        box-sizing: border-box;
    }

    .search_subs li a {
        font-size: 0.14rem;
        color: #777;
    }

</style>