<!--推荐-->
<template>
	<div class="jiaju">
		<a v-for="(a,index) in getList1" :data-id="index" :href="'#/jinfo?id='+index">
			<img :src="a.image" />
			<div><span v-text="a.name_tag"></span><span v-text="a.name_s"></span></div>
			<p class="p">
				<span class="price"><i v-text="a.new_price"></i></span>
				<span class="oldprice"><i v-text="a.old_price"></i></span>
			</p>
			<p v-text="a.sig_price" class="desc"></p>
			<p class="go">去开团</p>
			<div v-text="a.num_text" class="pl"></div>
		</a>
		<button @click="jiazai">加载更多</button>
	</div>
</template>

<script>
	import $ from "jquery"
	import getAjax from "../../../ajax.js"
	export default {
		data() {
			return {}
		},
		mounted() {

		},
		computed: {
			getList1() {
				return this.$store.state.jiaju
			}
		},
		methods: {
			jiazai() {
				this.$store.state.numJj++;
				getAjax("http://localhost:55555/group/jiaju", this.$store.state.numJj, function(arr) {
					this.$store.state.jiaju = this.$store.state.jiaju.concat(arr);
				}.bind(this))
			},
		}
	}
</script>

<style scoped>
	.jiaju {
		padding-bottom: .5rem;
	}
	
	.jiaju a {
		display: block;
		box-sizing: border-box;
		/*padding-left:1.6rem;*/
		width: 100%;
		margin-bottom: .08rem;
		position: relative;
		background: white;
		line-height: .2rem;
		background-size: 1rem 1rem;
	}
	
	img {
		width: 1.5rem;
		height: 1.5rem;
		margin: .05rem 0 .05rem 1.2rem;
	}
	
	.jiaju a[data-id] div {
		background: white;
		padding-left: .12rem;
	}
	
	.jiaju a[data-id] div span:first-child {
		color: #fe4070;
	}
	
	.jiaju a[data-id] div span {
		color: #666;
	}
	
	.jiaju a[data-id] .p {
		padding-top: .1rem;
	}
	
	.jiaju a[data-id] .go {
		float: right;
		width: .92rem;
		height: .28rem;
		text-align: center;
		line-height: .28rem;
		background: #fe4070;
		color: white;
		border-radius: .14rem;
		margin-top: -.4rem;
		margin-right: .1rem;
	}
	
	.price {
		color: #fe4070;
		padding-left: .12rem;
	}
	
	.price i {
		font-size: 14px;
	}
	
	.oldprice i {
		font-size: 9px;
	}
	
	.oldprice {
		color: #ccc;
		text-decoration: line-through;
	}
	
	.desc {
		color: #ccc;
		padding-left: .12rem;
	}
	.jiaju a[data-id] .pl{
    	position: absolute;
    	left: -.15rem;
    	top: 1rem;
    	width: 1rem;
    	height: .2rem;
    	border: solid 1px #ccc;
    	color: #666;
    	text-align: center;
    	line-height: .2rem;
    	background: #fafafa;
    	border-radius: .2rem;
    }
</style>