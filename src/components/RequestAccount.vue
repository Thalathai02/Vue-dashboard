<template>
  <div>
    <transition name="slide-in-right" enter-active-class="animated slideInRight">
      <div
        v-show="show"
        class="Request"
        :class="{'light-Request':isDarkmode, 'dark-Request':!isDarkmode}"
      >
        Don't have account?
        <router-link to="Request">Request an account</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },computed: {
    isDarkmode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/color.scss";
@import "@/global-styles/Typography.scss";
.Request {
  position: absolute;
  top: 40px;
  right: 40px;
}
.light-Request {
  color: rgba(255, 255, 255, 0.3);
  a {
    color: white;
  }
}
.dark-Request {
  color: rgba(0, 0, 0, 0.3);
  a {
    color: black;
  }
}
</style>