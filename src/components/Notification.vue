<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutRight">
    <div v-show="show" class="bubble" :class="container">
      <div class="message">{{text}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  },
  props: {
    text: String
  }
};
</script>

<style scoped lang="scss">
@import "@/global-styles/color.scss";
@import "@/global-styles/Typography.scss";
.bubble {
  border-radius: 6px;
  position: absolute;
  top: 10%;
  padding: 5px 10px 5px 10px;
  background-color: $Blue;
}

.message {
  @include Medium-text;
  color: $White;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
