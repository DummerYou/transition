<template>
    <div ref="首页轮播" class="homeIndex">
        <router-link to="/" class="paat_header">
            <!-- <img class="paat_log"> -->
            <img class="paat_log" src="../../assets/imgs/logo@3x@3x.png" alt>
        </router-link>
        <div class="paat_num">
            <div @click="changeBtn(1)">
                <transition-group name="fadenum">
                    <span :key="'num1'+currentpage" class="fadenum-item">{{currentpage}}</span>
                </transition-group>
            </div>
            <div class="paat_num_bor"></div>
            <div @click="changeBtn(0)">{{totalPage}}</div>
        </div>

        <div class="margin homeIndex_content">
            <div class="paat_buttom btn_up" @click="changeBtn(2)" v-if="currentpage==totalPage"></div>
            <div class="paat_buttom btn_down" @click="changeBtn(0)" v-else></div>
            <div class="paat_left">
                <transition-group name="fadetitle">
                    <div v-if="currentpage==1" class="fadetitle-item" key="fadetitle1">
                        <div class="paat_title">让财税管理更简单</div>
                        <div class="paat_name">
                            <span>普道科技</span>
                        </div>
                        <div class="paat_intro">十年服务一千万创业者</div>
                        <router-link to="/PaatTechnology" class="paat_name_goto">More</router-link>
                    </div>
                    <div v-if="currentpage==2" class="fadetitle-item" key="fadetitle2">
                        <div class="paat_title">把税收优惠送给您</div>
                        <div class="paat_name">
                            <span>捷税宝</span>
                        </div>
                        <div class="paat_intro">国内领先的标准化、一站式税务筹划平台</div>
                        <a class="paat_name_goto" href="http://jsb.paat.com/" target="_blank">More</a>
                    </div>
                    <div v-if="currentpage==3" class="fadetitle-item" key="fadetitle3">
                        <div class="paat_title">找园区、找项目、找政策、易发展</div>
                        <div class="paat_name">
                            <span>捷园宝</span>
                            <!-- <div class="paat_name_goto"></div> -->
                        </div>
                        <div class="paat_intro">互联网大数据招商引资、选址落地平台，赋能全球园区和企业发展</div>
                        <a
                            class="paat_name_goto"
                            href="http://www.jieyuanbao.com"
                            target="_blank"
                        >More</a>
                    </div>
                    <div v-if="currentpage==4" class="fadetitle-item" key="fadetitle4">
                        <div class="paat_title">精挑细选为您、企业服务有道</div>
                        <div class="paat_name">
                            <span>甄道企服</span>
                            <!-- <div class="paat_name_goto"></div> -->
                        </div>
                        <div class="paat_intro">严选打造、企业经营过程中值得托付的合作伙伴</div>
                        <a class="paat_name_goto" href="http://zdqf.paat.com" target="_blank">More</a>
                    </div>
                </transition-group>
            </div>
            <div class="paat_right">
                <!-- <canvas id="canvasy" width="920" height="920"></canvas>
                <div
                    :class="'ball clo'+ currentpage"
                    :style="'transform: rotate('+(radnum-45)+'deg)'"
                >
                    <span></span>
                </div>-->
                <transition name="fadeImg">
                    <paatImg v-if="currentpage==1" class="fadeImg-item" key="fadeImg1"/>
                    <jieshui v-if="currentpage==2" class="fadeImg-item" key="fadeImg2"/>
                    <jieyuanbao v-if="currentpage==3" class="fadeImg-item" key="fadeImg3"/>
                    <zhendao v-if="currentpage==4" class="fadeImg-item" key="fadeImg4"/>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import paatImg from "@/components/paatImg.vue";
