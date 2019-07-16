<template>
    <div class="wrapper">
        <jsb-main>
            <jsb-header :scrollTopNum="180" slot="jsbHeader"></jsb-header>
            <div class="main">
                <div class="banner">
                    <div class="banner-img">
                        <img src="../assets/img/banner1.jpg" alt class="banner-img1">
                        <img src="../assets/img/banner2.jpg" alt class="banner-img2">
                        <img src="../assets/img/banner3.jpg" alt class="banner-img3">
                    </div>
                    <div>
                        <p class="title">捷税宝</p>
                        <p class="describe">把税收优惠送给您</p>
                        <div class="totalNum">
                            已为
                            <span>
                                <NumberGrow :value="recordCount.customerCount" :replaceState="1"></NumberGrow>
                            </span>家企业节税
                            <span>
                                <NumberGrow
                                    :value="recordCount.invoiceAmountSum"
                                    :toFixed="2"
                                    :replaceState="1"
                                ></NumberGrow>
                            </span>元
                        </div>
                    </div>
                </div>
                <div class="efficiency margin12">
                    <div class="efficiency-list">
                        <div class="efficiency-lists">
                            <img src="../assets/img/efficiency1.png" alt>
                            <span>赚更多</span>
                        </div>
                    </div>
                    <div class="efficiency-list">
                        <div class="efficiency-lists">
                            <img src="../assets/img/efficiency2.png" alt>
                            <span>省时间</span>
                        </div>
                    </div>
                    <div class="efficiency-list">
                        <div class="efficiency-lists">
                            <img src="../assets/img/efficiency3.png" alt>
                            <span>更稳定</span>
                        </div>
                    </div>
                    <div class="efficiency-list">
                        <div class="efficiency-lists">
                            <img src="../assets/img/efficiency4.png" alt>
                            <span>无风险</span>
                        </div>
                    </div>
                </div>
                <div class="taxPlan margin12" ref="taxPlan">
                    <div class="main-h3 animationbottom" :style="animationRegress(taxPlan,300)">税筹方案</div>
                    <div
                        class="main-h4 animationbottom"
                        :style="animationRegress(taxPlan,300)"
                    >Tax Plan</div>
                    <div class="program animationbottom" :style="animationRegress(taxPlan,400)">
                        <nuxt-link to="/taxPlan/serviceType" tag="div" class="programs">
                            <div class="programs-img">
                                <img src="../assets/img/tax1.png" alt>
                            </div>
                            <div class="programs-title">服务型税筹方案</div>
                            <div class="programs-percentage">税率降至0.96%-6.83%</div>
                            <div class="programs-Introd">合理节税90%，适用于多数行业</div>
                        </nuxt-link>
                        <nuxt-link to="/taxPlan/purchase" tag="div" class="programs">
                            <div class="programs-img">
                                <img src="../assets/img/tax2.png" alt>
                            </div>
                            <div class="programs-title">采购型税筹方案</div>
                            <div class="programs-percentage">税率降至0.96%-6.83%</div>
                            <div class="programs-Introd">合理节税90%，适用于以电商形式运作的客户</div>
                        </nuxt-link>
                        <nuxt-link to="/taxPlan/advertising" tag="div" class="programs">
                            <div class="programs-img">
                                <img src="../assets/img/tax3.png" alt>
                            </div>
                            <div class="programs-title">广告型税筹方案</div>
                            <div class="programs-percentage">税率降至0.96%-9.83%</div>
                            <div class="programs-Introd">合理节税90%，适用于经营互联网广告业务的客户</div>
                        </nuxt-link>
                        <nuxt-link to="/taxPlan/knowledge" tag="div" class="programs">
                            <div class="programs-img">
                                <img src="../assets/img/tax4.png" alt>
                            </div>
                            <div class="programs-title">知产型税筹方案</div>
                            <div class="programs-percentage">税率降至0.96%-6.83%</div>
                            <div class="programs-Introd">合理节税90%，适用于名下有无形资产的客户</div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="bestService margin12" ref="bestService">
                    <div
                        class="main-h3 animationbottom"
                        :style="animationRegress(bestService,400)"
                    >至诚服务</div>
                    <div
                        class="main-h4 animationbottom"
                        :style="animationRegress(bestService,400)"
                    >Best Service</div>
                    <div class="bestsList">
                        <div
                            class="bestsLists animationbottom"
                            :style="animationRegress(bestService,550)"
                        >
                            <div class="bestsLists_num">500+</div>
                            <div class="bestsLists_title">政府合作</div>
                            <div class="bestsLists_content">
                                覆盖全国20个省市
                                <br>市场占有率遥遥领先
                            </div>
                        </div>
                        <div
                            class="bestsLists animationbottom"
                            :style="animationRegress(bestService,550)"
                        >
                            <div class="bestsLists_num">50+</div>
                            <div class="bestsLists_title">优惠政策</div>
                            <div class="bestsLists_content">
                                核定征收+园区财政扶持
                                <br>节税90%
                            </div>
                        </div>
                        <div
                            class="bestsLists animationbottom"
                            :style="animationRegress(bestService,550)"
                        >
                            <div class="bestsLists_num">1500+</div>
                            <div class="bestsLists_title">优质团队</div>
                            <div class="bestsLists_content">
                                1500+人服务团队
                                <br>服务范围覆盖全国
                            </div>
                        </div>
                    </div>
                </div>
                <div class="system margin12" ref="system">
                    <div class="systemImg animationleft" :style="animationRegress(system,450)">
                        <img src="../assets/img/smartSystem.png" alt>
                    </div>
                    <div class="systemright animationright" :style="animationRegress(system,450)">
                        <div class="systemright_img">
                            <img src="../assets/img/smrlogo.png" alt>
                        </div>
                        <div class="systemright_title">税美人智能系统</div>
                        <div class="systemright_introd">团队自研系统，云数据+人工智能加持，把控每个服务环节</div>
                        <div
                            class="systemright_content"
                        >税美人智能系统在2016年出生至今，一直以“为客户提供最好的使用体验”为主旨，默默的在背后为我们每个服务环节做着最有效的支撑，同时也是我们服务口碑的奠基者。</div>
                    </div>
                </div>
                <div class="treasure" ref="treasure">
                    <div class="margin12">
                        <div
                            class="treasure_left animationleft"
                            :style="animationRegress(treasure,450)"
                        >
                            <div class="treasure_left_img">
                                <img src="../assets/img/shuiblogo.png" alt>
                            </div>
                            <div class="treasure_left_title">税宝App</div>
                            <div class="treasure_left_introd">客户全程感知，把服务装进口袋</div>
                            <div
                                class="treasure_left_content"
                            >税宝APP是集节税方案、一站式全生命周期企业服务为一体，结合国内顶尖风控、交互设计及云技术打造而成。助力企业更高效、更便捷、更次世代的享受办公、享受服务。</div>
                            <div class="treasure_left_bottom">
                                <div class="treasure_left_bottoms">
                                    <span>iOS下载</span>
                                    <div class="treasure_left_bottoms_code">
                                        <img src="../assets/img/iOS1@2x.png" alt>
                                        <p>扫一扫</p>
                                    </div>
                                </div>
                                <div class="treasure_left_bottoms">
                                    <span>安卓下载</span>
                                    <div class="treasure_left_bottoms_code">
                                        <img src="../assets/img/android@2x.png" alt>
                                        <p>扫一扫</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="treasure_right">
                            <img class="quanimg" src="../assets/img/quan.png" alt>
                            <img
                                class="iPhoneimg animationright"
                                src="../assets/img/iPhone.png"
                                alt
                                :style="animationRegress(treasure,450)"
                            >
                        </div>
                    </div>
                </div>
                <div class="cooperation" ref="cooperation">
                    <div class="cooperation_title">
                        <span>10</span>年服务
                        <span>100,000</span>家企业，创造
                        <span>1,000</span>亿价值
                    </div>
                    <div class="cooperation_lists" :style="animationRegress(cooperation,200)">
                        <div class="cooperation_lists1">
                            <div
                                class="cooperation_lists_logo"
                                v-for="(img,i) in 20"
                                :key="i"
                                :style="'background-position: '+i*140+'px 0;'"
                            ></div>
                        </div>
                        <div class="cooperation_lists2">
                            <div
                                class="cooperation_lists_logo"
                                v-for="(img,i) in 20"
                                :key="i"
                                :style="'background-position: '+i*140+'px 60px;'"
                            ></div>
                        </div>
                    </div>
                    <div ref="contactUsw">
                        <contactUs :contactUsw="contactUsw" :h="h" :sourceType="1001"></contactUs>
                    </div>
                </div>
            </div>
            <jsb-footer slot="jsbFooter"></jsb-footer>
            <jsb-advisory slot="jsbAdvisory"></jsb-advisory>
        </jsb-main>
    </div>
