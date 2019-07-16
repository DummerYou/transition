<!--  -->
<template>
<div class=''></div>
</template>

<script>
let _ = require('lodash')
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
    //https://www.lodashjs.com/docs/latest
  // 循环5次数
  _.times(5,function(i){
    console.log(i);
  });
  // 深度 copy 
  let objA = {name:'zzl'};
  let objB = _.cloneDeep(objA);
  console.log(objB);
  // 随机数
  console.log(_.random(5,80));
  // 对象扩展
  let objC = {"names": "colin", "car": "suzuki"};
  let objD = {"name": "james", "age": 17};
  let objE = _.assign(objC, objD);
  console.log(objE); // 合并到了一起
  // 筛选
  let objF = {"name": "colin", "car": "suzuki", "age": 17};
  console.log(_.omit(objF,['car','age'])); // 移除 car 和 age 保留 name
  console.log(_.omit(objF,'name')); // 移除 name 保留 car 和 age
  console.log(_.pick(objF,['name','age'])); // 筛选出 name age
  // 随机元素
  let objG = ["Colin", "John", "James", "Lily", "Mary"];
  console.log(_.sample(objG));// 随机一个
  console.log(_.sample(objG,2));// 随机两个
  // JSON.parse 错误处理      
  console.log(parseLodash('{"name": "colin"}'));
  function parseLodash(str){
    return _.attempt(JSON.parse.bind(null, str));
  }
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

</style>