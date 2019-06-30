<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <searchBar msg="TV Show Search App"/> -->
    <!-- <display-bar></display-bar> -->
    <component :is="currentView" @select="changeView($event)" @back="changeView($event)"></component>
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
  },
  data: function() {
    return {
      currentView: "searchBar"
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
      console.log(this.currentView);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