</template>

<script>
// import { getStatisticData } from "../assets/js/common";
import NumberGrow from "../components/numberGrow";
import contactUs from "../components/contactUs";
export default {
    data() {
        return {
            recordCount: {
                customerCount: 5000,
                invoiceAmountSum: 9999999
            },
            // 滚动
            scrollTop: 0,
            h: 0,
            bestService: 0,
            system: 0,
            treasure: 0,
            contactUsw: 0,
            taxPlan: 0,
            cooperation: 0
        };
    },
    components: { NumberGrow, contactUs },
    computed: {
        animationRegress() {
            return function(top, num) {
                // console.log(top,this.h-num)
                if (top < this.h - num) {
                    return "transform: translate(0px, 0px) scaleX(1); opacity: 1;";
                }
            };
        }
    },
    methods: {
        // 滚动条
        handleScroll() {
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            this.h =
                document.documentElement.clientHeight ||
                document.body.clientHeight;
            this.scrollTop = scrollTop;
            this.bestService = this.$refs.bestService.offsetTop - scrollTop;
            this.system = this.$refs.system.offsetTop - scrollTop;
            this.treasure = this.$refs.treasure.offsetTop - scrollTop;
            this.contactUsw = this.$refs.contactUsw.offsetTop - scrollTop;
            this.taxPlan = this.$refs.taxPlan.offsetTop - scrollTop;
            this.cooperation = this.$refs.cooperation.offsetTop - scrollTop;
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, true);
        this.handleScroll();
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.handleScroll, true); //  离开页面清除（移除）滚轮滚动事件
    },
    // async asyncData() {
    //     let recordCount = await getStatisticData().then(res => {
    //         // console.log(res.resultInfo)
    //         return res.resultInfo;
    //     });
    //     return {
    //         recordCount: recordCount
    //     };
    // },
    head() {
        return {
            title: "捷税宝-把税收优惠送给您",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        "捷税宝，免费税务筹划服务平台，提供公司合理避税、企业所得税税收优惠、股权转让避税方法、寻找公司避税天堂等；申请个人独资企业税收优惠政策，提供个税节税、个人税务筹划，个税合理避税方法、节税方案等服务。"
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content:
                        "税务筹划,节税,避税,避税天堂,合理避税,所得税避税,企业避税,避税方法,税收优惠,个人独资企业"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    .main {
        .main-h3 {
            font-size: 40px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 48px;
            text-align: center;
        }
        .main-h4 {
            font-size: 28px;
            font-family: PingFangSC-Thin;
            font-weight: 100;
            color: rgba(153, 153, 153, 1);
            line-height: 36px;
            text-align: center;
            padding-top: 10px;
        }
        .banner {
            height: 780px;
            position: relative;
            z-index: -10;
            display: flex;
            justify-content: center;
            min-width: 1200px;

            .banner-img {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                overflow: hidden;
                background-color: #111a28;
                z-index: -10;
                & > img {
                    position: absolute;
                    background-color: #fff;
                    left: 50%;
                    top: 50%;
                    margin: -390px 0 0 -1070px;
                    // transform: translate3d(-50%, -50%, 0);
                    // -ms-transform:translate3d(-50%, -50%, 0) scale(1); 	/* IE 9 */
                    // -moz-transform:translate3d(-50%, -50%, 0) scale(1); 	/* Firefox */
                    // -webkit-transform:translate3d(-50%, -50%, 0) scale(1); /* Safari 和 Chrome */
                    // -o-transform:translate3d(-50%, -50%, 0) scale(1);	/* Opera */
                    height: 780px;
                }

                .banner-img1 {
                    animation: cloudanimg1 25s linear infinite;
                    -moz-animation: cloudanimg1 25s linear infinite;
                    -webkit-animation: cloudanimg1 25s linear infinite;
                    -o-animation: cloudanimg1 25s linear infinite;
                }
                .banner-img2 {
                    animation: cloudanimg2 25s linear infinite;
                    -moz-animation: cloudanimg2 25s linear infinite;
                    -webkit-animation: cloudanimg2 25s linear infinite;
                    -o-animation: cloudanimg2 25s linear infinite;
                }
                .banner-img3 {
                    animation: cloudanimg3 25s linear infinite;
                    -moz-animation: cloudanimg3 25s linear infinite;
                    -webkit-animation: cloudanimg3 25s linear infinite;
                    -o-animation: cloudanimg3 25s linear infinite;
                }
            }
            @keyframes cloudanimg1 {
                0% {
                    opacity: 0;
                    z-index: 100;
                    transform: scale(1);
                    
                }
                33% {
                    opacity: 1;
                    z-index: 100;
                    transform: scale(1.2);
                    
                }
                66% {
                    opacity: 0;
                    z-index: 0;
                    transform: scale(1);
                   
                }
                100% {
                    opacity: 0;
                    z-index: 0;
                    transform: scale(1);
                   
                }
            }
            @keyframes cloudanimg2 {
                0% {
                    opacity: 0;
                    z-index: 0;
                    transform:scale(1);
                }
                33% {
                    opacity: 0;
                    z-index: 100;
                    transform:scale(1);
                }
                66% {
                    opacity: 1;
                    z-index: 100;
                    transform:scale(1.2);
                }
                100% {
                    opacity: 0;
                    z-index: 0;
                    transform:scale(1);
                }
            }
            @keyframes cloudanimg3 {
                0% {
                    opacity: 1;
                    z-index: 100;
                    transform:scale(1.2);
                }
                33% {
                    opacity: 0;
                    z-index: 0;
                    transform:scale(1);
                }
                66% {
                    opacity: 0;
                    z-index: 100;
                    transform:scale(1);
                }
                100% {
                    opacity: 1;
                    z-index: 100;
                    transform:scale(1.2);
                }
            }
            .title {
                padding-top: 260px;
                font-size: 60px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 60px;
            }
            .describe {
                padding-top: 18px;
                font-size: 24px;
                font-family: PingFangSC-Thin;
                font-weight: 100;
                color: rgba(255, 255, 255, 1);
                line-height: 24px;
            }
            .totalNum {
                padding-top: 54px;
                font-size: 25px;
                font-family: PingFangSC-Thin;
                font-weight: 100;
                color: rgba(255, 255, 255, 1);
                line-height: 24px;
                white-space: nowrap;
                span {
                    font-size: 80px;
                    font-family: DINAlternate-Bold;
                    font-weight: bold;
                    color: rgba(255, 255, 255, 1);
                    line-height: 80px;
                    margin: 0 15px;
                }
            }
        }
        .efficiency {
            height: 130px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 6px 6px 40px 0px rgba(0, 0, 0, 0.07);
            border-radius: 2px;
            margin-top: -30px;
            display: flex;
            align-items: center;
            .efficiency-list {
                flex: 1;
                display: flex;
                align-items: center;
                height: 100%;
                .efficiency-lists {
                    height: 76px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        width: 36px;
                        height: 36px;
                        margin-right: 11px;
                    }
                    span {
                        font-size: 20px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                        line-height: 20px;
                    }
                }
                &:not(:first-child) .efficiency-lists {
                    border-left: 1px solid #e4e4e4;
                }
                &:nth-child(1):hover {
                    background-image: url("../assets/img/efficiencyback1.png");
                    background-size: 100% 100%;
                    .efficiency-lists {
                        display: none;
                    }
                }
                &:nth-child(2):hover {
                    background-image: url("../assets/img/efficiencyback2.png");
                    background-size: 100% 100%;
                    .efficiency-lists {
                        display: none;
                    }
                }
                &:nth-child(3):hover {
                    background-image: url("../assets/img/efficiencyback3.png");
                    background-size: 100% 100%;
                    .efficiency-lists {
                        display: none;
                    }
                }
                &:nth-child(4):hover {
                    background-image: url("../assets/img/efficiencyback4.png");
                    background-size: 100% 100%;
                    .efficiency-lists {
                        display: none;
                    }
                }
            }
        }
        .taxPlan {
            padding-top: 100px;
            .program {
                display: flex;
                justify-content: space-between;
                transition: all 0.5s linear;
                .programs {
                    width: 285px;
                    height: 426px;
                    background: rgba(255, 255, 255, 1);
                    border-radius: 2px;
                    margin-top: 40px;
                    box-shadow: 6px 6px 40px 0px rgba(0, 0, 0, 0.06);
                    transition: all 0.3s linear;
                    cursor: pointer;
                    .programs-img {
                        height: 260px;
                        background: linear-gradient(
                            212deg,
                            rgba(0, 0, 0, 0.17) 0%,
                            rgba(2, 7, 30, 0.18) 100%
                        );
                        border-radius: 2px 2px 0px 0px;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                            transition: transform 0.2s linear;
                        }
                    }
                    &:hover {
                        transform: translateY(-10px);
                        .programs-img {
                            img {
                                transform: scale(1.02);
                            }
                        }
                    }
                    .programs-title {
                        font-size: 24px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                        line-height: 24px;
                        padding-top: 26px;
                        padding-left: 20px;
                    }
                    .programs-percentage {
                        font-size: 14px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(249, 67, 56, 1);
                        line-height: 24px;
                        padding-top: 8px;
                        padding-left: 20px;
                    }
                    .programs-Introd {
                        width: 245px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(153, 153, 153, 1);
                        line-height: 24px;
                        padding-top: 4px;
                        padding-left: 20px;
                    }
                }
            }
        }
        .bestService {
            padding-top: 160px;
            padding-bottom: 165px;
            .bestsList {
                padding-top: 62px;
                display: flex;
                justify-content: space-around;
                text-align: center;
                .bestsLists {
                    width: 207px;
                    .bestsLists_num {
                        font-size: 50px;
                        font-family: DINAlternate-Bold;
                        font-weight: bold;
                        color: rgba(249, 67, 56, 1);
                        line-height: 48px;
                    }
                    .bestsLists_title {
                        padding-top: 14px;
                        font-size: 24px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                        line-height: 24px;
                    }
                    .bestsLists_content {
                        padding-top: 10px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(153, 153, 153, 1);
                        line-height: 24px;
                    }
                }
            }
        }
        .system {
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            .systemImg {
                width: 650px;
                height: 581px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .systemright {
                width: 460px;
                padding-top: 180px;
                .systemright_img {
                    img {
                        width: 44px;
                        height: 39px;
                    }
                }
                .systemright_title {
                    padding-top: 21px;
                    font-size: 30px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                    line-height: 24px;
                }
                .systemright_introd {
                    font-size: 14px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(193, 193, 193, 1);
                    line-height: 24px;
                    padding-top: 14px;
                }
                .systemright_content {
                    padding-top: 16px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                    line-height: 24px;
                }
            }
        }
        .treasure {
            height: 690px;
            margin-top: 64px;
            min-width: 1200px;
            // background: url("../assets/img/quan.png") no-repeat;
            // background-size: 778px 841px;
            // background-position-x: 50%;
            overflow: hidden;
            .margin12 {
                display: flex;
                height: 690px;
                justify-content: space-between;
            }
            .treasure_left {
                width: 460px;
                .treasure_left_img {
                    padding-top: 191px;
                    img {
                        width: 42px;
                        height: 46px;
                    }
                }
                .treasure_left_title {
                    font-size: 30px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                    line-height: 24px;
                    padding-top: 20px;
                }
                .treasure_left_introd {
                    font-size: 14px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(193, 193, 193, 1);
                    line-height: 24px;
                    padding-top: 14px;
                }
                .treasure_left_content {
                    font-size: 14px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                    line-height: 24px;
                    padding-top: 16px;
                }
                .treasure_left_bottom {
                    padding-top: 30px;
                    display: flex;
                    .treasure_left_bottoms {
                        position: relative;
                        width: 100px;
                        height: 34px;
                        background: rgba(249, 67, 56, 1);
                        border-radius: 2px;
                        text-align: center;
                        font-size: 14px;
                        font-family: PingFangSC-Medium;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 1);
                        line-height: 34px;
                        margin-right: 20px;
                        cursor: pointer;
                        .treasure_left_bottoms_code {
                            display: none;
                            position: absolute;
                            left: 0;
                            top: 36px;
                            background: #fff;
                            box-shadow: 6px 6px 40px 0px rgba(0, 0, 0, 0.13);
                            text-align: center;
                            padding: 28px 26px 17px;
                            img {
                                width: 100px;
                                height: 100px;
                                background: #111a28;
                            }
                            p {
                                font-size: 14px;
                                font-family: PingFangSC-Regular;
                                font-weight: 400;
                                color: rgba(102, 102, 102, 1);
                                line-height: 20px;
                            }
                            &::before {
                                content: "";
                                background: #fff;
                                height: 10px;
                                width: 10px;
                                position: absolute;
                                left: 26px;
                                top: -5px;
                                transform: rotate(45deg);
                                border-radius: 2px;
                            }
                            &::after {
                                content: "";
                                height: 50px;
                                width: 100px;
                                position: absolute;
                                left: 0px;
                                top: -40px;
                            }
                        }
                        &:hover {
                            .treasure_left_bottoms_code {
                                display: block;
                            }
                        }
                    }
                }
            }
            .treasure_right {
                position: relative;
                display: flex;
                align-items: flex-end;
                .iPhoneimg {
                    width: 494px;
                    height: 636px;
                }
                .quanimg {
                    position: absolute;
                    z-index: -10;
                    left: 30px;
                    top: 0;
                    width: 778px;
                    height: 841px;
                }
            }
        }
        .cooperation {
            background: #f7f7f7;
            overflow: hidden;
            min-width: 1200px;
            .cooperation_title {
                padding-top: 146px;
                font-size: 36px;
                font-family: PingFangSC-Thin;
                font-weight: 100;
                color: rgba(51, 51, 51, 1);
                line-height: 36px;
                text-align: center;
                span {
                    font-size: 80px;
                    font-family: DINAlternate-Bold;
                    font-weight: bold;
                    color: rgba(51, 51, 51, 1);
                    line-height: 80px;
                    padding: 0 8px;
                }
            }
            .cooperation_lists {
                padding: 40px 0 107px;
                overflow-x: hidden;
                position: relative;
                transform: scaleX(0.1);
                transition: transform 0.5s linear;
                &::after {
                    content: "";
                    position: absolute;
                    z-index: 10;
                    left: 0;
                    top: 0;
                    height: 80%;
                    width: 20%;
                    background-image: linear-gradient(
                        -90deg,
                        hsla(0, 0%, 100%, 0),
                        #f7f7f7
                    );
                }
                &::before {
                    content: "";
                    position: absolute;
                    z-index: 10;
                    right: 0;
                    top: 0;
                    height: 80%;
                    width: 20%;
                    background-image: linear-gradient(
                        90deg,
                        hsla(0, 0%, 100%, 0),
                        #f7f7f7
                    );
                }
                .cooperation_lists1 {
                    margin-bottom: 30px;
                    height: 60px;
                    width: 99999px;
                    animation: cloudanlogo 70s linear infinite;
                    -moz-animation: cloudanlogo 70s linear infinite;
                    -webkit-animation: cloudanlogo 70s linear infinite;
                    -o-animation: cloudanlogo 70s linear infinite;
                    &::after {
                        content: "";
                        display: block;
                        clear: both;
                        overflow: hidden;
                        visibility: hidden;
                        height: 0;
                    }
                }
                .cooperation_lists2 {
                    height: 60px;
                    width: 99999px;
                    animation: cloudanlogo 80s linear infinite;
                    -moz-animation: cloudanlogo 80s linear infinite;
                    -webkit-animation: cloudanlogo 80s linear infinite;
                    -o-animation: cloudanlogo 80s linear infinite;
                    &::after {
                        content: "";
                        display: block;
                        clear: both;
                        overflow: hidden;
                        visibility: hidden;
                        height: 0;
                    }
                }
                .cooperation_lists_logo {
                    width: 140px;
                    height: 60px;
                    float: left;
                    margin-right: 50px;
                    background: rgba(255, 255, 255, 0.7);
                    box-shadow: 4px 4px 30px 0px rgba(0, 0, 0, 0.09);
                    border-radius: 2px;
                    background-image: url("../assets/img/cooperation.png");
                    background-size: 980px 120px;
                }
                @keyframes cloudanlogo {
                    0% {
                        transform: translateX(0px);
                    }
                    // 190
                    100% {
                        transform: translateX(-1330px);
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 2000px) {
    .wrapper .main .banner {
        height: 1000px;
        .banner-img {
            img {
                height: 1000px;
                margin: -500px 0 0 -1371px;
            }
        }
        .title {
            padding-top: 356px;
        }
    }
}
</style>
