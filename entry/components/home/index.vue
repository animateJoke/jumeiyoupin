<template>
    <div>
        <xsearch/>
        <xnav/>
        <router-view></router-view>
    </div>
</template>

<script>
    import xsearch from "./index/search.vue";
    import xnav from "./index/nav.vue";
    export default {
        components:{
            xsearch,
            xnav
        }
    }
</script>

<style>

</style>