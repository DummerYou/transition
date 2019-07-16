<template>
    <div class="jsb-advisory">
        <div class="jsb-support-hotline-wai">
            <div class="jsb-support-hotline">
                <a href="https://qiyukf.com/client?k=edf6ca11f496d3ac8a785e1e8d51a82e" target="_blank">
                    <p>在线咨询</p>
                    <span>周一至周五 9:00-18:00</span></a>
                <p>电话咨询</p>
                <span>021 5071 0553 转 8071</span>
            </div>
        </div>
        <div class="jsb-advisory-hover"><p>咨</p><p>询</p><p>·</p><p>体</p><p>验</p></div>
    </div>
</template>
<script>
export default {
    name: "jsbAdvisory",
    data() {
        return {};
    }
};
</script>

<style lang="scss">
.jsb-advisory {
    position: fixed;
    right: 0;
    top: 250px;
    display: flex;
    z-index: 9999;
    .jsb-advisory-hover {
        width: 40px;
        height: 109px;
        background: rgba(39, 39, 39, 1);
        opacity: 0.7037;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 14px;
        padding-top: 20px;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
    }
    .jsb-support-hotline-wai {
        overflow: hidden;
            width: 0;
            height: 109px;
            transition: width 1s;
            box-shadow: 6px 6px 40px 0px rgba(0, 0, 0, 0.07);
        .jsb-support-hotline {
            width: 168px;
            height: 109px;
            background: rgba(255, 255, 255, 1);
            border-radius: 2px 0px 0px 2px;
            padding-left: 20px;
            p {
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(102, 102, 102, 1);
                line-height: 20px;
                padding-top: 10px;
            }
            span {
                font-size: 12px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 17px;
                padding-top: 2px;
            }
        }
    }

    &:hover {
        .jsb-support-hotline-wai {
            width: 168px;
        }
    }
}
</style>
