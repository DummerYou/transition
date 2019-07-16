<!--  -->
<template>
    <div class>
        <div class="jump" v-for="(item,i) in routes" :key="i"><router-link :to='item.path'><el-button type="primary">{{item.name}}</el-button></router-link></div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {routes:[]};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.routes = this.$router.options.routes
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.jump{
    text-align: center;
    padding: 10px;
}
</style>