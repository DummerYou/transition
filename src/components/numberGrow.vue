<template>
<div class="number-grow-warp">
  <span ref="numberGrow" :data-time="time" class="number-grow" :data-value="value">0</span>
  </div>
</template>
 
<script>
export default {
  props: {
    time: {
      type: Number, //时间
      default: 2
    },
    value: {
      type: Number, //值
      default: 0
    },
    toFixed:{
      type: Number,  //几位小数点
      default: 0
    },
    replaceState: {
      type: Number,  //是否有分隔符
      default: 0
    },
  },
  methods: {
    numberGrow (ele) {
      let _this = this
      let step = (_this.value * 10) / (_this.time * 300)
      let current = 0
      let start = 0
      let t = setInterval(function () {
        start += step
        if (start > _this.value) {
          clearInterval(t)
          start = _this.value
          t = null
        }
        if (current === start) {
          return
        }
        current = start.toFixed(_this.toFixed)
        if (_this.replaceState) {
           current = current.replace(/\B(?=(?:\d{3})+\b)/g, ',');
        }
        ele.innerHTML = current.toString()
      }, 10)
    }
  },
  mounted () {
    this.numberGrow(this.$refs.numberGrow)
    // console.log(this.value)
  }
}
</script>
 
<style>
.number-grow-warp{
  transform: translateZ(0);
  display: inline-block;
}

</style>