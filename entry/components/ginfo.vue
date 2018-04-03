<template>
	<div class="ginfo">
        <img :src="getList1?getList1.image:''"/>
        
    </div>
</template>

<script>
	import $ from "jquery"

    export default {
        data(){
            return {
                id : window.location.href.split("=")[1]
                
            }
        },
        computed : {
            getList1(){
            	console.log(this.id)
                console.log(this.$store.state.list1[this.id]);
                return this.$store.state.list1[this.id]
            }
        }
    }
		
		
	
</script>

<style scoped>
	.ginfo{
		background: white;
	}
	.ginfo img{
		width: 3.2rem;
		height: 3.2rem;
		margin-left: .3rem;
		margin-bottom: .2rem;
	}
</style>