<template>
  <div class>
    <h1></h1>

    <div class="container">
      <div id="title">
        <v-flex>
          <v-text-field
            label="Solo"
            placeholder="Search for TV shows"
            solo
            size="10"
            v-model="showTitle"
            @keyup="getTVshows()"
          ></v-text-field>
        </v-flex>
        <!-- <button @click="changeView()">Search</button> -->
      </div>

      <div class="wrapper">
        <div class="item" v-for="item in selectShows" :key="item.id">
          <div v-if="item.show.image === null">
            <a href="#">
              <img :src="noImage" width="210" height="295" @click="getSeason(item.show.id)">
            </a>
            <div class="bg">
              <h3>{{item.show.name}}</h3>
            </div>
          </div>
          <div v-else>
            <a href="#">
              <img
                width="210"
                height="295"
                :src="item.show.image ? item.show.image.medium : noImage"
                @click="getSeason(item.show.id)"
              >
            </a>
            <div class="bg">
              <h3>{{item.show.name}}</h3>
            </div>
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
      this.changeView();
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
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
}

.wrapper .item {
  padding: 3px;
}

.container {
  margin: 0 auto;
}

.bg {
  width: 210px;
  height: 38px;
  background-color: #1f4b47;
  color: white;
}

.bg > h3 {
}
</style>
