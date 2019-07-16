<template>
    <div class="aboutPaat" ref="普道科技详情页">
        <div class="logo">
            <router-link to="/" class="logo_img">
                <img class="img" src="../../assets/imgs/logo@3x@3x.png" alt>
            </router-link>
        </div>
        <div class="information margin">
            <div class="info-l">
                <div
                    class="infoImg1"
                    :style="'transform: translate3d(0px, '+infonum*0.1+'px, 0px);'"
                >
                    <!-- <img class="img" src="../../assets/imgs/paatDetails/leftphoto@2x.png"> -->
                </div>
                <div
                    class="infoImg2"
                    :style="'transform: translate3d(0px, '+infonum*0.2+'px, 0px);'"
                >
                    <img class="img" src="../../assets/imgs/paatDetails/paat@3x.png">
                </div>
            </div>
            <div class="info-r">
                <div
                    class="infotxt"
                    :style="'transform: translate3d(0px, '+infonum*0.1+'px, 0px);'"
                >
                    <div class="aboutPaat_title">关于普道</div>
                    <div class="underline"></div>
                    <div class="aboutPaat_content">
                        <p>普道（上海）信息科技有限公司，一家专注于财税行业，注重结合大数据和人工智能等前沿技术的科技型企业。我们在企业设立、财税外包等线下服务的线上化（SaaS系统）和自动化，税务智能化，纳税轻便化等多个垂直领域优势明显。旗下拥有标准化税筹工具领域的领先产品“捷税宝”，互联网化招商引资领域的创新产品“捷园宝”以及其他创新产品。</p>
                        <p>公司始终秉持“让财税管理更简单”的信念，逐步成长为国内头部的标准化税务筹划工具提供商，以及被客户高度信任的企业服务平台。</p>
                    </div>
                </div>
                <div
                    class="infoImg3"
                    :style="'transform: translate3d(0px, '+infonum*0.2+'px, 0px);'"
                >
                    <img class="img" src="../../assets/imgs/paatDetails/rightphoto@2x.png">
                </div>
            </div>
        </div>
        <div class="resource" ref="resource">
            <div class="resource_img"></div>
            <div class="margin">
                <div class="resource_en">
                    <img
                        src="../../assets/imgs/paatDetails/ADVANTAGE@3x.png"
                        :style="'opacity:'+(1-(resourcenum/1000))+';'"
                    >
                </div>
                <div
                    class="resource_content"
                    :style="'transform: translate3d(0px, '+resourcenum*0.2+'px, 0px);'"
                >
                    <div class="aboutPaat_title">资源支持</div>
                    <div class="underline"></div>
                    <div class="aboutPaat_content">
                        捷税宝作为中国首家标准化的税务筹划平台，早在2015年和2016年，分别接受了峰瑞资本和华映资本总共超过3000万人民币的投资。
                        <br>自2016年以来，捷税宝已和全国各地政府建立了一系列的战略合作关系。捷税宝在积极响应国家为中小企业减税的政策的同时，还根据用户的不同情况，选择适合他们的税收优惠方案。因为有了政府园区等相关政策的支持以及形成体系的标准化流程操作，捷税宝的方案落地时间大大缩短，以此带来了效率的极大提高。
                        <br>捷税宝秉承着长期、稳定、零风险的节税理念，已经和蚂蚁金服、阿里云、腾讯众创、京东云等各大企业服务平台展开了一系列合作，共同推广捷税宝SAAS服务产品。与此同时，捷税宝的客户包括：东方财富基金、新浪、百度、新东方、知乎和中国中铁等多个行业的不同领域。
                        <br>截至目前，捷税宝已经服务了数以万计的中小企业，得到了外界的一致好评，并且在企业服务细分领域中的税务市场取得了行业领头羊的地位。
                        <div
                            class="resource_fei"
                            :style="'transform: translate3d(0px, '+resourcenum*0.2+'px, 0px);'"
                        >
                            <img src="../../assets/imgs/shared/aircraft4.gif" alt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="team margin" ref="team">
            <div class="team_title" :style="'transform: translate3d(0px, '+teamnum*0.1+'px, 0px);'">
                <div class="aboutPaat_title">管理团队</div>
                <div class="underline"></div>
            </div>
            <div class="team_en" :style="'transform: translate3d(0px, '+teamnum*0.05+'px, 0px);'">
                <img
                    src="../../assets/imgs/paatDetails/OUR TEAM@3x.png"
                    :style="'opacity:'+(1-(teamnum/1000))+';'"
                >
            </div>
            <div class="team_list">
                <div
                    class="team_lists team_character1"
                    :style="'transform: translate3d(0px, '+teamnum*0.1+'px, 0px);'"
                >
                    <div class="team_lists_content">
                        <div class="imghead"><img class="img" src="../../assets/imgs/paatDetails/RICK.png" alt></div>
                        <h3>个人履历</h3>
                        <p>上海交通大学，深耕互联网财税行业20余年，曾任职阿尔卡特、四大会计师事务所（普华永道、安永中国）、国际知名律师事务所；南京大学创业导师；曾服务过阿里巴巴、巴斯夫、雀巢、中粮集团等超大型企业，并主导完成阿里巴巴海外投资架构搭建，工商银行上市前税务风险评估等大型项目。</p>
                    </div>
                    <div class="team_lists_name team_lists_name1">
                        <p>
                            <i>首席执行官 /&nbsp;</i>
                            <span>CEO</span>
                        </p>
                        <h3>邓礼政</h3>
                        <h4>RICK DENG</h4>
                    </div>
                </div>
                <div
                    class="team_lists team_character2"
                    :style="'transform: translate3d(0px, '+teamnum*0.1+'px, 0px);'"
                >
                    <div class="team_lists_content">
                        <div class="imghead"><img class="img" src="../../assets/imgs/paatDetails/ZOE.png" alt></div>
                        <h3>个人履历</h3>
                        <p>清华大学，曾任职于世界500强企业，深耕企业管理咨询领域十余年，连续创业者；有丰富的政府、商会资源；曾主导过数十家拟上市公司和投资机构投资股权退出的税务优化服务。擅长企业组织架构规划，并购重组税务规划，现主导捷税宝项目营销管理及运营服务。</p>
                    </div>
                    <div class="team_lists_name team_lists_name2">
                        <p>
                            <i>首席运营官 /&nbsp;</i>
                            <span>COO</span>
                        </p>
                        <h3>徐柚洣</h3>
                        <h4>ZOE XU</h4>
                    </div>
                </div>
                <div
                    class="team_lists team_character3"
                    :style="'transform: translate3d(0px, '+teamnum*0.1+'px, 0px);'"
                >
                    <div class="team_lists_content">
                        <div class="imghead"><img class="img" src="../../assets/imgs/paatDetails/WHOOPER.png" alt></div>
                        <h3>个人履历</h3>
                        <p>上海交通大学，20年财税领域从业经验，连续创业者，曾就职国内知名审计事务所，5年税务稽查经验；精通国内国际税收政策；现主导线下产品设计优化，风控管理，统筹政府资源合作。</p>
                    </div>
                    <div class="team_lists_name team_lists_name1">
                        <p>
                            <i>首席服务官 /&nbsp;</i>
                            <span>CSO</span>
                        </p>
                        <h3>黄&nbsp;&nbsp;&nbsp;鹤</h3>
                        <h4>WHOOPER HUANG</h4>
                    </div>
                </div>
                <div
                    class="team_lists team_character4"
                    :style="'transform: translate3d(0px, '+teamnum*0.1+'px, 0px);'"
                >
                    <div class="team_lists_content">
                        <div class="imghead"><img class="img" src="../../assets/imgs/paatDetails/jiwei.png" alt></div>
                        <h3>个人履历</h3>
                        <p>华映资本创始合伙人，联合创立对冲基金汇点投资有限公司。在风投领域深耕多年，曾成功主导海蝶音乐、51信用卡、微盟、界面等公司的投资。</p>
                    </div>
                    <div class="team_lists_name team_lists_name2">
                        <p>
                            <i>合伙人 /&nbsp;</i>
                            <span>Partner</span>
                        </p>
                        <h3>季&nbsp;&nbsp;&nbsp;薇</h3>
                        <h4>WEI JI</h4>
                    </div>
                </div>
                <div
                    class="team_lists team_character5"
                    :style="'transform: translate3d(0px, '+teamnum*0.1+'px, 0px);'"
                >
                    <div class="team_lists_content">
                        <div class="imghead"><img class="img" src="../../assets/imgs/paatDetails/lifeng.png" alt></div>
                        <h3>个人履历</h3>
                        <p>峰瑞资本创始人，IDG资本最年轻的合伙人之一，侧重消费与深科技领域的投资，过去10年，主导了对360金融、宜信、Bilibili\英语流利说等公司的投资。</p>
                    </div>
                    <div class="team_lists_name team_lists_name1">
                        <p>
                            <i>合伙人 /&nbsp;</i>
                            <span>Partner</span>
                        </p>
                        <h3>李&nbsp;&nbsp;&nbsp;丰</h3>
                        <h4>FENG LI</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="cooperation margin" ref="cooperation">
            <div class="name36kr">
                <div
                    class="name36kr_img"
                    :style="'transform: translate3d(0px, '+cooperationnum*0.2+'px, 0px);'"
                ></div>
            </div>
            <div
                class="dytvName"
                :style="'transform: translate3d(0px, '+cooperationnum*0.2+'px, 0px);'"
            >
                <div class="dytvName_img"></div>
            </div>
            <div class="cooperation_firm">
                <div
                    class="cooperation_list"
                    :style="'transform: translate3d(0px, '+cooperationnum*0.1+'px, 0px);'"
                ></div>
                <div
                    class="cooperation_right"
                    :style="'transform: translate3d(0px, '+cooperationnum*0.1+'px, 0px);'"
                >
                    <div class="aboutPaat_title">企业合作</div>
                    <div class="underline"></div>
                </div>
            </div>
            <div class="jdName">
                <div
                    class="jdName_img"
                    :style="'transform: translate3d(0px, '+cooperationnum*0.2+'px, 0px);'"
                ></div>
            </div>
        </div>
        <div class="contact margin" ref="contact">
            <div
                class="contact_en"
                :style="'transform: translate3d(0px, '+contactnum*0.05+'px, 0px);'"
            >
                <img
                    src="../../assets/imgs/paatDetails/CONTACT US@3x.png"
                    :style="'opacity:'+(1-(contactnum/1000))+';'"
                >
            </div>
            <div
                class="contact_way"
                :style="'transform: translate3d(0px, '+contactnum*0.4+'px, 0px);'"
            >
                <div class="aboutPaat_title">联系方式</div>
                <div class="underline"></div>
            </div>
            <div
                class="contact_content"
                :style="'transform: translate3d(0px, '+contactnum*0.2+'px, 0px);'"
            >
                <div
                    class="companyAddress"
                    :style="'transform: translate3d(0px, '+contactnum*0.15+'px, 0px);'"
                >
                    <h3>上海总部</h3>
                    <h4>SHANGHAI</h4>
                    <p>
                        上海市浦东新区盛荣路88弄(盛大天地源创谷)
                        <br>3号楼8层
                    </p>
                </div>
                <div
                    class="companyAddress"
                    :style="'transform: translate3d(0px, '+contactnum*0.15+'px, 0px);'"
                >
                    <h3>北京分公司</h3>
                    <h4>BEIJING</h4>
                    <p>北京市朝阳区广渠路11号金泰国际大厦A座八层810-811室</p>
                </div>
                <div
                    class="companyAddress"
                    :style="'transform: translate3d(0px, '+contactnum*0.15+'px, 0px);'"
                >
                    <h3>深圳分公司</h3>
                    <h4>SHENZHEN</h4>
                    <p>深圳市南山区南新路与东滨路交汇处阳光科创中心A栋2402</p>
                </div>
                <div
                    class="companyAddress"
                    :style="'transform: translate3d(0px, '+contactnum*0.05+'px, 0px);'"
                >
                    <h3>杭州分公司</h3>
                    <h4>HANGZHOU</h4>
                    <p>浙江省杭州市萧山区皓月路159号诺德财富中心A座2107</p>
                </div>
                <div
                    class="companyAddress"
                    :style="'transform: translate3d(0px, '+contactnum*0.05+'px, 0px);'"
                >
                    <h3>广州分公司</h3>
                    <h4>GUANGZHOU</h4>
                    <p>广州市天河区华穗路406号保利克洛维中景A栋1006A</p>
                </div>
                <div
                    class="companyAddress"
                    :style="'transform: translate3d(0px, '+contactnum*0.05+'px, 0px);'"
                >
                    <h3>天津分公司</h3>
                    <h4>TIANJIN</h4>
                    <p>天津市南开区融汇广场2-1-602</p>
                </div>
                <div style="height:15px;width:100%;"></div>
                <div class="companyContact">
                    <span>咨询热线：</span>
                    <b>400-012-6291</b>
                </div>
                <div class="companyContact">
                    <span>售后热线：</span>
                    <b>400-820-5330</b>
                </div>
                <div class="companyContact">
                    <span>代理热线：</span>
                    <b>400-969-6670</b>
                </div>
                <div class="companyContact">
                    <span>园区合作：</span>
                    <b>177 2138 2531</b>
                    <img src="../../assets/imgs/paatDetails/WeChat@3x.png" alt>
                </div>
                <div class="companyContact">
                    <span>市场合作：</span>
                    <b>marketing@paat.com</b>
                </div>
                <div class="companyContact"></div>
            </div>
        </div>
        <div class="gototop" @click="backTop">
            <img src="../../assets/imgs/paatDetails/gototop.gif" alt>
            <!-- <div class="gototopimg"></div> -->
        </div>
        <div class="footer">
            <div class="footer_top margin">
                <div class="footer_left">
                    <p>
                        <img src="../../assets/imgs/paatDetails/phone@3x.png" alt>021 5071 0553 转 8071
                    </p>
                    <p>
                        <img src="../../assets/imgs/paatDetails/address@3x.png" alt>上海市浦东新区盛荣路88弄(盛大天地源创谷)3号楼8层
                    </p>
                </div>
                <div class="footer_right">
                    <div class="footer_right_list">
                        <div class="footer_right_list_img">
                            <img class="img" src="../../assets/imgs/paatDetails/leftcode.png" alt>
                        </div>
                        <p>普道企服咨询</p>
                    </div>
                    <div class="footer_right_list">
                        <div class="footer_right_list_img">
                            <img class="img" src="../../assets/imgs/paatDetails/rightcode.png" alt>
                        </div>
                        <p class="footer_right_list_en">Paat Solution</p>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">COPYRIGHT © 2019 - 普道（上海）信息科技有限公司 沪ICP备10005376号-9</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollTop: "",
            infonum: 0,
            resourcenum: 0,
            teamnum: 0,
            cooperationnum: 0,
            contactnum: 0,
            timer: ""
        };
    },
    methods: {
        // 滚动条
        handleScroll() {
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            this.scrollTop = scrollTop;
            // 获取div距离顶部距离
            this.infonum = 0 - scrollTop;
            this.resourcenum = this.$refs.resource.offsetTop - scrollTop;
            this.teamnum = this.$refs.team.offsetTop - scrollTop;
            this.cooperationnum = this.$refs.cooperation.offsetTop - scrollTop;
            this.contactnum = this.$refs.contact.offsetTop - scrollTop;
        },
        backTop() {
            let that = this;
            document.documentElement.scrollTop = 0;
            // this.timer = setInterval(() => {
            //     let ispeed = Math.floor(-that.scrollTop / 5);
            //     document.documentElement.scrollTop = document.body.scrollTop =
            //         that.scrollTop + ispeed;
            //     if (that.scrollTop === 0) {
            //         clearInterval(this.timer);
            //     }
            // }, 16);
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, true);
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
    }
};
</script>


