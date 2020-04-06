<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import "animate.css"
export default {
  name: "app",
   computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f8f9fa";
  }

};
</script>
<style lang="scss">
@import "@/global-styles/color.scss";
@import "@/global-styles/Typography.scss";


*{
  transition: 0.8s cubic-bezier(0.2, 0.8 ,0.2, 1);
}
body {
 margin: 0;
  background: $dark-blue;
}
h1 {
  @include Heading-1;
}
p {
  @include large-text($Green);
}

#app {
  font-family: $system-fort_apple;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $White;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $White;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
