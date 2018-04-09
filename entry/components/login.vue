<template>
	<div style="width: 100%;height: 100%;">
		<div class="header1">
			<a href="#/home/center"><</a>
			<a href="#">登录</a>
			<a href="#/register">注册</a>
		</div>
		<form>
			<input type="text" placeholder="请输入用户名" v-model="username" />
			<input type="password" placeholder="6-16位登录密码" v-model="pwd" />
			<input type="submit" value="登录" @click="login" />
		</form>
	</div>
</template>

<script>
	
	import $ from "jquery"
	export default {
		data() {
			return {
				username: "",
				pwd: "",
			}
		},
		methods: {
			login() {
				var self = this;
				$.ajax({
					type: "post",
					url: "http://localhost:55555/register/login",
					data: {
						u_name: self.username,
						u_pwd: self.pwd
					}
				}).done((res) => {
					if(res.length==1){
						    window.location.href="#/home/index1/index2";
                        	self.$store.state.status = 1;
                        }else {
                            alert("账号或密码错误");
                        }
				})
				return false;
			}
		}
	}
	
</script>

<style scoped>
	.header1 {
		width: 100%;
		height: 0.43rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.16rem;
		color: white;
		border-bottom: 0.02rem solid #C2C2C2;
	}
	
	.header1 a:last-child{
		margin-right: 0.1rem;
	}
	
	.header1 a {
		text-decoration: none;
		color: black;
	}
	
	.header1 a:first-child {
		margin-left: 0.1rem;
		font-size: 0.30rem;
	}
	form{
		width: 100%;
	}
	form input{
		width: 2.85rem;
		height: 0.36rem;
		display: block;
		margin: auto;
		margin-top: 0.2rem;
		border: none;
		background: #F5F5F5;
		padding-left: 0.1rem;
		border-radius: 0.2rem;
	}
	form input:first-child{
		margin-top: 0.2rem;
	}
	form input:last-child{
		background: pink;
		color: white;
	}
</style>