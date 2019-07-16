<template>
    <div class="paatImg">
        <img class="elevator" src="../assets/imgs/paatImg/elevator.gif" alt>
        <img class="backdrop" src="../assets/imgs/paatImg/backdrop.png">
        <img class="hand" src="../assets/imgs/paatImg/hand.gif">
        <img class="businesstop" src="../assets/imgs/paatImg/top@3x.png">
        <img class="cloud1 animation1" src="../assets/imgs/paatImg/cloud-big@3x.png">
        <img class="cloud2 animation2" src="../assets/imgs/paatImg/cloud-middle@3x.png">
        <img class="cloud3 animation3" src="../assets/imgs/paatImg/cloud-small@3x.png">
        <img class="aircraft1 animation4" src="../assets/imgs/shared/aircraft1.gif">
        <img class="aircraft2 animation5" src="../assets/imgs/shared/aircraft2.gif">
        <img class="atm" src="../assets/imgs/paatImg/atm.gif">
        <img class="content" src="../assets/imgs/paatImg/content.gif">
        <img class="paper1-2" src="../assets/imgs/paatImg/paper1-2.gif">
        <img class="shu-top" src="../assets/imgs/paatImg/shu-top@3x.png">
        <img class="shuibao" src="../assets/imgs/paatImg/shuibao@3x.png">
        <img class="data1 animation6" src="../assets/imgs/paatImg/data@3x.png" alt="">
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
.paatImg {
    width: 100%;
    height: 100%;
    position: relative;
    .elevator {
        width: 80px;
        height: 450px;
        position: absolute;
        top: 250px;
        left: 160px;
        z-index: -1;
    }
    .backdrop {
        width: 812px;
        height: 710px;
        position: absolute;
        top: 150px;
        left: 43px;
    }
    .business {
        width: 81px;
        height: 92px;
        position: absolute;
        top: 340px;
        left: 213px;
    }
    .hand{
        width: 28px;
        height: 20px;
        position: absolute;
        top: 414px;
        left: 257px;
    }
    .businesstop{
        width: 84px;
        height: 96px;
        position: absolute;
        top: 340px;
        left: 213px;
    }
    .cloud1 {
        width: 64px;
        height: 61px;
        position: absolute;
        top: 340px;
        left: 600px;
    }

    .cloud2 {
        width: 34px;
        height: 33px;
        position: absolute;
        top: 295px;
        left: 765px;
        z-index: -1;
    }
    .cloud3 {
        width: 30px;
        height: 29px;
        position: absolute;
        top: 295px;
        left: 120px;
        z-index: -10;
    }
    .atm{
        width: 94px;
        height: 124px;
        position: absolute;
        top: 660px;
        left: 577px;
    }
    .content{
        width: 98px;
        height: 80px;
        position: absolute;
        top:457px;
        left: 410px;
    }
    .shui{
        width: 340px;
        height: 340px;
        position: absolute;
        top: 2px;
        left: 182px;
    }
    .paper1-2{
        width: 249px;
        height: 98px;
        position: absolute;
        top: 147px;
        left: 253px;
    }
    .shu-top{
        width: 112px;
        height: 85px;
        position: absolute;
        top: 110px;
        left: 223px;
    }
    .shuibao{
        width: 59px;
        height: 53px;
        position: absolute;
        top: 196px;
        left: 455px;
    }
    .aircraft1{
        width: 166px;
        height: 266px;
        position: absolute;
        top: 56px;
        left: 627px;
    }
    .aircraft2{
        width: 140px;
        height: 225px;
        position: absolute;
        top: -30px;
        left: 544px;
    }
    .data1{
        width: 50px;
        height: 76px;
        position: absolute;
        top: 95px;
        left: 330px;
        z-index: -1;
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
        animation: cloudan3 20s linear infinite alternate;
        -moz-animation: cloudan3 20s linear infinite alternate;
        -webkit-animation: cloudan3 20s linear infinite alternate;
        -o-animation: cloudan3 20s linear infinite alternate;
    }
    .animation5 {
        animation: cloudan3 25s linear infinite;
        -moz-animation: cloudan3 25s linear infinite;
        -webkit-animation: cloudan3 25s linear infinite;
        -o-animation: cloudan3 25s linear infinite;
    }
    .animation6 {
        animation: cloudan4 10s linear infinite;
        -moz-animation: cloudan4 10s linear infinite;
        -webkit-animation: cloudan4 10s linear infinite;
        -o-animation: cloudan4 10s linear infinite;
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
            transform: translate3d(15px, -10px, 0px);
            -moz-transform: translate3d(15px, -10px, 0px);
            -o-transform: translate3d(15px, -10px, 0px);
            -webkit-transform: translate3d(15px, -10px, 0px);
        }
        75% {
            transform: translate3d(-15px, 10px, 0px);
            -moz-transform: translate3d(-15px, 10px, 0px);
            -o-transform: translate3d(-15px, 10px, 0px);
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
        50% {
            transform: translate3d(-15px, 10px, 0px);
            -moz-transform: translate3d(-15px, 10px, 0px);
            -o-transform: translate3d(-15px, 10px, 0px);
            -webkit-transform: translate3d(15px, 10px, 0px);
        }
        100% {
            transform: translate3d(0, 0, 0px);
            -moz-transform: translate3d(0, 0, 0px);
            -o-transform: translate3d(0, 0, 0px);
            -webkit-transform: translate3d(0, 0, 0px);
        }
    }
    
}
</style>
