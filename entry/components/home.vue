<template>
    <div class="main">
        <router-view></router-view>
        <xfooter />
    </div>
</template>

<script>
    import xfooter from "./public/footerbar.vue";

    export default {
        components:{
            xfooter
        }
    }
</script>

<style scoped="">
    .main{
        width:100%;
        height:100%;
    }
</style>