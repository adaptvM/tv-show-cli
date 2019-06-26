<template>
  <div>
    <div>
      <div class="container">
        <div class="wrapper">
          <div v-for="(data, index) in selectSeasons" :key="index" :id="index" class="item">
            <div v-if="data.season.image === null">
              <img :src="noImage" width="210" height="295">
              <p>{{genericTitle}} {{data.season.number}}</p>
            </div>
            <div v-else>
              <img :src="data.season.image.medium" @mouseover="act(index)">
              <p>
                <strong>{{genericTitle}} {{data.season.number}}</strong>
              </p>
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
  methods: {
    act(id) {
      const storeImg = this.$store.state.getSeasons;

      storeImg.forEach((data, idx) => {
        if (idx == id) {
          const item = document.getElementById(idx);
          const newImg = document.createElement("img");
          const src = document.createAttribute("src");
          src.value = storeImg[idx].episodes.image.medium;
          newImg.setAttributeNode(src);
          item.replaceChild(newImg, item.childNodes[0]);
        }
      });
      console.log(storeImg);

      //console.log("I work");
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

.item {
}
.wrapper {
  display: flex;
  grid-template-columns: repeat(5, 220px);
  grid-gap: 7px;
}
</style>
