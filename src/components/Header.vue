<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/Team">About</router-link>|
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