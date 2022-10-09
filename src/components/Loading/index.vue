<template>
<img class="loading-container" :src="LoadingUrl" alt="">
</template>

<script>
import LoadingUrl from "@/assets/loading.svg"
export default {
    data() {
        return{
            LoadingUrl,
        } 
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
 .loading-container{
     .self-center();
 }
</style>