<template>
  <div id="mainTemplate">
    <the-header v-if="false"></the-header>
    <login-page></login-page>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import LoginPage from "./pages/LoginPage.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    LoginPage
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  /* background-color: #10e7dc; */
}

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
}
</style>
