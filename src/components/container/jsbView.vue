<template>
    <div class="jsb-view">
        <slot name="jsbHeader"></slot>
        <transition appear name="fade" mode="out-in">
            <div class="jsb-main" :class="{'none-pad': nonePad}">
                <slot></slot>
            </div>
        </transition>
        <slot name="jsbFooter"></slot>
        <slot name="jsbAdvisory"></slot>
    </div>
</template>

<script>
export default {
    name: "jsbView",
    data() {
        return {
            nonePad: false
        };
    },
    mounted() {}
};
</script>

<style lang="scss">
.jsb-view {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .jsb-main {
        // flex: 1;
    }
}
</style>

