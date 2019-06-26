<template>
  <div>
    <div>
      <div class="container">
        <div class="wrapper">
          <div class="item" v-for="(data, index) in selectSeasons" :key="index" :id="index">
            <div class="thumb" :id="'S' + index" @mouseover="act(index)" >
              <img :src="data.season.image ? data.season.image.medium : noImage"  >
              <p>
                <strong>{{genericTitle}} {{data.season.number}}</strong>
              </p>
            </div>
            <div class="hide-last-episode" :id="'LE' + index"  @mouseleave="backSeason(index)" >
              <img :src="(data.episodes.image) ? data.episodes.image.medium : noImage" alt="">
              <p>{{data.episodes.airdate}}</p>
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
    act(id) {
      const lastEp = document.getElementById('LE' + id).className = "show-last-episode";
      const currentSzn = document.getElementById('S' + id).className = "hide-prev";
      console.log(id);
    },

    backSeason(id) {
      const currentSzn = document.getElementById('S' + id).className = "show-prev";
      const lastEp = document.getElementById('LE' + id).className = "hide-last-episode";
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
.container {
  margin: auto;
}

.wrapper {
  display: flex;
  grid-template-columns: repeat(5, 220px);
  grid-gap: 7px;
}

.hide-prev {
 display:none;
}

.show-prev {
 display:none;
}

.hide-last-episode {
  display:none;
}

.show-last-episode {
  display:block;
}
</style>
