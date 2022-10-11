<template>
  <div @click="handleClick" v-show="show" class="to-top-container">
      Top
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    created(){
        this.$bus.$on("mainScroll", this.handleScroll);
    },
    destoryed() {
        this.$bus.$off("mainScroll", this.handleScroll);
    },
    methods: {
        handleScroll(dom) {
            if (!dom) {
                this.show = false;
                return;
            }
            this.show = dom.scrollTop >= 500
        },
        handleClick() {
            this.$bus.$emit("setMainScroll",0) 
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
    background: @primary;
    right: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    right: 50px;
    bottom: 50px;
    z-index: 99;
    line-height: 50px;
    text-align: center;
}
</style>