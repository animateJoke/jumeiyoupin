<template>
	<div style="width: 100%;height: 100%;">
		<div class="header1">
			<a href="#"><</a>
			<a href="#">登录</a>
			<a href="#">注册</a>
		</div>
		<form>
			<input type="text" name=username placeholder="请输入用户名" />
			<input type="password" name=pwd placeholder="6-16位登录密码" />
			<input type="submit" value="登录" />
		</form>
	</div>
</template>

<script>
</script>

<style>
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