<template>
	<div class="nav">
		<ul>
			<li >
				<a href="#/home/group/rmd" :class="{'current':index==rmd}">推荐</a>
			</li>
			<li>
				<a href="#/home/group/mama" :class="{'current':index==mama}">母婴健康</a>
			</li>
			<li>
				<a href="#/home/group/beauti" :class="{'current':index==beauti}">美妆</a>
			</li>
			<li>
				<a href="#/home/group/jiaju" :class="{'current':index==jiaju}">家居</a>
			</li>
			<li>
				<a href="#/home/group/food" :class="{'current':index==food}">食品保健</a>
			</li>
			<li>
				<a href="#/home/index1/brand">内衣</a>
			</li>
			<li>
				<a href="#/home/index1/brand">饰品配饰</a>
			</li>
			<li>
				<a href="#/home/index1/brand">女装</a>
			</li>
			<li>
				<a href="#/home/index1/brand">鞋类</a>
			</li>
			<li>
				<a href="#/home/index1/brand">数码家电</a>
			</li>
			<li>
				<a href="#/home/index1/brand">礼品箱包</a>
			</li>
			<li>
				<a href="#/home/index1/brand">运动户外</a>
			</li>
			<li>
				<a href="#/home/index1/brand">下期预告</a>
			</li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style scoped>
    .nav::-webkit-scrollbar{
        display:none;
    }
    .nav{
        width:100%;
        height:45px;
        border: solid 1px #eee;
        background: white;
        overflow:auto;
    }
    .nav ul{
    	
        width:350%;
    }
    .nav ul li{
        float:left;
        padding:0 20px;
        line-height:45px;
        font-size: 14px;
        
    }
    .nav ul li a{
    	height:43px;
    	display: block;
    	color: #666;
    }
    .nav .current{
    	
		color: #FF4070;
		border-bottom: solid 2px #ff4070;
	
    }
</style>