

<template>
    <div class="website">
        <!-- <vue-canvas-nest class="nest" :config="{color:'255,255,255',opacity: .3, count: 100}"></vue-canvas-nest> -->
        <div class="website_header">
            <vue-particles
                class="particles"
                color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
            ></vue-particles>
            <div class="website_header_top marauto" >
                <img src="../assets/images/index/logo@2x.png" alt>
            </div>
            <div class="website_banner marauto">
                <div class="website_banner_title">
                    <h3>菁英星球</h3>
                    <h4>用新时代的区块链、人工智能改变人力资源行业</h4>
                    <p>解决企业与个人之间的互信问题，为他们搭建起一座互信的桥梁。</p>
                </div>
            </div>
        </div>
        <div class="website_intro">
            <div class="website_intro_top marauto">
                <h3>菁英星球是什么</h3>
                <p>What is Elite Planet</p>
            </div>
            <div class="website_intro_cont marauto">
                <div class="website_intro_cont_left">
                    <ul>
                        <li
                            v-for="(item,i) in introlist"
                            :key="i"
                            @click="introContclick(i,item.key)"
                            :class="introlistnum==i?'introlistnum':''"
                        >
                            <div class="website_intro_cont_left_ch">{{item.ch}}</div>
                            <div class="website_intro_cont_left_en">{{item.en}}</div>
                        </li>
                    </ul>
                </div>
                <div class="website_intro_cont_right">
                    <transition-group name="list-completes" tag="ul">
                        <li class="list-completes-item" v-for="i in introCont" v-bind:key="i.key">
                            <div class="website_intro_cont_right_img">
                                <img
                                    v-if="i.key==1"
                                    src="../assets/images/index/introcont1.png"
                                    alt
                                >
                                <img
                                    v-if="i.key==2"
                                    src="../assets/images/index/introcont2.png"
                                    alt
                                >
                                <img
                                    v-if="i.key==3"
                                    src="../assets/images/index/introcont3.png"
                                    alt
                                >
                            </div>
                            <div class="website_intro_cont_right_content">
                                <div class="website_intro_cont_right_content_title">{{i.title}}</div>
                                <div v-html="i.content"></div>
                            </div>
                        </li>
                    </transition-group>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
var _ = require("lodash");
export default {
    data() {
        return {
            introCont: [
                {
                    key: 1,
                    title: "个人信用资产",
                    content:
                        "您的个人资料需要得到公司和同行的认证。 所有的认证都写到区块链，并显示在您的个人资料上。<div style='height: 15px;'></div>成长的路上没有虚假、让不断进取的你证明自己。"
                },
                {
                    key: 2,
                    title: "企业招聘",
                    content:
                        "力资源管理系统，助您管理人和事，发挥企业最核心资源（人力）的最大价值，提高企业竞争力。<div style='height: 15px;'></div>为员工提供价值认证，与员工之间充满信任。"
                },
                {
                    key: 3,
                    title: "企业赋予",
                    content:
                        "由企业方记录员工的职业履历信息，例如员工岗位信息、工作成绩、奖惩记录等等。员工在更换工作单位后，这些信息会跟随员工到下一家工作单位。<div style='height: 15px;'></div>企业可全方位准确、真实地了解员工的工作经历。"
                }
            ],
            introlistTop: 0, //距离
            introlistnum: 0, //第几个
            introlist: [
                {
                    ch: "基于区块链的真实的专业人士个人档案",
                    en: " Based on Block Chain",
                    key: 1
                },
                {
                    ch: "企业招聘、人力管理平台",
                    en: "Enterprise Recruitment and Manpower ",
                    key: 2
                },
                {
                    ch: "由企业为员工记录职场信用资产",
                    en: "Recording Credit Assets in the Workplace ",
                    key: 3
                }
            ],
        };
    },

    methods: {
        // 动画操作
        introContclick(i, key) {
            this.introlistnum = i;
            // this.introlistTop = i * 99.636;
            for (let index = 0; index < this.introCont.length; index++) {
                if (this.introCont[index].key == key) {
                    var newintroCont = this.introCont.splice(0, index);
                    newintroCont.forEach(i => {
                        this.$set(this.introCont, this.introCont.length, i);
                    });
                }
            }
            // if (i >= this.introlist.length - 3) {
            //     this.introlist = this.introlist.concat(this.introlistmo);
            // }
        }
    },
    // created() {
    //     // this.introlist = this.introlist.concat(this.introlistmo);
    // }
};
</script>



