<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <searchBar msg="Welcome to Your Vue.js App"/>
    <display-bar></display-bar>
  </div>
</template>

<script>
import searchBar from "./components/searchBar.vue";
import displayBar from "./components/displayBar.vue";

export default {
  name: "app",
  components: {
    searchBar,
    displayBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