import jieshui from "@/components/jieshui.vue";
import jieyuanbao from "@/components/jieyuanbao.vue";
import zhendao from "@/components/zhendao.vue";
var _ = require("lodash");
export default {
    name: "Home",
    data() {
        return {
            currentpage: 1,
            totalPage: 3,
            wheelState: true,
            radnum: 0
        };
    },
    components: {
        paatImg,
        jieshui,
        jieyuanbao,
        zhendao
    },
    mounted: function() {
        window.addEventListener("mousewheel", this.omouseWheel, false); // 监听（绑定）滚轮滚动事件
        // this.canvasy(1);
    },
    methods: {
        //画圆
        canvasy(nnn) {
            // console.log("object");
            let num = this.currentpage;
            var canvas = document.getElementById("canvasy"), //获取canvas元素
                context = canvas.getContext("2d"), //获取画图环境，指明为2d
                centerX = canvas.width / 2, //Canvas中心点x轴坐标
                centerY = canvas.height / 2, //Canvas中心点y轴坐标
                rad = (Math.PI * 2) / 100, //将360度分成100份，那么每一份就是rad度
                speed = 0.1; //加载的快慢就靠它了canvas.width, canvas.height
            let pi = Math.PI * (0.5 + num * 0.5);
            let pii = Math.PI * (1.5 + num * 0.5);
            let that = this;

            //绘制5像素宽的运动外圈
            function blueCircle(n) {
                context.save();
                context.strokeStyle = "#BDD8FF"; //设置描边样式
                context.lineWidth = 1; //设置线宽
                context.beginPath(); //路径开始
                context.arc(
                    centerX,
                    centerY,
                    450,
                    num == 1 ? pi : pi - 0.1,
                    num == 4 ? pi + n * rad + 0.05 : pi + n * rad,
                    false
                ); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
                context.stroke(); //绘制 nb
                context.closePath(); //路径结束
                context.restore();
                let spedd = speed - 0.3;
                that.radnum = (num - 1) * 90 + spedd * rad * 58.22741820435195;
            }
            // 反转
            function blueCircle1(n) {
                context.save();
                context.strokeStyle = "#BDD8FF"; //设置描边样式
                context.lineWidth = 1; //设置线宽
                context.beginPath(); //路径开始
                context.arc(
                    centerX,
                    centerY,
                    450,
                    Math.PI,
                    pii - n * rad,
                    false
                ); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
                context.stroke(); //绘制
                context.closePath(); //路径结束
                context.restore();
                let spedd = speed - 0.3;
                that.radnum = (num + 1) * 90 - spedd * rad * 58.22741820435195;
            }
            //动画循环
            (function drawFrame() {
                if ((nnn == 2 && 24 < speed && speed < 25.5) || speed < 25) {
                    window.requestAnimationFrame(drawFrame);
                    if (nnn == 1) {
                        blueCircle(speed);
                    } else {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        blueCircle1(speed);
                    }
                    // that.radnum = speed*rad*58.22741820435195
                    // console.log(speed * rad*58.22741);
                    // whiteCircle();
                    // text(speed);

                    // if (speed > 100) speed = 0;
                    speed += 0.5;
                }
            })();
        },
        // 上下滚动
        omouseWheel(e) {
            if (this.wheelState) {
                this.wheelState = false;
                if (e.wheelDelta < 0) {
                    this.changeBtn(0);
                } else {
                    this.changeBtn(1);
                }
                setTimeout(() => {
                    this.wheelState = true;
                }, 1200);
            }
            // console.log(1);
        },
        changeBtn(num) {
            if (num == 0) {
                this.curIdx = 0;
                if (this.currentpage < this.totalPage) {
                    this.currentpage++;
                    // this.canvasy(1);
                }
            } else if (num == 1) {
                // --
                this.curIdx = 1;
                if (this.currentpage > 1) {
                    this.currentpage--;
                    // this.canvasy(2);
                }
            } else {
                this.currentpage = 1;
            }
            // console.log(this.currentpage);
        }
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.ChangeScroll); //  离开页面清除（移除）滚轮滚动事件
    }
};
</script>

