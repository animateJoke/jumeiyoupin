<template>
    <div>
        <xsearch/>
        <xnav/>
        <search_page/>
        <router-view></router-view>
    </div>
</template>

<script>

    import xsearch from "./index/search.vue";
    import xnav from "./index/nav.vue";
    import search_page from "./index/search_page.vue";
    export default {
        components:{
            xsearch,
            xnav,
            search_page
        }
    }
</script>

<style>

</style>