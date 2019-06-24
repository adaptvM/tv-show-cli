<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <div class="form-group">
        <label for="showTitle"></label>
        <input type="text" id="showTitle" class="form-control" 
        placeholder="Search for TV Shows" 
        v-model="showTitle"
          @keyup.enter="getTVshows()" />
      </div>
      <br>

      <div>
        <div class="container">
          <div class="wrapper">
            <div class="" v-for="show in selectShows" :key="show.id">
              <img height="" width="" :src="show.show.image.medium" 
              @click="getSeason(show.show.id)">
            </div>
          </div>
          <!-- <P> {{selectShows}}</P> -->
        </div>
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
      showTitle: '',
      shows: []
    };
  },
  methods: {
    async getTVshows() {

      const seek = fetch(`http://localhost:3001/tvshows/${this.showTitle}`)
        .catch(err => err)
      const found = await seek.then(value => value.json());
      this.shows = found;
      this.$store.commit('updateShows', this.shows)
    },
    async getSeason(id) {

      const seasons = fetch(`http://localhost:3001/seasons/${id}`)
        .catch(err => err);
      const foundSeasons = await seasons.then(value => value.json());
      // eslint-disable-next-line no-console
      console.log(foundSeasons);
      this.$store.commit('updateSeasons', foundSeasons);
     
    }
  },
  computed: {
        selectShows: {
          get: function () {
            return this.$store.state.getShows
          }
        },
        selectSeasons: {
          get: function () {
            return this.$store.state.getSeasons
          }
        }
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
