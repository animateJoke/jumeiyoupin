<template>
    <div class="main">
        <xsearch/>
        <xnav/>
        <router-view></router-view>
        <xfooter />
    </div>
</template>

<script>
    import xfooter from "./public/footerbar.vue";
    import xsearch from "./home/index/search.vue";
    import xnav from "./home/index/nav.vue";
    export default {
        components:{
            xfooter,
            xsearch,
            xnav
        }
    }
</script>

<style scoped="">
    .main{
        width:100%;
        height:100%;
    }
</style>