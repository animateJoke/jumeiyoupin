<template>
	<div>
        
        <snav/>
       
        <router-view></router-view>
    </div>
</template>

<script>

    import snav from "./group/nav.vue";
    export default {
        components:{
            
            snav
        }
    }
</script>

<style>
div{
	background: #f5f5f5;
}
</style>