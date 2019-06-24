<template>
  <div>
    <div>
      <div class="container">
        <div class="wrapper">
          <div class="item" v-for="data in selectSeasons" :key="data.id">
            <div v-if="data.season.image === null">
              <img :src="noImage" width="210" height="295">
              <p>{{genericTitle}} {{data.season.number}}</p>
            </div>
            <div v-else>
              <img :src="data.season.image.medium">
              <p>{{genericTitle}} {{data.season.number}}</p>
            </div>
            <!-- <p>{{data.season}}</p> -->
          </div>
        </div>
        <!-- <P>{{selectSeasons}}</P> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "displayBar",
  props: {
    msg: String
  },
  data: function() {
    return {
      noImage:
        "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png",
      genericTitle: "Season"
    };
  },
  methods: {},
  computed: {
    selectSeasons: {
      get: function() {
        return this.$store.state.getSeasons;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;
  width: auto;
}
</style>
