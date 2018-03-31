<template>
    <div class="footer">
        <ul>
            <li>
                <a href="#/home/index1/index2">首页</a>
            </li>
            <li>
                <a href="#/home/group">拼团</a>
            </li>
            <li>
                <a href="#/home/cart">购物车</a>
            </li>
            <li>
                <a href="#/home/center">我的</a>
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style scoped="">
    .footer{
        position:fixed;
        bottom:0;
        left: 0;
        height:50px;
        background-color:#fff;
        width:100%;
        border-top:1px solid #ccc;
    }
    .footer ul{
        display:flex;
        width:100%;
        height:100%;
    }
    .footer ul li{
        flex:1;
        line-height:50px;
        text-align:center;
    }
</style>