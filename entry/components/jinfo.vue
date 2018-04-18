<template>
	<div class="ginfo">
		<div class="top">
			<img :src="getList1?getList1.image:''" class="img"/>
			<div class="text">
				<b v-text="getList1?getList1.new_price:''"></b>
				<strong>包邮</strong>
				<i v-text="getList1?getList1.sig_price:''"></i>
				<span>已有216人参与</span>
				<p v-text="getList1?getList1.old_price:''"></p>
				<i>还剩{{time}}</i>
				<span>逾期未成团自动退款</span>
			</div>
		</div>
		<section>
			<span v-text="getList1?getList1.name_tag:''"></span>
			<i v-text="getList1?getList1.name_m:''"></i>
		</section>
		<div class="add">
			<i>配送</i>
			<span>至北京市-市辖区-东城区</span>
			<p>超出配送范围</p>
		</div>
		<div class="rules">
			<h3>拼团玩法<a href="http://s.h5.jumei.com/yiqituan/rules?type=">查看规则</a></h3>
			<ul>
				<li>&nbsp;&nbsp;&nbsp;&nbsp;支付<br/>开团/参团</li>
				<li>&nbsp;&nbsp;&nbsp;&nbsp;邀请<br/>好友参团</li>
				<li>拼团成功立即发货<br/>逾期未成团自动退款</li>
			</ul>
		</div>
		<div class="server">
			<p>聚美官方服务号</p>
			<span>更多靠谱优惠推荐，尽在聚美微信服务号</span>
			<h4>点击关注</h4>
			<i>或 微信搜索“聚美优品jumei”关注</i>
		</div>
		<div class="size">
			<p>选择型号</p>
			<h3>7PG8079,6包组合42片</h3>
		</div>
		<div class="pinglun">
			<p>买的人这样说</p>
		</div>
		<div class="tab">
			<ul>
				<li v-for="(a,index) in arr" v-text="a.title" v-on:click="dian(index)"  :class="{'current':index==nav}">
					
				</li>
				
			</ul>
			<ol v-for="(a,index) in arr" v-show="index==nav">
				<li v-for="b in a.img"> 
					<img :src="b"/>
				</li>
				<li v-for="c in a.message"> 
					<p><i v-text="c.m1"></i><span v-text="c.m2"></span></p>
					
				</li>
			</ol>
		</div>
		<div class="footer">
			<ul>
				<li class="back" @click="back"><i class="iconfont icon-fanhui"></i>首页</li>
				<li v-text="getList1?getList1.old_price:''"></li>
				<li v-text="getList1?getList1.new_price+'包邮开团':''"></li>
			</ul>
		</div>
		<div class="toTop" @click="toTop"><i class="iconfont icon-fanhui"></i></div>
	</div>
</template>

