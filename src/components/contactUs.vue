<template>
    <div class="contactUsw">
        <div class="contactUs margin12 animationbottom" :style="animationRegress(contactUsw,200)">
            <div class="contactUs-title">留下联系方式，捷税官将在15分钟内联系您！</div>
            <div class="contactUs-introd">周一至周五 9:00-18:00</div>
            <div class="contactUs-submit">
                <el-input v-model="input" maxlength="11" onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
                <el-button type="warning" @click="subClick">提交</el-button>
            </div>
        </div>
    </div>
</template>
<script>
// import { userSaveConsult } from "../assets/js/common";
export default {
    data() {
        return {
            input: ""
        };
    },
    props: {
        contactUsw: {
            type: Number,
            default: 0
        },
        h: {
            type: Number,
            default: 0
        },
        sourceType: {
            type: Number, 
            default: 1002 //首页咨询：1001 产品页咨询：1002
        }
    },
    methods: {
        subClick() {
            if (!/^1[3456789]\d{9}$/.test(this.input)) {
                this.$message.error("手机号码有误，请重填");
                return false;
            }
            let param = {customerTel:this.input,sourceType:this.sourceType}
            // userSaveConsult(param).then((res)=>{
            //     // console.log(res.msg);
            //     if (res.state === 0) {
            //         this.$message({
            //             message: res.msg,
            //             type: 'success'
            //         });
            //     }else if(res.state === 1){
            //         this.$message(res.msg);
            //     }
            // })
        }
    },
    computed: {
        animationRegress() {
            return function(top, num) {
                if (top < this.h - num) {
                    return "transform: translate(0px, 0px) scaleX(1); opacity: 1;";
                }
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.contactUsw {
    margin-bottom: 100px;
    overflow: hidden;
}
.contactUs {
    height: 300px;
    background: url("../assets/img/contactUsimg.png") no-repeat;
    background-size: 100% 100%;
    border-radius: 2px;
    // transform: translate(0px, 300px);
    // opacity: 0;
    // transition: all 1s linear;
    .contactUs-title {
        text-align: center;
        padding-top: 60px;
        font-size: 40px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 40px;
    }
    .contactUs-introd {
        text-align: center;
        padding-top: 24px;
        font-size: 18px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
    }
    .contactUs-submit {
        padding-top: 40px;
        text-align: center;
        .el-input__inner {
            border: none;
        }
    }
}
</style>
<style lang="scss">
.contactUs-submit {
    .el-input {
        width: 382px;
        height: 50px;
        vertical-align: middle;
        .el-input__inner {
            border: none;
            height: 50px;
            line-height: 50px;
            border-radius: 2px;
            font-size: 26px;
        }
    }
    .el-button--warning {
        width: 90px;
        height: 50px;
        background: rgba(255, 208, 46, 1);
        border-radius: 2px;
        font-size: 18px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 25px;
        vertical-align: middle;
    }
}
</style>
