<template>
    <div>
        <div class="header">
            <a href="#">
                <</a>
            <a href="#">我的聚美</a>
            <i class="iconfont">&#xe66c;</i>
        </div>
        <div class="login">
            <img src="../../img/default.png" />
            <ul>
                <li>
                    <a href="#/register">注册</a>
                </li>
                <li>|</li>
                <li>
                    <a href="#/login">登录</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "center-h1"
    }
</script>

<style scoped>
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

    .login {
        width: 100%;
        height: 1.58rem;
        background: #fd4d71;
        margin-top: -0.01rem;
        text-align: center;
    }

    .login img {
        width: 0.7rem;
        margin-top: 0.3rem;
    }

    .login ul {
        width: 100%;
        display: flex;
        margin-top: 0.15rem;
        justify-content: center;
    }

    .login ul li {
        width: 0.5rem;
        float: left;
        font-size: 0.2rem;
        font-weight: 600;
        color: white;
    }

    .login ul li a {
        text-decoration: none;
        color: white;
    }

</style>