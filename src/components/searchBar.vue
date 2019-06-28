<template>
  <div class>
    <h1>{{ msg }}</h1>

    <div>
      <label for="showTitle"></label>
      <v-flex>
        <v-text-field
          label="Solo"
          placeholder="Search for TV shows"
          solo
          v-model="showTitle"
          @keyup="getTVshows()"
        ></v-text-field>
      </v-flex>
      <!-- <button @click="changeView()">Search</button> -->
    </div>
    <br>

    <div class="container">
      <div class="wrapper">
        <div class="item" v-for="data in selectShows" :key="data.id">
          <div v-if="data.show.image === null">
            <img :src="noImage" width="210" height="295">
          </div>
          <div v-else>
            <img
              intrinsicsize="210 * 295"
              :src="data.show.image.medium"
              @click="getSeason(data.show.id)"
            >
            <div>{{data.show.name}}</div>
          </div>
        </div>
      </div>
      <!-- <P> {{selectShows}}</P> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "searchBar",
  props: {
    msg: String
  },
  data: function() {
    return {
      showTitle: "",
      shows: [],
      noImage:
        "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
    };
  },
  methods: {
    async getTVshows() {
      if (this.showTitle) {
        const seek = fetch(
          `http://localhost:3001/tvshows/${this.showTitle}`
        ).catch(err => err);
        const found = await seek.then(value => value.json());
        this.shows = found;
        this.$store.commit("updateShows", this.shows);
        this.$store.commit("updateSeasons", []);
      }
    },
    async getSeason(id) {
      const seasons = fetch(`http://localhost:3001/seasons/${id}`).catch(
        err => err
      );
      const foundSeasons = await seasons.then(value => value.json());
      // eslint-disable-next-line no-console
      console.log(foundSeasons);
      this.$store.commit("updateSeasons", foundSeasons);
    },
    changeView() {
      this.$emit("select", "displayBar");
    }
  },
  computed: {
    selectShows: {
      get: function() {
        return this.$store.state.getShows;
      }
    },
    selectSeasons: {
      get: function() {
        return this.$store.state.getSeasons;
      }
    }
  }
};
</script>


<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-gap: 7px;
}
</style>
