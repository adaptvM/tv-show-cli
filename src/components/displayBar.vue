<template>
  <div>
    <div>
      <div class="container">
        <v-btn class="button" color="info" large dark @click="view()">back</v-btn>
        <div class="wrapper">
          <div v-for="(data, index) in selectSeasons" :key="index" :id="index" class="item">
            <div :id="'szn' + index" class="show-detail" @mouseover="swap(index)">
              <img
                :src="(data.season.image !== null) ? data.season.image.medium : noImage"
                width="210"
                height="295"
              >

              <div class="bg">
                <h3>{{genericTitle}} {{data.season.number}}</h3>
              </div>
              <!-- <p>
                <strong>{{genericTitle}} {{data.season.number}}</strong>
              </p>-->
            </div>
            <div :id="'epsd' + index" class="hide-detail" @mouseout="swapAlt(index)">
              <img
                :src="data.episodes ? data.episodes.image.medium : data.episodes.image ?data.episodes.image.medium : noImage"
                width="210"
                height="140"
              >
              <div class="bg match">
                <h3>last episode: {{data.episodes.name}}</h3>
                <h3>Date: {{data.episodes.airdate}}</h3>
              </div>
              <div class="bg">
                <h3>{{genericTitle}} {{data.season.number}}</h3>
              </div>
            </div>
          </div>
        </div>
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
      //showPrev: false
    };
  },
  methods: {
    swap(index) {
      console.log();
      const season = document.getElementById("szn" + index);
      season.className = "hide-detail";

      const episode = document.getElementById("epsd" + index);
      episode.className = "show-detail";
    },
    swapAlt(index) {
      const episode = document.getElementById("epsd" + index);
      episode.className = "hide-detail";
      const season = document.getElementById("szn" + index);
      season.className = "show-detail";
    },
    view() {
      this.$emit("back", "searchBar");
    }
  },
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
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
}

.wrapper .item {
  padding: 3px;
}

.bg {
  width: 210px;
  height: 38px;
  background-color: #1f4b47;
  color: white;
}

.hide-detail {
  display: none;
}

.show-detail {
  display: block;
}

.match {
  width: 210px;
  height: 155px;
  padding-top: 50px;
}

.button {
  float: left;
}
</style>