<style lang="scss" scoped>
.homeIndex {
    position: relative;
    height: 100%;
    .paat_header {
        display: inline-block;
        position: absolute;
        left: 60px;
        top: 60px;
        .paat_log {
            width: 120px;
            height: 30px;
            // background: #ccc;
        }
    }
    .margin {
        width: 1400px;
        min-height: 100%;
        margin: 0 auto;
    }
    .paat_num {
        position: absolute;
        z-index: 50;
        top: 50%;
        left: 0px;
        right: 0px;
        margin-top: -35px;
        font-size: 14px;
        font-family: PingFangSC-Thin;
        font-weight: 100;
        color: rgba(153, 153, 153, 1);
        line-height: 16px;
        padding-left: 15px;
        width: 14px;
        text-align: center;
        cursor: pointer;
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently*/
        .paat_num_bor {
            width: 14px;
            height: 1px;
            background: #bfbfbf;
            margin: 9px 0;
        }
    }

    .homeIndex_content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 100%;
        overflow: hidden;
        position: relative;
        .paat_buttom {
            position: absolute;
            cursor: pointer;
            z-index: 999;
            bottom: 0;
            left: 50%;
            width: 200px;
            height: 200px;
            transform: translateX(-100px) translateY(-10px);
            background-size: 23px 86.7px;
            background-repeat: no-repeat;
            background-position: center center;
            &.btn_up {
                background-image: url("../../assets/imgs/shared/mouseUp.gif");
            }
            &.btn_down {
                background-image: url("../../assets/imgs/shared/mouse.gif");
            }
        }
        .paat_left {
            padding-left: 40px;
            .paat_title {
                font-size: 18px;
                font-family: PingFangSC-Regular;
                font-weight: 100;
                color: rgba(153, 153, 153, 1);
                line-height: 24px;
            }
            .paat_name {
                padding-top: 30px;
                font-size: 64px;
                font-family: PingFangSC-Light;
                font-weight: 300;
                color: rgba(51, 51, 51, 1);
                line-height: 64px;
            }
            .paat_intro {
                padding-top: 30px;
                font-size: 16px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(204, 204, 204, 1);
                line-height: 26px;
                width: 300px;
            }
            .paat_name_goto {
                margin-top: 72px;
                display: inline-block;
                width: 74px;
                height: 30px;
                border: 1px solid rgba(1, 104, 255, 0.5);
                font-size: 12px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(1, 104, 255, 1);
                line-height: 28px;
                cursor: pointer;
                transition: 0.5s;
                padding-left: 15px;
                box-sizing: border-box;
                &::after {
                    content: "";
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-right: 1px solid #0168ff;
                    border-top: 1px solid #0168ff;
                    transform: rotate(45deg) translate3d(3px, -4px, 0px);
                }
                &:hover {
                    color: rgba(255, 255, 255, 1);
                    background: rgba(0, 104, 255, 1);
                    box-shadow: 0px 10px 40px 0px rgba(0, 104, 255, 0.2);
                    border: 1px solid rgba(0, 104, 255, 1);
                    &::after {
                        border-right: 1px solid #ffffff;
                        border-top: 1px solid #ffffff;
                    }
                }
            }
        }
        .paat_right {
            margin: 30px;
            height: 900px;
            width: 900px;
            position: relative;
            #canvasy {
                position: absolute;
                left: -10px;
                top: -10px;
                width: 920px;
                height: 920px;
                z-index: 1;
            }
        }
    }
    @media only screen and (max-width: 1500px) {
        .paat_num {
            padding-left: 15px;
        }
    }
    @media only screen and (min-height: 910px) and (max-height: 1080px) {
        .homeIndex_content .paat_right {
            transform: scale(0.8, 0.8);
            margin: -50px 0;
        }
    }

    @media only screen and (min-height: 700px) and (max-height: 910px) {
        .homeIndex_content .paat_right {
            transform: scale(0.8, 0.8);
            height: 880px;
            margin: -100px 0;
        }
        .homeIndex_content .paat_buttom {
            height: 90px;
        }
    }
    @media only screen and (max-height: 700px) {
        .homeIndex_content .paat_right {
            transform: scale(0.6, 0.6);
            height: 880px;
            margin: -200px 0;
        }
        .homeIndex_content .paat_buttom {
            height: 90px;
        }
    }
    @media only screen and (min-width: 1500px) {
        .paat_num {
            padding-left: 40px;
        }
    }
    .fadenum-item {
        transition: all 1s;
        display: inline-block;
    }
    .fadenum-enter {
        opacity: 0;
        transform: translateY(-10px);
    }
    .fadenum-leave-to {
        opacity: 0;
        transform: translateY(10px);
    }
    .fadenum-leave-active {
        position: absolute;
    }
    .fadetitle-item {
        transition: all 1s;
        display: inline-block;
    }
    .fadetitle-enter {
        opacity: 0;
        transform: translateY(100px);
    }
    .fadetitle-leave-to {
        opacity: 0;
        transform: translateY(-100px);
    }
    .fadetitle-leave-active {
        position: absolute;
    }
    .fadeImg-item {
        transition: all 1s;
        display: inline-block;
    }
    .fadeImg-enter {
        opacity: 0;
        transform: translateY(200px);
    }
    .fadeImg-leave-to {
        opacity: 0;
        transform: translateY(-200px);
    }
    .fadeImg-leave-active {
        position: absolute;
    }

    .ball {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        top: 115px;
        left: 115px;
        border: 1px solid #bdd8ff;
        transform-origin: 333px 333px;
        z-index: 1;
        span {
            width: 8px;
            height: 8px;
            display: inline-block;
            background: #8dbcff;
            border-radius: 50%;
            margin: 11px;
        }
        // 坑死人不偿命
        // &.clo1 {
        // }
        &.clo2 {
            top: 118px;
            left: 118px;
        }
        &.clo3 {
            top: 118px;
            left: 118px;
        }
        &.clo4 {
            top: 119px;
            left: 116px;
        }
    }
}
</style>