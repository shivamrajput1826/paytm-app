<template>
  <base-card>
    <base-button @click="loadFavourites">Favourite</base-button>
    <div class=""></div>
    <!-- <h1>name={{ name }}</h1>
    <h2>rank={{ rank }}</h2> -->

    <img :src="link" />
  </base-card>
</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  props: ["id", "name", "rank", "url"],

  setup(props) {
    const store = useStore();
    const link = ref("");
    function getLink() {
      console.log(props);
      link.value = props.url.imageUrl;
    }
    getLink();
    function loadFavourites() {
      store.dispatch("favourites/addFavourites", {
        id: props.id,
        name: props.name,
        rank: props.rank,
        url: props.url,
      });
    }
    return { link, loadFavourites };
  },
};
</script>
<style scopes>
img {
  max-width: 40rem;
}
</style>
