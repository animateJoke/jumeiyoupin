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
                        <li class="search_sub"><a href="#/fenye?0">眼部护理</a></li>
                        <li class="search_sub"><a href="#/fenye?1">化妆水/爽肤水</a></li>
                        <li class="search_sub"><a href="#/fenye?2">啫哩/凝露/凝胶</a></li>
                        <li class="search_sub"><a href="#/fenye?3">精华</a></li>
                        <li class="search_sub"><a href="#/fenye?4">面霜</a></li>
                        <li class="search_sub"><a href="#/fenye?5">唇部护理</a></li>
                        <li class="search_sub"><a href="#/fenye?6">洁面</a></li>
                        <li class="search_sub"><a href="#/fenye?7">T区/特殊护理</a></li>
                        <li class="search_sub"><a href="/#/fenye?8">面膜</a></li>
                        <li class="search_sub"><a href="/#/fenye?9">乳液</a></li>
                        <li class="search_sub"><a href="/#/fenye?10">精油</a></li>
                        <li class="search_sub"><a href="/#/fenye?11">护肤套装</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(1)"><span :style="{color:num==1&&bool?'#fe4070':'#666'}">彩妆<img :src="num==1&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==1&&bool">
                        <li class="search_sub"><a href="#/fenye?12">眼部</a></li>
                        <li class="search_sub"><a href="#/fenye?13">粉饼/散粉</a></li>
                        <li class="search_sub"><a href="#/fenye?14">唇部</a></li>
                        <li class="search_sub"><a href="#/fenye?15">睫毛</a></li>
                        <li class="search_sub"><a href="#/fenye?16">眉部</a></li>
                        <li class="search_sub"><a href="#/fenye?17">美甲</a></li>
                        <li class="search_sub"><a href="#/fenye?18">隔离</a></li>
                        <li class="search_sub"><a href="#/fenye?19">底妆</a></li>
                        <li class="search_sub"><a href="#/fenye?20">遮瑕/修容</a></li>
                        <li class="search_sub"><a href="#/fenye?21">防晒</a></li>
                        <li class="search_sub"><a href="#/fenye?22">卸妆</a></li>
                        <li class="search_sub"><a href="#/fenye?23">腮红</a></li>
                        <li class="search_sub"><a href="#/fenye?24">彩妆套装</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(2)"><span :style="{color:num==2&&bool?'#fe4070':'#666'}">身体护理<img :src="num==2&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==2&&bool">
                        <li class="search_sub"><a href="#/fenye?25">个人护理</a></li>
                        <li class="search_sub"><a href="#/fenye?26">润肤</a></li>
                        <li class="search_sub"><a href="#/fenye?27">纤体/美体</a></li>
                        <li class="search_sub"><a href="#/fenye?28">手足护理</a></li>
                        <li class="search_sub"><a href="#/fenye?29">护发</a></li>
                        <li class="search_sub"><a href="#/fenye?30">沐浴</a></li>
                        <li class="search_sub"><a href="#/fenye?31">洗发</a></li>
                        <li class="search_sub"><a href="#/fenye?32">美发造型</a></li>
                        <li class="search_sub"><a href="#/fenye?33">口腔护理</a></li>
                        <li class="search_sub"><a href="#/fenye?34">颈部护理</a></li>
                        <li class="search_sub"><a href="#/fenye?35">身体护理套装</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(3)"><span :style="{color:num==3&&bool?'#fe4070':'#666'}">香水<img :src="num==3&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==3&&bool">
                        <li class="search_sub"><a href="#/fenye?36">女士香水</a></li>
                        <li class="search_sub"><a href="#/fenye?37">香水套装</a></li>
                        <li class="search_sub"><a href="#/fenye?38">男士香水</a></li>
                        <li class="search_sub"><a href="#/fenye?39">中性香水</a></li>
                        <li class="search_sub"><a href="#/fenye?40">Q版香水</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(4)"><span :style="{color:num==4&&bool?'#fe4070':'#666'}">男士护理<img :src="num==4&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==4&&bool">
                        <li class="search_sub" @click="change"><a href="#/fenye?41">男士护肤</a></li>
                        <li class="search_sub" @click="change"><a href="#/fenye?42">男士身体护理</a></li>
                        <li class="search_sub" @click="change"><a href="#/fenye?43">男士套装</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(5)"><span :style="{color:num==5&&bool?'#fe4070':'#666'}">套装礼盒<img :src="num==5&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==5&&bool">
                        <li class="search_sub" @click="change"><a href="#/fenye?44">小样/旅行套装</a></li>
                    </ul>
                </li>
                <li class="search_link" @click="show(6)"><span :style="{color:num==6&&bool?'#fe4070':'#666'}">美容工具<img :src="num==6&&bool?imgg2:img1" alt=""></span>
                    <ul class="search_subs" v-show="num==6&&bool">
                        <li class="search_sub" @click="change"><a href="#/fenye?40">护肤工具</a></li>
                        <li class="search_sub" @click="change"><a href="#/fenye?37">彩妆工具</a></li>
                        <li class="search_sub" @click="change"><a href="#/fenye?0">美发工具</a></li>
                        <li class="search_sub" @click="change"><a href="#/fenye?11">美体工具</a></li>
                        <li class="search_sub" @click="change"><a href="#/fenye?24">美甲工具</a></li>
                        <li class="search_sub" @click="change"><a href="#/fenye?35">其他美容工具</a></li>
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
            change(){
                this.$store.state.isShow = false;
            }
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
        display: block;
    }

</style>