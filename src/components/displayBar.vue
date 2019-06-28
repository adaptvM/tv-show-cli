<template>
  <div>
    <div>
      <div class="container">
        <div class="wrapper">
          <div v-for="(data, index) in selectSeasons" :key="index" :id="index" class="item">
            <div :id="'szn' + index" class="show-detail">
              <img
                :src="(data.season.image !== null) ? data.season.image.medium : noImage"
                width="210"
                height="295"
                @mouseover="swap(index)"
              >
              <p>
                <strong>{{genericTitle}} {{data.season.number}}</strong>
              </p>
            </div>
            <div :id="'epsd' + index" class="hide-detail">
              <img
                :src="data.episodes ? data.episodes.image.medium : data.episodes.image ?data.episodes.image.medium : noImage"
                width="210"
                height="140"
                @mouseout="swapAlt(index)"
              >
              <p>
                <strong></strong>
              </p>
            </div>
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
      genericTitle: "Season",
      //showPrev: false 
    };
  },
  methods: {
<<<<<<< HEAD
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
=======
    act(id) {
      const lastEp = document.getElementById('LE' + id).className = "show-last-episode";
      const currentSzn = document.getElementById('S' + id).className = "hide-prev";
      console.log(id);
    },

    backSeason(id) {
      const currentSzn = document.getElementById('S' + id).className = "show-prev";
      const lastEp = document.getElementById('LE' + id).className = "hide-last-episode";
>>>>>>> b5fcd82a9e237c5a229598bb69b1219dd2d0a400
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
.hide-detail {
  display: none;
}

<<<<<<< head .show-detail {
  display: block;
}

=======>>>>>>>b5fcd82a9e237c5a229598bb69b1219dd2d0a400 .wrapper {
  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-gap: 7px;
}

.hide-prev {
  display: none;
}

.show-prev {
  display: none;
}

.hide-last-episode {
  display: none;
}

.show-last-episode {
  display: block;
}
</style>
