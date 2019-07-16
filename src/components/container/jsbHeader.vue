<template>
    <div class="jsb-header" :id="setWhite">
        <div class="jsb-header_margin">
            <div class="jsb-header_logo">
                <nuxt-link to="/"></nuxt-link>
            </div>
            <div class="jsb-header_list">
                <el-dropdown size="mini" placement="bottom-start">
                    <span class="jsb-header_list_a">产品</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <nuxt-link to="/taxPlan/serviceType">服务型税筹方案</nuxt-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <nuxt-link to="/taxPlan/advertising">广告型税筹方案</nuxt-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <nuxt-link to="/taxPlan/purchase">采购型税筹方案</nuxt-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <nuxt-link to="/taxPlan/knowledge">知产型税筹方案</nuxt-link>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <nuxt-link class="jsb-header_list_a" to="/news">资讯</nuxt-link>
                <nuxt-link class="jsb-header_list_a" to="/about">关于</nuxt-link>
                <!-- <nuxt-link class="jsb-header_list_a" to="/">
                    <span>下载</span>
                </nuxt-link>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "jsbHeader",
    data() {
        return {
            nonePad: false,
            scrollTop: 0
        };
    },
    props: {
        scrollTopNum: {
            type: Number,
            default: -100
        },
    },
    computed: {
        setWhite: function() {
            return this.scrollTopNum < this.scrollTop
                ? "jsb-header_white"
                : "";
        }
    },
    methods: {
        // 滚动条
        handleScroll() {
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            this.scrollTop = scrollTop;
        },
        backTop() {
            let that = this;
            document.documentElement.scrollTop = 0;
        }
    },
    mounted() {
        // console.log("object");
        window.addEventListener("scroll", this.handleScroll, true);
        this.handleScroll()
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
    }
};
</script>


<style lang="scss">
.jsb-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
    z-index: 999;
    .jsb-header_margin {
        width: 1200px;
        height: 60px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .jsb-header_logo {
            width: 100px;
            height: 24px;
            background-image: url("../../assets/img/logo.png");
            background-size: 100%;
            position: relative;
            a {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                display: inline-block;
                width: 100%;
                height: 100%;
            }
        }
        .jsb-header_list {
            display: flex;
            .el-dropdown:focus {
                outline: none;
            }
            .jsb-header_list_a {
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 25px;
                display: inline-block;
                height: 25px;
                cursor: pointer;
                &:not(:first-child) {
                    margin-left: 60px;
                }
                &:focus {
                    outline: none;
                }
                // &:last-child {
                //     span {
                //         display: inline-block;
                //         text-align: center;
                //         width: 70px;
                //         height: 25px;
                //         border: 1px solid rgba(255, 255, 255, 0.5);
                //     }
                // }
            }
        }
    }
}
#jsb-header_white {
    background: #ffffff;
    border-bottom: 1px solid #eaeaea;
    .jsb-header_margin {
        .jsb-header_logo {
            background-image: url("../../assets/img/logo1.png");
        }
        .jsb-header_list {
            .jsb-header_list_a {
                color: #333333;
                &:last-child {
                    span {
                        color: #333333;
                        border: 1px solid #cdcdcd;
                    }
                }
            }
        }
    }
}
</style>


<style lang="scss" >
.el-dropdown-menu--mini {
    padding: 15px 30px;
    .el-dropdown-menu__item {
        padding: 7px 0;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #666666;
        line-height: 24px;
    }
    .el-dropdown-menu__item:focus,
    .el-dropdown-menu__item:not(.is-disabled):hover {
        background: none;
        a {
            color: #f94338;
        }
    }
}
</style>