<style lang="scss" scoped>
.website {
    .marauto {
        margin: 0 auto;
        min-width: 1200px;
        max-width: 1200px;
    }
    
    .website_header {
        height: 714px;
        position: relative;
        // background: linear-gradient(
        //     90deg,
        //     rgba(6, 119, 250, 1) 0%,
        //     rgba(6, 119, 250, 1) 40%,
        //     rgba(6, 59, 250, 1) 100%
        // );
        background-image: url("../assets/images/index/ben@2x.jpg");
        background-size: cover;
        background-position-x: center;
        .particles{
            height: 100%;
            width: 100%;
            position: absolute;
        }
        .website_header_top {
            padding-top: 37px;
            img {
                width: 117px;
                height: 32px;
            }
        }
        .website_banner {
            padding-top: 221px;
            .website_banner_title {
                width: 505px;
                h3 {
                    font-size: 54px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    line-height: 75px;
                }
                h4 {
                    font-size: 22px;
                    font-family: PingFang-SC-Bold;
                    font-weight: bold;
                    color: rgba(255, 255, 255, 1);
                    line-height: 30px;
                    padding-top: 14px;
                }
                p {
                    font-size: 18px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    line-height: 25px;
                    padding-top: 10px;
                }
            }
        }
    }
    .website_intro {
        background: #fcfcfc;
        .website_intro_top {
            padding-top: 130px;
            h3 {
                font-size: 32px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 45px;
            }
            p {
                font-size: 12px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 17px;
            }
        }
        .website_intro_cont {
            display: flex;
            padding-top: 78px;
            padding-bottom: 156px;
            .website_intro_cont_left {
                width: 483px;
                height: 290px;
                overflow: hidden;
                ul {
                    width: 418px;
                    transition: margin 0.5s;
                    li {
                        font-size: 16px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(153, 153, 153, 1);
                        line-height: 22px;
                        margin-bottom: 56px;
                        cursor: pointer;

                        transition: all 0.5s;
                    }
                    li.introlistnum {
                        padding-left: 19px;
                        border-left: 2px solid #0677fa;
                        .website_intro_cont_left_ch {
                            font-size: 22px;
                            font-family: PingFangSC-Regular;
                            font-weight: 400;
                            color: rgba(51, 51, 51, 1);
                            line-height: 30px;
                            position: relative;
                            &::before {
                                content: "";
                                position: absolute;
                                right: 0;
                                top: 10px;
                                width: 0;
                                height: 0;
                                border-top: 6px solid transparent;
                                border-right: 6px solid #0677fa;
                                border-bottom: 6px solid transparent;
                            }
                        }
                        .website_intro_cont_left_en {
                            font-size: 18px;
                            font-family: PingFangSC-Regular;
                            font-weight: 400;
                            color: rgba(51, 51, 51, 1);
                            line-height: 25px;
                        }
                    }
                }
            }
            .website_intro_cont_right {
                padding-top: 260px;
                ul {
                    position: relative;
                    li {
                        width: 647px;
                        height: 171px;
                        background: rgba(255, 255, 255, 1);
                        box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.07);
                        margin-top: -260px;
                        display: flex;
                        align-items: center;
                        .website_intro_cont_right_img {
                            width: 300px;
                            height: 100px;
                            text-align: center;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            img{
                                width: 128px;
                            }
                        }
                        .website_intro_cont_right_content {
                            font-size: 14px;
                            font-family: PingFangSC-Regular;
                            font-weight: 400;
                            color: rgba(102, 102, 102, 1);
                            line-height: 20px;
                            width: 336px;
                            transition: margin 0.5s;
                            .website_intro_cont_right_content_title {
                                font-size: 16px;
                                font-family: PingFangSC-Regular;
                                font-weight: 400;
                                color: rgba(51, 51, 51, 1);
                                line-height: 22px;
                                margin-bottom: 9px;
                            }
                        }
                    }
                    li:nth-child(1) {
                        z-index: 10;
                        // background: red;
                        width: 715px;
                        height: 271px;
                        margin-top: -260px;
                        // .website_intro_cont_right_content {
                        //     margin-left: 100px;
                        // }
                    }
                    li:nth-child(2) {
                        z-index: 9;
                        width: 664px;
                        height: 278px;
                        margin-left: 25px;
                    }
                    li:nth-child(3) {
                        z-index: 8;
                        width: 647px;
                        height: 271px;
                        margin-left: 34px;
                    }
                    // 卡片动画
                    .list-completes-item {
                        transition: all 0.5s;
                    }
                    .list-completes-enter, .list-completes-leave-to
                    /* .list-complete-leave-active for below version 2.1.8 */ {
                        // opacity: 0;
                    }
                    .list-completes-leave-active {
                        position: absolute;
                    }
                }
            }
        }
    }

}
li {
    position: relative;
}
</style>
<style lang="scss">
.website_vision_left {
    .ant-carousel {
        height: 100%;
        .slick-slider {
            height: 100%;
        }
        .slick-dots {
            li {
                width: 23px;
                height: 5px;
                background: rgba(241, 241, 241, 1);
            }
            .slick-active {
                // width:23px;
                // height:10px;
                // background:rgba(6,65,250,1);
                button {
                    width: 23px;
                    height: 5px;
                    background: rgba(6, 65, 250, 1);
                }
            }
        }
    }
    .vue-canvas-nest-element {
        z-index: 3;
    }
}
</style>

