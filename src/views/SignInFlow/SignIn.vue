<template>
  <div class="container" :class="{'light-background':!isDarkmode,'dark-background':isDarkmode}">
    <RequestAccount />
    <div class="Lonin">
      <img src="@/assets/logo.png" v-show="isDarkMode" />
      <img src="@/assets/logo.png" v-show="!isDarkMode" />
      <h4 :class="{'light-text': isDarkmode,
      'dark-text':!isDarkmode}">Sign in MyVue</h4>
      <input
        type="email"
        placeholder="Email"
        :class="{'light-field':isDarkmode, 'dark-field':!isDarkmode}"
      />
      <input
        type="password"
        placeholder="Password"
        :class="{'light-field':isDarkmode, 'dark-field':!isDarkmode}"
      />
      <button>Sign In</button>

      <router-link
        to="/Recover"
        :class="{'light-link':isDarkmode, 'dark-link':!isDarkmode}"
      >Forget your password</router-link>
      <ThemeSwitch/>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  computed: {
    isDarkmode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/color.scss";
@import "@/global-styles/Typography.scss";
.light-background {
  background-color: $Light-Gray;
}
.dark-background {
  background-color: $dark-blue;
}
.lighyt-text {
  color: $White;
}
.dark-text {
  color: $Black;
}
.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}
.Lonin {
  width: 400px;
}
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
h4 {
  line-height: 34px;
  font-size: 24px;
  color: #ffffff;
}
input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  height: 60px;
  width: 100%;

  font-size: 24px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
}
a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}
.light-link {
  color: rgba(255, 255, 255, 0.3);
}
.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>