<script>
	const $=require("jquery");
	
	export default {
		data() {
			return {
				limitTime: 86399,
				time: '',
				stop: false,
				id: window.location.href.split("=")[1],
				nav:0,
				arr:[{
					"title":"图文详情",
					"img":[
						"http://p0.jmstatic.com//jpartner/ueditor/partner/0cd894979085b3ec5ef0fd2abe9b59fe.jpg",
						"http://p0.jmstatic.com//jpartner/ueditor/partner/68fd87cea82d0b34fe6ac1dc56dde405.jpg",
						"http://p0.jmstatic.com//jpartner/ueditor/partner/13c547b56e7654a63c949890781e73ef.jpg",
						"http://p0.jmstatic.com//jpartner/ueditor/partner/44371f3f82f869298cb8f814aef2598c.jpg",
						"http://p0.jmstatic.com//jpartner/ueditor/partner/310c1454f62f35c3ea277f09d61246a8.png",
						"http://p0.jmstatic.com//jpartner/ueditor/partner/765555dc395f7cfb2c4b6ba0c9e54192.png",
						"http://p0.jmstatic.com//jpartner/ueditor/partner/c3708012c3bcc5871e2cc64fd66f0532.png",
						"http://p0.jmstatic.com//jpartner/ueditor/partner/146121edb79cf1c856a7ebe9aae3f212.png",
						"http://p0.jmstatic.com//jpartner/ueditor/partner/b1df903b5cdbf816272f47d10083b35c.png",
						"http://p0.jmstatic.com//jpartner/ueditor/partner/6f7d861d671b9a842d81661e97d7dbe9.jpg"
					]
				},{
					"title":"商品参数",
					"message":[{
						"m1":"商品名称",
						"m2":"七度空间绵柔日夜组合6包共42片"
					},{
						"m1":"品牌",
						"m2":"七度空间"
					},{
						"m1":"退货政策",
						"m2":"本商品支持7天无条件退货"
					}]	
				},{
					"title":"用户评论"
				}]

			}
		},
		computed: {
			getList1() {
				
				console.log(this.$store.state.jiaju[this.id]);
				return this.$store.state.jiaju[this.id]
			}

		},
		methods: {
			timeDown() {
				let limitTime = this.limitTime;
				let d = parseInt(limitTime / (24 * 60 * 60))
				let h = this.formate(parseInt(limitTime / (60 * 60) % 24))
				let m = this.formate(parseInt(limitTime / 60 % 60))
				let s = this.formate(parseInt(limitTime % 60))
				if(limitTime <= 0) {
					// let btn = document.getElementsByClassName("btn")[0].firstChild;
					this.stop = true;
					this.time = '订单超时，请重新下单'
					//btn.setAttribute("disabled", true);
					return;
				}
				if(d > 0) {
					this.time = `${d}天${h}小时${m}分${s}秒`;
				}
				if(d <= 0 && h > 0) {
					this.time = `${h}小时${m}分${s}秒`;
				}
				if(d <= 0 && h <= 0) {
					this.time = `${m}分${s}秒`;
				}
			},
			formate(time) {
				if(time >= 10) {
					return time
				} else {
					return `0${time}`
				}
			},
			dian(index){
					this.nav=index;
			},
			back(){
				window.history.back();
			},
			toTop() {
                    document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
		},
		mounted() {
			this.timeDown();
			let time = setInterval(() => {
				if(this.stop == true) {
					clearInterval(time);
				}
				this.limitTime--;
				this.timeDown();
			}, 1000)
		}
	}
</script>

<style scoped>
	.ginfo{
		background: #f5f5f5;
		
	}
	.top {
		padding: .14rem 0;
		margin-bottom: .1rem;
		background: white;
	}
	section{
		
		margin-top: .1rem;
		background: white;
		font-size: 14px;
		padding:.16rem .14rem;
	}
	.add{
		
		margin-top: .1rem;
		background: white url(../img/right.png) no-repeat right center;
		font-size: 11px;
		padding:.16rem .14rem;
		
	}
	.rules{
		
		margin-top: .1rem;
		background: white;
		font-size: 11px;
		padding:.16rem .14rem;
		
	}
	.server{
		
		margin-top: .1rem;
		background: white url(../img/logowx.png) no-repeat 13px 13px;
		background-size: 50px;
		font-size: 13px;
		padding:.16rem .14rem;
		
	}
	.size{
		
		margin-top: .1rem;
		background: white;
		font-size: 11px;
		padding:.16rem .14rem;
		
	}
	.pinglun{
		
		margin-top: .1rem;
		background: white;
		font-size: 11px;	
	}
	.tab{
		margin-top: .1rem;
		background: white;
		font-size: 11px;	
		
	}
	.footer{
		width: 100%;
		height: .55rem;
		line-height: .55rem;
		margin-top: .1rem;
		background: white;
		font-size: 11px;	
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.ginfo .img {
		width: 100%;
		height: 3.2rem;
		
		margin-bottom: .2rem;
	}
	
	.text b {
		color: #ff4070;
		font-size: 20px;
	}
	.text{
		background: white;
		padding:0 .14rem;
	}
	.text strong {
		font-weight: normal;
		color: white;
		background: #FF4070;
		border-radius: 3px;
	}
	
	.text i {
		color: #666;
		font-size: 14px;
	}
	
	.text span {
		color: #666;
		font-size: 14px;
		padding-left: .4rem;
	}
	
	.text p {
		padding: .17rem 0;
		font-size: 14px;
		color: #666;
		text-decoration: line-through;
		
	}
	section span{
		color: #FF4070;
	}
	section i{
		color: #333;
		line-height: .23rem;
	}
	.add i{
		padding-right: .27rem;
	}
	.add p{
		color: #FF4070;
		padding-top: .1rem;
		padding-left: .6rem;
	}
	.rules h3{
		font-weight: normal;
		background: white url(../img/right.png) no-repeat right center;
	}
	.rules h3 a{
		padding-left: 1.75rem;
		color: #666;
		
	}
	.rules ul{
		padding-top: .25rem;
		height: .3rem;
	}
	.rules ul li{
		width: .8rem;
		
		float: left;
		margin-right: .2rem;
		background: url(../img/right.png) no-repeat 43px center;
	}
	.rules ul li:first-child{
	
		color: #FF4070;
	}
	.rules ul li:last-child{
		width: 1.3rem;
		background: none;
		margin-right: 0;
	}
	.server p{
		padding-left: .7rem;
		padding-top: .1rem;
	}
	.server span{
		padding-left: .7rem;
		line-height: .3rem;
		color: #666;
	}
	.server h4{
		display: inline-block;
		margin-top: .2rem;
		width: .7rem;
		height: .2rem;
		text-align: center;
		color: white;
		background: #FF4070;
		border-radius: 5px;
		font-weight: normal;
		line-height: .2rem;
		font-size: 12px;
	}
	.server i{
		color: #666;
	}
	.size h3{
		width: 1.6rem;
		margin-top: .14rem;
		font-weight: normal;
		padding: .07rem .15rem;
		background: #FF4070;
		color: white;
		border-radius: .13rem;
	}
	.pinglun p{
		height: .4rem;
		padding-left: .12rem;
		line-height: .4rem;
		border-bottom: solid 1px #ccc;
		background: url(../img/right.png) no-repeat right center;
		background-size:.2rem;
	}
	.tab ul{
		height: .5rem;
		line-height: .5rem;
		border-bottom: solid 1px #ccc;
	}
	.tab ul li{
		line-height: .5rem;
		
		float: left;
		margin: 0 .33rem;
	}
	.current{
		color: #FF4070;
		border-bottom: solid 2px #ff4070;
	}
	.tab img{
		width: 100%;
		margin-left: 0;
	}
	.tab li p{
		padding: .12rem;
		
	}
	
	.tab li p i{
		color: #666;
		padding-right: .5rem;
	}
	.footer  li{
		float: left;
		margin-top: .09rem;
	}
	.footer  li i{
		font-size: 8px;
	}
	.footer .back{
		display: inline-block;
		width: .5rem;
		height: .4rem;
		text-align: center;
		line-height: .4rem;
		border: solid 1px #CCCCCC;
		border-radius: 50%;
		color: #666666;
		font-size: 11px;
		margin-left: .12rem;
	}
	.footer  li:nth-child(2){
		margin-left: .4rem;
		margin-top: 0;
		font-size: 16px;
		color: #666;
	}
	.footer  li:nth-child(3){
		width: 1.5rem;
		height: .4rem;
		background: #FF4070;
		text-align: center;
		line-height: .4rem;
		color: white;
		margin-left: .6rem;
		margin-top: .1rem;
		font-size: 12px;
		border-radius: 20px;
	}
	.toTop{
		width: .4rem;
		height: .4rem;
		border-radius: 50%;
		border: solid 1px #CCCCCC;
		position: fixed;
		bottom: .5rem;
		right: .3rem;
		text-align: center;
		line-height: .4rem;
	}
</style>