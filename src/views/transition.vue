<!--  -->
<template>
<div class=''>

    <div class="box hover2"></div>
    <div class="box hover3"></div>
    <div class="box hover4"></div>
    <div class="box hover5"></div>
    <div class="box hover6"></div>
    <div class="box hover7"></div>
    <div class="box hover8"></div>
    <div class="box hover9"></div>
    <div class="box hover91"></div>
    <div class="box hover10"></div>
    <div class="box hover11"></div>
    <div class="box hover12"></div>
    <div class="box hover1" style="background: #fafafa;"></div>
    <div class="box box1 hover1" style="background: #fafafa;"></div>
</div>
</template>

<script>

export default {
components: {},
data() {
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.box{
    display: inline-block;
    width: 100px;height: 100px;margin: 25px;
    background: #aaa;
    box-sizing: border-box;
    transition: all 2s;
    &.speed10{
        transition: all 10s;
    }
    &.box1{
        border:1px solid rgba(0,104,255,0);
    }
    &:hover.hover2{
        height: 500px;
    }
    &:hover.hover3{
        margin-top: 100px;
    }
    &:hover.hover4{
        transform: translateY(100px);
    }
    &:hover.hover5{
        transform: translate3d(0,100px,0)
    }
    &:hover.hover6{
        transform: rotate(45deg)
    }
    &:hover.hover7{
        transform: scale(0.5, 2)
    }
    &:hover.hover8{
        transform: skew(30deg, 30deg)
    }
    &.hover9{
        transform-origin:0 0;
    }
    &:hover.hover9{
        transform: rotate(45deg)
    }
    &:hover.hover91{
        transform-origin:0 0;
        transform: rotate(45deg)
    }
    &:hover.hover10{
        transform: rotate(45deg) scale(0.5) skew(30deg, 30deg) translate(100px, 100px);
    }
    &:hover.hover11{
        opacity: 0;
    }
    &.hover12{
        transition-timing-function: ease;
    }
    &:hover.hover12{
        height: 300px;
    }
    

    &:hover.hover1{
        border:1px solid rgba(0,104,255,1);
    }
}
</style>