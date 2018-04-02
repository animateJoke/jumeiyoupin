<template>
    <div>
        <xsearch/>
        <xnav/>
        <xxsearch/>
        <search_2/>
        <router-view></router-view>
    </div>
</template>

<script>
    import xxsearch from "./index/search_page.vue";
    import search_2 from "./index/search_2.vue";
    import xsearch from "./index/search.vue";
    import xnav from "./index/nav.vue";
    export default {
        components:{
            xsearch,
            xnav,
            xxsearch,
            search_2
        }
    }
</script>

<style>

</style>