<template>
	<div style="width: 100%;height: 100%;">
		<div class="header1">
			<a href="#/home/center">
				<</a>
					<a href="#">注册</a>
					<a href="#/login">登录</a>
		</div>
		<form>
			<input type="text" v-model="username" placeholder="请输入用户名" @blur="jiaodian" />
			<span v-text="msg1"></span>
			<input type="text" v-model="tel" placeholder="请输入11位号码" @blur="jiao" />
			<span v-text="msg2"></span>
			<input type="password" v-model="pwd" placeholder="6-16位登录密码" @blur="dian" />
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
				msg1: "",
				msg2: "",
				msg3: "",
				flag2: false,
				flag1: false,
				flag3: false
			}
		},
		methods: {
			jiao() {
				this.flag1 = /^((13[0-9])|(14[5-7])|(15[0-35-9])|(18[0-9]))\d{8}$/.test(this.tel);
				if(this.flag1 == false) {
					this.msg2 = "手机号不对";
				} else {
					this.msg2 = "";
				}
			},
			dian() {
				this.flag3 = /^\w{6,16}$/.test(this.pwd);
				if(this.flag3 == false) {
					this.msg3 = "密码格式不正确";
				} else {
					this.msg3 = "";
				}
			},

			jiaodian() {
				var selff = this;

				this.flag2 = /^\w{6,16}$/.test(this.username);
				if(this.flag2 == false) {
					this.msg1 = "用户名格式不正确";
				} else {
					this.msg1 = "";
				}

				if(this.flag2) {
					$.ajax({
						url: "http://localhost:55555/register",
						type: "post",
						data: {
							u_name: selff.username
						},
						success: function(res) {
							if(res.status == 0) {
								selff.msg1 = res.msg;
								selff.flag2 = false;
							} else if(res.status == 1) {

								selff.flag2 = true;
							}
						}
					})
				}

			},
			register() {
				var self = this;

				if(self.flag1 && self.flag2 && self.flag3) {

					$.ajax({
						type: "post",
						url: "http://localhost:55555/register/register",
						data: {
							u_name: self.username,
							u_pwd: self.pwd,
							u_tel: self.tel
						}
					}).done((res) => {
						alert("注册成功")
						window.location.href = "#/login"
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
	
	span {
		color: pink;
		display: inline-block;
		margin-top: 0.1rem;
		font-size: 0.14rem;
	}
>>>>>>> 610c6bc2d8b025739bcabd411116d5e2acc27470
</style>