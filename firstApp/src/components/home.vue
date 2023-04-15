<template>
  <div>
    <button @click="showRightContent">展示右侧内容</button>
    <transition name="slide-left">
      <div v-if="isShowRightContent" class="right-content" ref="rightContent">
        // 这里放置右侧内容的代码
      </div>
    </transition>
    <div class="left-content">
      // 这里放置左侧内容的代码
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowRightContent: false
    }
  },
  methods: {
    showRightContent() {
      this.isShowRightContent = true;
      this.$nextTick(() => {
        this.$refs.rightContent.enter();
      });
    }
  }
}
</script>

<style>
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.5s;
}

.slide-left-enter, .slide-left-leave-to {
  transform: translateX(50%);
}

.slide-left-leave, .slide-left-enter-to {
  transform: translateX(0%);
}

.right-content {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
}

.left-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
}
</style>
