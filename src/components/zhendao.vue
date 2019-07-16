<template>
    <div class="zhendao">
        <!-- <img class="elevator" src="../assets/imgs/paatImg/elevator.gif" alt=""> -->
        <img class="backdrop" src="../assets/imgs/zhendao/zhendaoqifu@3x.png">
        <div class="yiny"></div>
        <img class="guang" src="../assets/imgs/shared/guang.gif">
        <img class="huaban-small" src="../assets/imgs/zhendao/huaban-small@3x.png">
        <img class="cloud-left1 animation3" src="../assets/imgs/zhendao/cloud-left1@3x.png">
        <img class="cloud-left2 animation2" src="../assets/imgs/zhendao/cloud-left2@3x.png">
        <img class="cloud-right1 animation1" src="../assets/imgs/zhendao/cloud-right1@3x.png">
        <img class="cloud-right2 animation4" src="../assets/imgs/zhendao/cloud-right2@3x.png">
        <img class="car caran" src="../assets/imgs/zhendao/car@3x.png">
        <img class="aircraft1 animation5" src="../assets/imgs/shared/aircraft1.gif">
        <img class="aircraft3 animation3" src="../assets/imgs/shared/aircraft3.gif">
        <!-- <img class="business" src="../assets/imgs/paatImg/business.gif" /> -->
        <!-- <img class="cloud1 animation10" src="../assets/imgs/jieshui/cloud-left1@3x.png" />
        <img class="cloud2 animation8" src="../assets/imgs/jieshui/cloud-left2@3x.png" />
        <img class="cloud3 animation6" src="../assets/imgs/jieshui/cloud-right@3x.png" />-->
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
.zhendao {
    width: 100%;
    height: 100%;
    position: relative;

    .backdrop {
        width: 772px;
        height: 632px;
        position: absolute;
        top: 194px;
        left: 66px;
    }
    .yiny {
        width: 50px;
        height: 23px;
        box-shadow: 0px 2px 20px 0px rgba(48, 236, 255, 0.6);
        // box-shadow: 0px 2px 20px 0px red;
        border-radius: 50%;
        transform: rotate(-48deg);
        -ms-transform: rotate(-48deg); /* IE 9 */
        -moz-transform: rotate(-48deg); /* Firefox */
        -webkit-transform: rotate(-48deg); /* Safari 和 Chrome */
        -o-transform: rotate(-48deg); /* Opera */
        position: absolute;
        top: 319px;
        left: 428px;
        animation: yycloudan 1s linear infinite;
        -moz-animation: yycloudan 1s linear infinite;
        -webkit-animation: yycloudan 1s linear infinite;
        -o-animation: yycloudan 1s linear infinite;
    }
    .guang {
        width: 60px;
        height: 58px;
        position: absolute;
        top: 309px;
        left: 418px;
    }
    .huaban-small {
        width: 199px;
        height: 168px;
        position: absolute;
        top: 240px;
        left: 315px;
    }
    .cloud-left1 {
        width: 78px;
        height: 76px;
        position: absolute;
        top: 220px;
        left: 210px;
    }
    .cloud-left2 {
        width: 30px;
        height: 29px;
        position: absolute;
        top: 153px;
        left: 362px;
    }
    .cloud-right1 {
        width: 108px;
        height: 105px;
        position: absolute;
        top: 380px;
        left: 630px;
    }
    .cloud-right2 {
        width: 34px;
        height: 33px;
        position: absolute;
        top: 327px;
        left: 750px;
    }

    .aircraft1 {
        width: 166px;
        height: 266px;
        position: absolute;
        top: 140px;
        left: 540px;
    }
    .aircraft3 {
        width: 165px;
        height: 165px;
        position: absolute;
        top: 500px;
        left: 205px;
    }
    .car {
        width: 107px;
        height: 67px;
        position: absolute;
        top: 740px;
        left: 300px;
        animation: car1 15s linear forwards;
        -moz-animation: car1 15s linear forwards;
        -webkit-animation: car1 1s linear forwards;
        -o-animation: car1 15s linear forwards;
        // animation-fill-mode:forwards;
    }
    @keyframes car1 {
        0% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(0, 0, 0px);
        }
        100% {
            transform: translate3d(160px, 0, 0px);
            -moz-transform: translate3d(160px, 0, 0px);
            -o-transform: translate3d(160px, 0, 0px);
            -webkit-transform: translate3d(160px, 0, 0px);
        }
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
            box-shadow: 0px 2px 0px 0px rgba(143, 216, 224, 0.6);
        }
        50% {
            box-shadow: 0px 2px 20px 0px rgba(48, 236, 255, 0.8);
        }
        100% {
            box-shadow: 0px 2px 0px 0px rgba(48, 236, 255, 0.6);
        }
    }
}
</style>
