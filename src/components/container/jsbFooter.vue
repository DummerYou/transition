<template>
    <div class="jsb-footer">
        <div class="jsb-footer_top">
            <div class="jsb-footer_top_left">
                <div class="jsb-footer_top_left_phone">
                    <img src="../../assets/img/icon2.png" alt>
                    <span>021 5071 0553 转 8071</span>
                </div>
                <div>
                    <img src="../../assets/img/icon1.png" alt>
                    <span>上海市浦东新区盛荣路88弄(盛大天地源创谷)3号楼8层</span>
                </div>
            </div>
            <div class="jsb-footer_top_code">
                <div class="jsb-footer_top_code_img"><img src="../../assets/img/jsbcode.png" alt=""></div>
                <p>捷税宝微信公众号</p>
            </div>
        </div>
        <div class="jsb-footer_bottom">COPYRIGHT &#169; 2019 - 普道（上海）信息科技有限公司 <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">沪ICP备10005376号-9</a></div>
    </div>
</template>
<script>
export default {
    name: "jsbFooter",
    data() {
        return {};
    }
};
</script>

<style lang="scss">
.jsb-footer {
    background: #1a1a1a;
    box-shadow:4px 6px 40px 0px rgba(52,49,47,0.07);
            min-width: 1200px;
    .jsb-footer_top {
        height: 189px;
        margin: 0 auto;
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .jsb-footer_top_left {
            img{
                width: 16px;
                height: 16px;
                vertical-align: text-top;
            }
            span {
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(130, 130, 130, 1);
                line-height: 14px;
            }
            .jsb-footer_top_left_phone {
                margin-bottom: 40px;
            }
        }
        .jsb-footer_top_code {
            display: flex;
            flex-direction: column;
            align-items: center;
            .jsb-footer_top_code_img {
                width: 72px;
                height: 72px;
                background: #fff;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            p {
                font-size: 12px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(130, 130, 130, 1);
                line-height: 16px;
                padding-top: 16px;
            }
        }
    }
    .jsb-footer_bottom {
        height: 70px;
        border-top: 1px solid #3c3c3c;
        text-align: center;
        font-size: 13px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(131, 131, 131, 1);
        line-height: 70px;
        a{
            color: rgba(131, 131, 131, 1);
        }
    }
}
</style>
