<template>
    <div class="jieshui">
        <img class="backdrop" src="../assets/imgs/jieshui/Jieshuibao@3x.png" />
        <img class="qian" src="../assets/imgs/jieshui/qian.gif" />
        <img class="green-top" src="../assets/imgs/jieshui/green-top@3x.png" />
        <img class="mengban" src="../assets/imgs/jieshui/mengban@3x.png" />
        <img class="form-left1 animation1" src="../assets/imgs/jieshui/form-left1@3x.png" />
        <img class="form-left2 animation4" src="../assets/imgs/jieshui/form-left2@3x.png" />
        <img class="form-left3 animation2" src="../assets/imgs/jieshui/form-left3@3x.png" />
        <img class="form-right animation3" src="../assets/imgs/jieshui/form-right@3x.png" />
        <img class="cloud-left1 animation3" src="../assets/imgs/jieshui/cloud-left1@3x.png" />
        <img class="cloud-left2 animation2" src="../assets/imgs/jieshui/cloud-left2@3x.png" />
        <img class="cloud-right animation1" src="../assets/imgs/jieshui/cloud-right@3x.png" />
        <img class="aircraft3 animation3" src="../assets/imgs/shared/aircraft3.gif" />
        <img class="paper" src="../assets/imgs/jieshui/paper.gif" />
        <img class="shuibao" src="../assets/imgs/jieshui/shuibao@3x 2.png" />
        <div class="yiny"></div>
        <img class="guang" src="../assets/imgs/shared/guang.gif" />
    </div>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.jieshui {
    width: 100%;
    height: 100%;
    position: relative;
    .backdrop {
        width: 796px;
        height: 644px;
        position: absolute;
        top: 186px;
        left: 54px;
    }
    .green-top{
        width: 430px;
        height: 248px;
        position: absolute;
        top: 232px;
        left: 208px;
    }
    .mengban{
        width: 505px;
        height: 277px;
        position: absolute;
        top: 186px;
        left: 208px;
    }
    .qian{
 width: 284px;
        height: 155.6px;
        position: absolute;
        top: 230px;
        left: 333px;
    }
    .form-left1{
        width: 100px;
        height: 48px;
        position: absolute;
         top: 439px;
        left: 94px;
        z-index: 5;
    }
    .form-left2{
        width: 163px;
        height: 131px;
        position: absolute;
        top: 491px;
        left: 119px;
        z-index: 8;
    }
    .form-left3{
        width: 92px;
        height: 75px;
        position: absolute;
        top: 469px;
        left: 245px;
        z-index: 7;
    }
    .form-right{
        width: 100px;
        height: 82px;
        position: absolute;
        top: 548px;
        left: 580px;
    }
    .cloud-left1{
        width: 49px;
        height: 46px;
        position: absolute;
        top: 297px;
        left: 179px;
        z-index: -1;
    }
    .cloud-left2{
        width: 99px;
        height: 96px;
        position: absolute;
        top: 350px;
        left: 185px;
    }
    .cloud-right{
        width: 44px;
        height: 43px;
        position: absolute;
        top: 279px;
        left: 746px;
    }
    .aircraft3{
        width: 165px;
        height: 165px;
        position: absolute;
        top: 80px;
        left: 482px;
    }
    .paper{
        width: 155px;
        height: 252px;
        position: absolute;
        top: 508px;
        left:303px;
    }
    .shuibao{
        width: 41px;
        height: 46px;
        position: absolute;
        top: 720px;
        left:298px;
    }
    .guang{
        width: 66px;
        height: 65px;
        position: absolute;
        top: 637px;
        left:393px;
        z-index: -1;
    }
        .yiny {
        width: 28px;
        height: 21px;
        box-shadow: 0px 2px 20px 0px rgba(48, 236, 255, 0.6);
        border-radius: 50%;
        z-index: -2;
        transform: rotate(-48deg);
        -ms-transform: rotate(-48deg); /* IE 9 */
        -moz-transform: rotate(-48deg); /* Firefox */
        -webkit-transform: rotate(-48deg); /* Safari 和 Chrome */
        -o-transform: rotate(-48deg); /* Opera */
        position: absolute;
        top: 658px;
        left: 411px;
        animation: yycloudan 1s linear infinite;
        -moz-animation: yycloudan 1s linear infinite;
        -webkit-animation: yycloudan 1s linear infinite;
        -o-animation: yycloudan 1s linear infinite;
    }
    .animation1 {
        animation: cloudan1 15s linear infinite;
        -moz-animation: cloudan1 15s linear infinite;
        -webkit-animation: cloudan1 15s linear infinite;
        -o-animation: cloudan1 15s linear infinite;
    }
    .animation2 {
        animation: cloudan1 30s linear infinite;
        -moz-animation: cloudan1 30s linear infinite;
        -webkit-animation: cloudan1 30s linear infinite;
        -o-animation: cloudan1 30s linear infinite;
    }
    .animation3 {
        animation: cloudan3 30s linear infinite;
        -moz-animation: cloudan3 30s linear infinite;
        -webkit-animation: cloudan3 30s linear infinite;
        -o-animation: cloudan3 30s linear infinite;
    }
    .animation4 {
        animation: cloudan3 20s linear infinite;
        -moz-animation: cloudan3 20s linear infinite;
        -webkit-animation: cloudan3 20s linear infinite;
        -o-animation: cloudan3 20s linear infinite;
    }
    .animation5 {
        animation: cloudan3 25s linear infinite;
        -moz-animation: cloudan3 25s linear infinite;
        -webkit-animation: cloudan3 25s linear infinite;
        -o-animation: cloudan3 25s linear infinite;
    }
    @keyframes cloudan1 {
        0% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(0, 0, 0px);
        }
        25% {
            transform: translate3d(-80px, 150px, 0px);
            -moz-transform: translate3d(-80px, 150px, 0px);
            -o-transform: translate3d(-80px, 150px, 0px);
            -webkit-transform: translate3d(30px, -20px, 0px);
        }
        75% {
            transform: translate3d(-80px, 150px, 0px);
            -moz-transform: translate3d(-80px, 150px, 0px);
            -o-transform: translate3d(-30px, 500px, 0px);
            -webkit-transform: translate3d(-30px, 20px, 0px);
        }
        100% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(0, 0, 0px);
        }
    }
    @keyframes cloudan3 {
        0% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(0, 0, 0px);
        }
        25% {
            transform: translate3d(-80px, 150px, 0px);
            -moz-transform: translate3d(-80px, 150px, 0px);
            -o-transform: translate3d(-80px, 150px, 0px);
            -webkit-transform: translate3d(15px, -10px, 0px);
        }
        75% {
            transform: translate3d(-80px, 150px, 0px);
            -moz-transform: translate3d(-80px, 150px, 0px);
            -o-transform: translate3d(-30px, 500px, 0px);
            -webkit-transform: translate3d(-15px, 10px, 0px);
        }
        100% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(0, 0, 0px);
        }
    }
        @keyframes yycloudan {
        0% {
            box-shadow: 0px 2px 0px 0px rgba(48, 236, 255, 0.6);
        }
        50% {
            box-shadow: 0px 2px 20px 0px rgba(48, 236, 255, 0.6);
        }
        100% {
            box-shadow: 0px 2px 0px 0px rgba(48, 236, 255, 0.6);
        }
    }
}
</style>
