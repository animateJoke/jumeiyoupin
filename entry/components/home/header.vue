<template>
	<div>
		<div class="header">
			<a href="#">
				<</a>
					<a href="#">我的聚美</a>
					<i class="iconfont">&#xe66c;</i>
	</div>
	<div class="view">
		<img src="../../img/default.png" />
		<p>{{tel}}</p>
		<span>普通会员</span>
	</div>
	<div class="item">
		<ul>
			<li>
				<img src="../../img/wishlist.png" />
				<p>心愿单</p>
			</li>
			<li><img src="../../img/onsale.png" />
				<p>开售提醒</p>
			</li>
			<li>
				<img src="../../img/fav.png" />
				<p>收藏</p>
			</li>
		</ul>
	</div>
	</div>
</template>

<script>
	export default{
	    data(){
	        return {
                tel:sessionStorage.getItem("tel")
			}
		}
	}
</script>

<style scoped="scoped">
	.header {
		width: 100%;
		height: 0.38rem;
		background: #fd4d71;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.16rem;
		color: white;
	}
	
	.header i {
		margin-right: 0.1rem;
		font-size: 0.30rem;
	}
	
	.header a {
		text-decoration: none;
		color: white;
	}
	
	.header a:first-child {
		margin-left: 0.1rem;
		font-size: 0.30rem;
	}
	.view {
		width: 100%;
		height: 0.84rem;
		background: #fd4d71;
		margin-top: -0.01rem;
		position: relative;
	}
	
	.view img {
		position: absolute;
		width: 0.7rem;
		top: 0.5rem;
		left: 0.38rem;
	}
	.view p{
		float: left;
		margin-top: 0.4rem;
		margin-left: 1.3rem;
		font-size: 0.14rem;
		color: white;
	}
	.view span{
		display: block;
		width: 0.7rem;
		height: 0.21rem;
		line-height: 0.21rem;
		text-align: center;
		border-radius: 0.1rem;
		float: left;
		margin-top: 0.6rem;
		margin-left: -0.8rem;
		font-size: 0.14rem;
		background: #fe779e;
		color: white;
	}
	.item{
		width: 100%;
		height: 0.74rem;
		background: white;
		
	}
	.item ul li{
		float: left;
		width: 0.81rem;
		height: 0.74rem;
		font-size: 0.14rem;
		text-align: center;
	}
	.item ul li:first-child{
		margin-left: 1.3rem;
	}
	.item ul li img{
		width: 0.25rem;
		margin-top: 0.1rem;
	}
	.item ul li p{
		margin-top: 0.1rem;
	}
</style>