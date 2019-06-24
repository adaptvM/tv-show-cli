<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

      <div>
        <div class="container">
          <div class="wrapper">
            <div class="" v-for="data in selectSeasons" :key="data.id">
              <img height="" width="" >
            </div>
          </div>
          <P> {{selectSeasons}}</P>
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
      
    };
  },
  methods: {
   
  },
  computed: {
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
