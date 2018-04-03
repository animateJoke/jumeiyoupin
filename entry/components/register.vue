<template>
	<div style="width: 100%;height: 100%;">
		<div class="header1">
			<a href="#/home/center">
				<</a>
					<a href="#">注册</a>
					<a href="#/login">登录</a>
		</div>
		<form>
			<input type="text" v-model="username" placeholder="请输入用户名" />
			<span v-text="msg1"></span>
			<input type="text" v-model="tel" placeholder="请输入11位号码" />
			<span v-text="msg2"></span>
			<input type="password" v-model="pwd" placeholder="6-16位登录密码" />
			<span v-text="msg3"></span>
			<input type="submit" value="注册" @click="register" />
		</form>
		<p>点击注册，表示同意《聚美优品用户协议》</p>
	</div>
</template>

<script>
	import $ from "jquery"
	export default {
		data() {
			return {
				username: "",
				tel: "",
				pwd: "",
				msg1:"",
				msg2:"",
				msg3:""
			}
		},
		methods: {
			register() {
				var self = this;
				var flag1 = true;
					var flag2 = true;
					var flag3 = true;
					flag1 = /^((13[0-9])|(14[5-7])|(15[0-35-9])|(18[0-9]))\d{8}$/.test(self.tel);
					if(flag1 == false) {
						self.msg2="手机号不对";
					}else{
						self.msg2="";
					}
					flag2=/^\w{6,16}$/.test(self.username);
					if(flag2==false){
						self.msg1="用户名格式不正确";
					}else{
						self.msg1="";
					}
					flag3=/^\w{6,16}$/.test(self.pwd);
					if(flag3==false){
						self.msg3="密码格式不正确";
					}else{
						self.msg3="";
					}
					if(flag1,flag2,flag3){
						
					
				$.ajax({
					type: "post",
					url: "http://localhost:55556/register/register",
					data: {
						u_name: self.username,
						u_pwd: self.pwd,
						u_tel: self.tel
					}
				}).done((res) => {
				 window.location.href="#/login"
				})
				}
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
	
	.header1 a:last-child {
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
	
	form {
		width: 100%;
		text-align: center;
	}
	
	form input {
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
	
	form input:first-child {
		margin-top: 0.2rem;
	}
	
	form input:last-child {
		background: pink;
		color: white;
	}
	
	p {
		text-align: center;
		color: #999999;
		margin-top: 0.15rem;
	}
	span{
	color: pink;
	display: inline-block;
	margin-top: 0.1rem;
	font-size: 0.14rem;
	}
</style>