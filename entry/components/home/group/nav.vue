<template>
	<div class="nav">
		<ul>
			<li >
				<a href="#/home/group/rmd" @click="fn('rmd')" :class="{'current':index=='rmd'}">推荐</a>
			</li>
			<li>
				<a href="#/home/group/mama" @click="fn('mama')" :class="{'current':index=='mama'}">母婴健康</a>
			</li>
			<li>
				<a href="#/home/group/beauti" @click="fn('beauti')" :class="{'current':index=='beauti'}">美妆</a>
			</li>
			<li>
				<a href="#/home/group/jiaju" @click="fn('jiaju')" :class="{'current':index=='jiaju'}">家居</a>
			</li>
			<li>
				<a href="#/home/group/food" @click="fn('food')" :class="{'current':index=='food'}">食品保健</a>
			</li>
			<li>
				<a href="#/home/group/rmd">内衣</a>
			</li>
			<li>
				<a href="#/home/group/rmd">饰品配饰</a>
			</li>
			<li>
				<a href="#/home/group/rmd">女装</a>
			</li>
			<li>
				<a href="#/home/group/rmd">鞋类</a>
			</li>
			<li>
				<a href="#/home/group/rmd">数码家电</a>
			</li>
			<li>
				<a href="#/home/group/rmd">礼品箱包</a>
			</li>
			<li>
				<a href="#/home/group/rmd">运动户外</a>
			</li>
			<li>
				<a href="#/home/group/rmd">下期预告</a>
			</li>
		</ul>
	</div>
</template>

<script>
	const $=require("jquery");
    export default {
        data(){
            return {
                index:window.location.href.split("group")[1].split("/")[1]
            }
        },
        methods:{
            fn(str){
                this.index=str
            }
        },
        mounted(){
            $(document).on("scroll",function(){
                if($(this).scrollTop()>45){
                    $(".nav").css({
                        position:'fixed',
                        top:0
                    });
                    
                }else {
                    
                    $(".nav").css({
                        position:'static'
                    });
                }
            })
        }
    }
</script>

<style scoped>
    .nav::-webkit-scrollbar{
        display:none;
    }
    .nav{
        width:100%;
        height:45px;
        
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
    	text-decoration: none;
    }
    .nav .current{
    	
		color: #FF4070;
		border-bottom: solid 2px #ff4070;
	
    }
</style>