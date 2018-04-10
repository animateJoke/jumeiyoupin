<template>

    <div style="width: 100%;height: 100%;background: #f2f2f2;">
        <centerh1 v-if="bool"></centerh1>
        <xheader v-else></xheader>
        <div class="goods">
            <div class="goods_top">
                <i class="iconfont">&#xe648;</i>
                <p>我的订单</p>
                <a href="#">查看我的全部订单&nbsp;&nbsp;&nbsp;&gt;</a>
            </div>
            <div class="goods_bottom">
                <ul>
                    <li>
                        <a href="#">
                            <i class="iconfont">&#xe607;</i>
                            <p>待付款</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="iconfont">&#xe66a;</i>
                            <p>待收货</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="iconfont">&#xe639;</i>
                            <p>待评价</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="iconfont">&#xe60f;</i>
                            <p>退货/退款</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="money">
            <div class="money_top">
                <i class="iconfont">&#xe60d;</i>
                <p>我的资产</p>
            </div>
            <ul>
                <li>
                    <a href="#">现金券</a>
                </li>
                <li>
                    <a href="#">红包</a>
                </li>
                <li>
                    <a href="#">聚美余额</a>
                </li>
                <li>
                    <a href="#">礼品卡</a>
                </li>
            </ul>
        </div>
        <ul class="items">
            <li>
                <a href="#">
                    <i class="iconfont">&#xe608;</i>
                    <p>售后服务</p>
                    <span>&gt;</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont">&#xe63c;</i>
                    <p>意见反馈</p>
                    <span>&gt;</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont">&#xe66a;</i>
                    <p>收货地址</p>
                    <span>&gt;</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont">&#xe61b;</i>
                    <p>聚美专柜形象大使</p>
                    <span>&gt;</span>
                </a>
            </li>
            <li>
                    <i class="iconfont">&#xe643;</i>
                    <p @click="esc">退出登录</p>
                    <span>&gt;</span>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont">&#xe61c;</i>
                    <p>400-123-8888</p>
                    <span>&gt;</span>
                </a>
            </li>
        </ul>
        <div class="text">
            <p>客服热线400-123-8888 (8:00-22:00)<br/>拨打前请记录您的UID 0 </p>
        </div>
    </div>
</template>

<script>
    import centerh1 from "./center-h1.vue";
    import xheader from "./header.vue";
    export default {
        data() {
            return {
                bool: true

            }
        },
        components: {
            centerh1,
            xheader
        },
        mounted() {
            if (sessionStorage.getItem("user")==null) {
                this.bool = true
            }else {
                this.bool = false
            }
            console.log(this.bool);
        },
        methods:{
            esc(){
                sessionStorage.clear();
                this.$store.state.cartNum=0;
                this.bool = true
            }
        }
    }

</script>

<style scoped="scoped">
	.goods {
		width: 100%;
		height: 1.06rem;
		background: white;
		margin-top: 0.15rem;
	}
	
	.goods_top {
		width: 100%;
		height: 0.35rem;
		border-bottom: 0.02rem solid #F5F5F5;
	}
	
	.goods_top i {
		float: left;
		line-height: 0.35rem;
		margin-left: 0.15rem;
		font-size: 0.3rem;
		color: #c2c2c2;
	}
	
	.goods_top p {
		line-height: 0.35rem;
		float: left;
		margin-left: 0.15rem;
		font-size: 0.16rem;
	}
	
	.goods_top a {
		text-decoration: none;
		color: #C2C2C2;
		display: block;
		line-height: 0.35rem;
		float: right;
		font-size: 0.16rem;
		margin-right: 0.15rem;
	}
	
	.goods_bottom {
		width: 100%;
		height: 0.69rem;
	}
	
	.goods_bottom ul {
		display: flex;
		justify-content: space-around;
	}
	
	.goods_bottom ul li {
		width: 0.8rem;
		height: 0.69rem;
		float: left;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.goods_bottom ul li a {
		text-decoration: none;
		color: #757575;
	}
	
	.goods_bottom ul li i {
		font-size: 0.25rem;
		margin-left: 0.1rem;
	}
	
	.goods_bottom ul li p {
		font-size: 0.14rem;
		margin-top: 0.1rem;
	}
	
	.money {
		width: 100%;
		height: 0.8rem;
		background: white;
		margin-top: 0.15rem;
	}
	
	.money ul {
		width: 100%;
		height: 0.43rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.money ul li a {
		text-decoration: none;
		color: black;
		font-size: 0.14rem;
	}
	
	.money_top {
		width: 100%;
		height: 0.35rem;
		border-bottom: 0.02rem solid #F5F5F5;
	}
	
	.money_top i {
		float: left;
		line-height: 0.35rem;
		margin-left: 0.15rem;
		font-size: 0.3rem;
		color: #c2c2c2;
	}
	
	.money_top p {
		line-height: 0.35rem;
		float: left;
		margin-left: 0.15rem;
		font-size: 0.16rem;
	}
	
	.items li {
		width: 100%;
		height: 0.35rem;
		margin-top: 0.02rem;
		background: white;
	}
	
	.items li:first-child {
		margin-top: 0.15rem;
	}
	
	.items li a {
		text-decoration: none;
		color: black;
	}
	
	.items li i {
		float: left;
		line-height: 0.35rem;
		margin-left: 0.15rem;
		font-size: 0.24rem;
		color: #c2c2c2;
	}
	
	.items li p {
		line-height: 0.35rem;
		float: left;
		margin-left: 0.15rem;
		font-size: 0.16rem;
	}
	
	.items li span {
		display: block;
		line-height: 0.35rem;
		float: right;
		margin-right: 0.15rem;
		font-size: 0.16rem;
	}
	
	.text {
		width: 100%;
		height: 1.29rem;
	}
	
	.text p {
		margin-top: 0.15rem;
		margin-left: 0.15rem;
		line-height: 0.15rem;
		font-size: .12rem;
		color: #999999;
	}

</style>