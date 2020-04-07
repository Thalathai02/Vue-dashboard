<template>
  <div id="nav" :class="{'nav-light' : !isDarkMode, 'nav-dark' : isDarkMode}">
    <div class="nav-1">
      <img src="@/assets/logo-small.png" v-show="!isDarkMode">
      <img src="@/assets/logo-small-light.png" v-show="isDarkMode">
      <router-link to="/" :class="{'light-nav' : !isDarkMode, 'dark-nav' : isDarkMode}">Home</router-link>
      <router-link
        to="/manage"
        :class="{'light-nav' : !isDarkMode, 'dark-nav' : isDarkMode}"
      >Manage Users</router-link>
      <router-link to="/team" :class="{'light-nav' : !isDarkMode, 'dark-nav' : isDarkMode}">Team</router-link>
    </div>
    <a @click="onClick">
      Logout
      <img src="@/assets/logout.svg">
    </a>
  </div>
</template>

<script>
import { auth } from "@/main";
export default {
  name: "Header",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
   methods: {
    onClick() {
      const user = auth.currentUser();

      user
        .logout()
        .then(response => {
          response
          this.$router.push({
            name: "SignIn",
            params: { userLoggedOut: true }
          });
        })
        .catch(error => {
          alert("Error: "+ error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/global-styles/color.scss";
@import "@/global-styles/Typography.scss";
.nav-light {
  background: #f0f3f5;
  box-shadow: 1px 3px 20px 4px #c6d0eb59;
}

.nav-dark {
  background: $super-dark-blue;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 15%;

  a {
    font-weight: bold;
    color: $dark-gray;
    &.router-link-exact-active.dark-nav {
      color: $White;
    }
    &.router-link-exact-active.light-nav {
      color: $green;
    }
  }

  a,
  img {
    &:hover {
      cursor: pointer;
    }
  }
}

.nav-1 {
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
    margin-right: 20px;
    @media all and (max-width: 767px) {
      display: none;
    }
  }

  img {
    margin-right: 20px;
  }
}
</style>
