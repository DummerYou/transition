<template>
    <div class="jieyuanbao ">
        <img class="backdrop" src="../assets/imgs/jieyuanbao/jieyuanbao @3x.png">
        <img class="right" src="../assets/imgs/jieyuanbao/right.gif">
        <img class="hand1" src="../assets/imgs/jieyuanbao/hand1.gif">
        <img class="hand2" src="../assets/imgs/jieyuanbao/hand1.gif">
        <img class="lefttou" src="../assets/imgs/jieyuanbao/top@3x.png">
        <img class="top-com" src="../assets/imgs/jieyuanbao/top-com@3x.png">
        <img class="right-com" src="../assets/imgs/jieyuanbao/top-com@3x.png">

        <img class="data-left animation1" src="../assets/imgs/jieyuanbao/data-left.png">
        <img class="data-right animation3" src="../assets/imgs/jieyuanbao/data-right.png">
        <img class="cloud-left animation3" src="../assets/imgs/jieyuanbao/cloud-left@3x.png">
        <img class="cloud-left2 animation2" src="../assets/imgs/jieyuanbao/cloud-left2@3x.png">
        <img class="cloud-right animation1" src="../assets/imgs/jieyuanbao/cloud-right@3x.png">
        <img class="aircraft3 animation3" src="../assets/imgs/shared/aircraft3.gif">
        <div class="yiny"></div>
        <img class="guang" src="../assets/imgs/shared/guang.gif">
        <img class="yuanbao " src="../assets/imgs/jieyuanbao/walk.gif" alt>
        <img class="yuanbaojing " src="../assets/imgs/jieyuanbao/don't move.png" alt>
        <img class="shadow" src="../assets/imgs/jieyuanbao/shadow@3x.png" alt="">
        <img class="tree" src="../assets/imgs/jieyuanbao/tree@3x.png" alt>
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
.jieyuanbao {
    width: 100%;
    height: 100%;
    position: relative;
    .backdrop {
        width: 758px;
        height: 633px;
        position: absolute;
        top: 179px;
        left: 90px;
    }
    .right {
        width: 77px;
        height: 77px;
        position: absolute;
        top: 546px;
        left: 214px;
    }
    .hand1 {
        width: 33px;
        height: 19px;
        position: absolute;
        top: 306px;
        left: 415px;
    }
    .hand2 {
        width: 33px;
        height: 19px;
        position: absolute;
        top: 653px;
        left: 596px;
    }
    .lefttou {
        width: 90px;
        height: 84px;
        position: absolute;
        top: 534px;
        left: 186px;
    }
    .toptou {
        width: 90px;
        height: 84px;
        position: absolute;
        top: 251px;
        left: 368px;
    }
    .top-com {
        width: 77px;
        height: 84px;
        position: absolute;
        top: 251px;
        left: 368px;
    }
    .right-com {
        width: 77px;
        height: 84px;
        position: absolute;
        top: 597px;
        left: 548px;
    }
    .data-left {
        width: 160px;
        height: 128px;
        position: absolute;
        top: 349px;
        left: 159px;
    }
    .data-right {
        width: 99px;
        height: 58px;
        position: absolute;
        top: 513px;
        left: 496px;
    }
    .cloud-left {
        width: 45px;
        height: 43px;
        position: absolute;
        top: 217px;
        left: 224px;
    }
    .cloud-left2 {
        width: 30px;
        height: 29px;
        position: absolute;
        top: 120px;
        left: 325px;
    }
    .cloud-right {
        width: 108px;
        height: 105px;
        position: absolute;
        top: 350px;
        left: 650px;
    }
    .aircraft3 {
        width: 165px;
        height: 165px;
        position: absolute;
        top: 145px;
        left: 585px;
    }

    .yiny {
        width: 41px;
        height: 29px;
        box-shadow: 0px 2px 20px 0px rgba(48, 236, 255, 0.6);
        border-radius: 50%;
        transform: rotate(-48deg);
        -ms-transform: rotate(-48deg); /* IE 9 */
        -moz-transform: rotate(-48deg); /* Firefox */
        -webkit-transform: rotate(-48deg); /* Safari 和 Chrome */
        -o-transform: rotate(-48deg); /* Opera */
        position: absolute;
        top: 490px;
        left: 397px;
        animation: yycloudan 1s linear infinite;
        -moz-animation: yycloudan 1s linear infinite;
        -webkit-animation: yycloudan 1s linear infinite;
        -o-animation: yycloudan 1s linear infinite;
    }
    .guang {
        width: 73px;
        height: 71px;
        position: absolute;
        top: 471px;
        left: 381px;
    }
    .tree {
        width: 49px;
        height: 85px;
        position: absolute;
        top: 720px;
        left: 279px;
    }
    .yuanbao {
        width: 50px;
        height: 55px;
        position: absolute;
        top: 706px;
        left: 430px;
        animation: yuanbaogif 2s linear forwards;
        -moz-animation: yuanbaogif 2s linear forwards;
        -webkit-animation: yuanbaogif 2s linear forwards;
        -o-animation: yuanbaogif 2s linear forwards;
    }
    .yuanbaojing {
        width: 50px;
        height: 55px;
        position: absolute;
        display: inline-block;
        top: 706px;
        left: 430px;
        animation: yuanbaoimg 2s linear forwards;
        -moz-animation: yuanbaoimg 2s linear forwards;
        -webkit-animation: yuanbaoimg 2s linear forwards;
        -o-animation: yuanbaoimg 2s linear forwards;
    }
    .shadow{
        width: 65px;
        height: 29px;
        position: absolute;
        top: 752px;
        left: 407px;
        animation: yuanbaoshadow 2s linear forwards;
        -moz-animation: yuanbaoshadow 2s linear forwards;
        -webkit-animation: yuanbaoshadow 2s linear forwards;
        -o-animation: yuanbaoshadow 2s linear forwards;
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
    .animation6 {
        animation: cloudan4 20s linear infinite;
        -moz-animation: cloudan4 20s linear infinite;
        -webkit-animation: cloudan4 20s linear infinite;
        -o-animation: cloudan4 20s linear infinite;
    }
    .animation7 {
        animation: cloudan4 30s linear infinite;
        -moz-animation: cloudan4 30s linear infinite;
        -webkit-animation: cloudan4 30s linear infinite;
        -o-animation: cloudan4 30s linear infinite;
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

    @keyframes cloudan4 {
        0% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(0, 0, 0px);
        }
        25% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(-30px, -4px, 0px);
        }
        75% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(30px, 4px, 0px);
        }
        100% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(0, 0, 0px);
        }
    }
    @keyframes yuanbaogif {
        0% {
            opacity: 1;
            transform: translate3d(-200px, -30px, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(-200px, -30px, 0px);
        }
        99% {
            opacity: 1;
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            transform: translate3d(0, 0, 0px);
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes yuanbaoimg {
        0% {
            opacity: 0;
            transform: translate3d(-200px, -30px, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(-200px, -30px, 0px);
        }
        90%{
            opacity: 0;
        }
        99% {
            opacity: 1;
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            transform: translate3d(0, 0, 0px);
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes yuanbaoshadow {
        0% {
            transform: translate3d(-200px, -30px, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(-200px, -30px, 0px);
        }
        99% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            transform: translate3d(0, 0, 0px);
        }
        100% {
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