<style lang="scss" scoped>
.aboutPaat {
    // overflow-y: hidden;
    div {
        transition: transform 1s;
        -moz-transition: transform 1s; /* Firefox 4 */
        -webkit-transition: transform 1s; /* Safari 和 Chrome */
        -o-transition: transform 1s; /* Opera */
    }
    img{
         transition: opacity 1s;
        -moz-transition:  opacity 1s; /* Firefox 4 */
        -webkit-transition:  opacity 1s; /* Safari 和 Chrome */
        -o-transition:  opacity 1s; /* Opera */
    }
    .img {
        width: 100%;
        height: 100%;
    }
    .logo {
        padding: 60px;
        .logo_img {
            width: 120px;
            height: 30px;
            display: inline-block;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .margin {
        margin: 0 auto;
        width: 1200px;
    }
    .underline {
        width: 46px;
        height: 2px;
        background: #0068ff;
        margin: 30px 0;
    }
    .aboutPaat_title {
        font-size: 48px;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: rgba(0, 104, 255, 1);
        line-height: 48px;
    }
    .aboutPaat_content {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 28px;
        p {
            padding-bottom: 20px;
        }
    }
    .information {
        display: flex;
        padding: 40px 0 0;
        .info-l {
            width: 625px;
            .infoImg1 {
                width: 625px;
                height: 625px;
                background-image: url("../../assets/imgs/paatDetails/leftphoto.png");
                background-size: auto 100%;
                background-repeat: no-repeat;
                background-position-x: 0;
                animation: imgright 20s linear infinite alternate;
                -moz-animation: imgright 20s linear infinite alternate;
                -webkit-animation: imgright 20s linear infinite alternate;
                -o-animation: imgright 20s linear infinite alternate;
            }
            .infoImg2 {
                width: 192px;
                height: 192px;
                margin-left: 217px;
                margin-top: -30px;
                box-shadow: 0px 15px 100px 0px rgba(0, 104, 255, 0.2);
            }
        }
        .info-r {
            width: 565px;
            padding-left: 10px;
            .infotxt {
                width: 575px;
                padding-left: 90px;
                padding-bottom: 75px;
                box-sizing: border-box;
            }
            .infoImg3 {
                width: 575px;
                height: 540px;
                box-shadow: 0px 20px 100px 0px rgba(0, 104, 255, 0.1);
            }
        }
    }
    .resource {
        position: relative;
        .resource_img {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 500px;
            width: 100%;
            background: url("../../assets/imgs/paatDetails/sketch@3x.png")
                no-repeat 50% bottom;
            background-size: cover;
        }

        .resource_en {
            font-size: 225px;
            font-family: DINAlternate-Bold;
            font-weight: bold;
            color: rgba(244, 249, 255, 1);
            line-height: 262px;
            width: 1208px;
            height: 262px;
            img {
                width: 1200px;
                height: 166px;
                margin: auto 0;
            }
        }
        .resource_content {
            margin-top: -84px;
            position: relative;
            z-index: 1;
            width: 600px;
            height: 625px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 20px 120px 0px rgba(0, 104, 255, 0.1);
            padding: 60px 60px 90px;
            box-sizing: border-box;
            margin-bottom: 80px;
            .resource_fei {
                position: absolute;
                z-index: 10;
                width: 137px;
                height: 137px;
                top: -43px;
                right: -46px;
                img {
                    position: absolute;

                    width: 300px;
                    height: 300px;
                    top: -118px;
                    left: -84px;
                }
            }
        }
    }
    .team {
        .team_title {
            margin-left: 60px;
        }
        .team_en {
            width: 1219px;
            height: 314px;
            font-size: 270px;
            font-family: DINAlternate-Bold;
            font-weight: bold;
            color: rgba(244, 249, 255, 1);
            line-height: 314px;
            img {
                width: 100%;
            }
        }
        .team_list {
            height: 2200px;
            position: relative;
            .team_lists {
                width: 446px;
                height: 657px;
                position: absolute;
                box-sizing: border-box;
                .team_lists_content {
                    width: 390px;
                
                    .imghead {
                        width: 386px;
                        height: 380px;
                        background: linear-gradient(
                            180deg,
                            #9193aa 0%,
                            #e5e6f1 100%
                        );
                        overflow: hidden;
                        img{
                            transition: transform 0.5s;
                            -webkit-transition: transform 0.5s; /* Safari */
                        }
                        &:hover {
                            img{
                                transform: scale(1.05);
                            -ms-transform: scale(1.05); /* IE 9 */
                            -moz-transform: scale(1.05); /* Firefox */
                            -webkit-transform: scale(
                                1.05
                            ); /* Safari 和 Chrome */
                            -o-transform: scale(1.05);
                            }
                        }
                    }
                   
                    h3 {
                        margin-top: 70px;
                        // margin-left: 10px;
                        font-size: 16px;
                        font-family: PingFangSC-Medium;
                        font-weight: 500;
                        color: rgba(0, 105, 255, 1);
                        line-height: 16px;
                    }
                    p {
                        margin-top: 18px;
                        // margin-left: 10px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(102, 102, 102, 1);
                        line-height: 26px;
                    }
                }
                .team_lists_name {
                    transform: translate3d(0,0,0);
                    width: 250px;
                    height: 114px;
                    background: rgba(0, 105, 255, 1);
                    color: #fff;
                    padding: 29px 0 0 24px;
                    box-sizing: border-box;
                    position: absolute;
                    box-shadow: 0px 10px 60px 0px rgba(0, 104, 255, 0.1);
                    top: 302px;
                    p {
                        font-size: 16px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(245, 249, 255, 1);
                        line-height: 16px;
                        padding-bottom: 16px;
                        vertical-align: bottom;
                        i {
                            vertical-align: middle;
                        }
                        span {
                            font-size: 16px;
                            font-family: ArialMT;
                            color: rgba(255, 255, 255, 1);
                            line-height: 18px;
                            vertical-align:sub;
                        }
                    }
                    h3 {
                        display: inline-block;
                        font-size: 24px;
                        font-family: PingFangSC-Medium;
                        font-weight: bold;
                        color: rgba(245, 249, 255, 1);
                        line-height: 24px;
                    }
                    h4 {
                        padding-left: 20px;
                        display: inline-block;
                        font-size: 18px;
                        font-family: DINCondensed-Bold;
                        color: rgba(255, 255, 255, 1);
                        line-height: 18px;
                        vertical-align: middle;
                    }
                    &.team_lists_name1 {
                        left: 0;
                    }
                    &.team_lists_name2 {
                        right: 0;
                    }
                }
            }
            .team_character1 {
                left: 0;
                top: -139px;
                padding-left: 60px;
            }
            .team_character2 {
                right:0;
                top: 29px;
            }
            .team_character3 {
                left: 0;
                top: 777px;
                padding-left: 60px;
            }
            .team_character4 {
                right:0;
                top: 1011px;
            }
            .team_character5 {
                left: 0;
                top: 1648px;
                padding-left: 60px;
            }
        }
    }
    .cooperation {
        .name36kr {
            height: 83px;
            text-align: right;
            .name36kr_img {
                display: inline-block;
                width: 119px;
                height: 83px;
                background-image: url("../../assets/imgs/paatDetails/36Kr@3x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
        }
        .dytvName {
            width: 119px;
            height: 83px;
            margin-left: -60px;
            position: relative;
            z-index: 2;
            .dytvName_img {
                width: 100%;
                height: 100%;
                background-image: url("../../assets/imgs/paatDetails/zhihu@3x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
        }
        .cooperation_firm {
            margin-top: -42px;
            display: flex;
            .cooperation_list {
                width: 635px;
                height: 345px;
                background: rgba(250, 252, 255, 1);
                background-image: url("../../assets/imgs/paatDetails/logo@3x.png");
                background-repeat: no-repeat;
                background-size: 511px 221px;
                background-position: 60px 60px;
            }
            .cooperation_right {
                padding-left: 79px;
            }
        }
        .jdName {
            position: relative;
            z-index: 10;
            .jdName_img {
                margin-left: 437px;
                margin-top: -22px;
                width: 133px;
                height: 93px;
                background-image: url("../../assets/imgs/paatDetails/jingdong@3x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                box-shadow: 0px 10px 60px 0px rgba(0, 104, 255, 0.2);
            }
        }
    }
    .contact {
        padding-bottom: 160px;
        .contact_en {
            width: 1202px;
            height: 256px;
            font-size: 220px;
            font-family: DINAlternate-Bold;
            font-weight: bold;
            color: rgba(244, 249, 255, 1);
            line-height: 256px;
            img {
                width: 100%;
            }
        }
        .contact_way {
            margin-top: -120px;
            margin-left: 60px;
            position: relative;
            z-index: 1;
        }
        .contact_content {
            margin-top: 70px;
         
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .companyAddress {
                width: 362px;
                height: 211px;
                background: rgba(245, 249, 255, 1);
                margin-top: 50px;
                padding: 40px 35px 0 30px;
                box-sizing: border-box;
                background-size: 100% 100%;

                &:nth-child(1) {
                    background-image: url("../../assets/imgs/paatDetails/shanghai@2x.png");
                }
                &:nth-child(2) {
                    background-image: url("../../assets/imgs/paatDetails/beijing@2x.png");
                }
                &:nth-child(3) {
                    background-image: url("../../assets/imgs/paatDetails/shenzhen@2x.png");
                }
                &:nth-child(4) {
                    background-image: url("../../assets/imgs/paatDetails/hangzhou@2x.png");
                }
                &:nth-child(5) {
                    background-image: url("../../assets/imgs/paatDetails/guangzhou@2x.png");
                }
                &:nth-child(6) {
                    background-image: url("../../assets/imgs/paatDetails/tianjing@2x.png");
                }
                h3 {
                    font-size: 24px;
                    font-family: PingFangSC-Medium;
                    font-weight: 500;
                    color: rgba(0, 104, 255, 1);
                    line-height: 24px;
                    padding-bottom: 19px;
                }
                h4 {
                    font-size: 24px;
                    font-family: DINCondensed-Bold;
                    font-weight: bold;
                    color: rgba(0, 104, 255, 1);
                    line-height: 24px;
                    padding-bottom: 25px;
                }
                p {
                    font-size: 14px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(68, 68, 68, 1);
                    line-height: 20px;
                }

                &:hover {
                    background-size: 100% 100%;
                    box-shadow: 0px 10px 80px 0px rgba(0, 104, 255, 0.25);
                    h3 {
                        color: #fff;
                    }
                    h4 {
                        color: #fff;
                    }
                    p {
                        color: #fff;
                    }
                    &:nth-child(1) {
                        background-image: url("../../assets/imgs/paatDetails/shanghai-slip@2x.png");
                    }
                    &:nth-child(2) {
                        background-image: url("../../assets/imgs/paatDetails/beijing-clip@2x.png");
                    }
                    &:nth-child(3) {
                        background-image: url("../../assets/imgs/paatDetails/shenzhen-clip@2x.png");
                    }
                    &:nth-child(4) {
                        background-image: url("../../assets/imgs/paatDetails/hanhzhou-clip@2x.png");
                    }
                    &:nth-child(5) {
                        background-image: url("../../assets/imgs/paatDetails/guanzhou-clip@2x.png");
                    }
                    &:nth-child(6) {
                        background-image: url("../../assets/imgs/paatDetails/tianjin-clip@2x.png");
                    }
                }
            }
            .companyContact {
                padding-left: 30px;
                padding-top: 65px;
                width: 362px;
                box-sizing: border-box;
                span {
                    font-size: 16px;
                    font-family: PingFangSC-Medium;
                    font-weight: 500;
                    color: rgba(0, 105, 255, 1);
                    line-height: 16px;
                }
                b {
                    font-size: 20px;
                    font-family: DINCondensed-Bold;
                    font-weight: bold;
                    color: rgba(68, 68, 68, 1);
                    line-height: 20px;
                }
                img {
                    margin-left: 15px;
                    height: 22px;
                    width: 22px;
                    margin-top: -8px;
                }
            }

            ul {
                padding-left: 60px;
                li {
                    border-top: 1px solid #999999;
                    padding: 22px 0 24px;
                    span {
                        width: 176px;
                        display: inline-block;
                        font-size: 14px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(119, 119, 119, 1);
                        line-height: 14px;
                    }
                    b {
                        font-size: 14px;
                        font-family: PingFangSC-Medium;
                        font-weight: 600;
                        color: rgba(54, 63, 82, 1);
                        line-height: 14px;
                    }
                }
            }
        }
    }
    .gototop {
        text-align: center;
        cursor: pointer;
        position: relative;
        margin: 0 auto 134px;
        width: 50px;
        height: 90px;
        img{
            width: 10px;
            height: 72px;
        }
        // &:hover {
        //     .gototopimg {
        //         background-image: url("../../assets/imgs/paatDetails/blue2@3x.png");
        //     }
        // }
        // .gototopimg {
        //     width: 9px;
        //     height: 40px;
        //     background-image: url("../../assets/imgs/paatDetails/blue@3x.png");
        //     background-size: 100% 100%;
        //     animation: gotocloudan 1s linear infinite alternate;
        //     -moz-animation: gotocloudan 1s linear infinite alternate;
        //     -webkit-animation: gotocloudan 1s linear infinite alternate;
        //     -o-animation: gotocloudan 1s linear infinite alternate;
        // }
    }
    .footer {
        height: 262px;
        background: rgba(3, 12, 47, 1);
        position: relative;
        .footer_top {
            display: flex;
            .footer_left {
                padding-top: 62px;
                box-sizing: border-box;
                img {
                    width: 16px;
                    height: 16px;
                    margin-right: 6px;
                    vertical-align: bottom;
                }
                p {
                    font-size: 14px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(138, 148, 167, 1);
                    line-height: 14px;
                    padding-bottom: 39px;
                }
            }
            .footer_right {
                flex: 1;
                padding-top: 43px;
                display: flex;
                justify-content: flex-end;
                box-sizing: border-box;
                .footer_right_list {
                    padding-left: 107px;
                    text-align: center;
                    .footer_right_list_img {
                        width: 72px;
                        height: 72px;
                        margin-bottom: 16px;
                        display: inline-block;
                        &:hover {
                            box-shadow: 0px 18px 60px 0px
                                rgba(0, 104, 255, 0.18);
                        }
                    }
                    p {
                        font-size: 12px;
                        font-family: DINCondensed-Bold;
                        font-weight: 400;
                        color: rgba(138, 148, 167, 1);
                        line-height: 16px;
                    }
                    .footer_right_list_en {
                        font-size: 16px;
                    }
                }
            }
        }
        .footer_bottom {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            height: 70px;
            line-height: 70px;
            font-size: 13px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(138, 148, 167, 1);
            text-align: center;
            border-top: 1px solid rgba(73, 84, 99, 0.5);
        }
    }
    @keyframes imgright {
        0% {
            background-position-x: 0;
        }
        100% {
            background-position-x: -284px;
        }
    }
    @keyframes gotocloudan {
        0% {
            transform: translateY(0);
            -moz-transform: translateY(0);
            -o-transform: translateY(0);
            -webkit-transform: translateY(0);
        }
        100% {
            transform: translateY(37px);
            -moz-transform: translateY(37px);
            -o-transform: translateY(37px);
            -webkit-transform: translateY(37px);
        }
    }
}
</style>