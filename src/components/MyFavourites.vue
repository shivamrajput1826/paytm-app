<template>
  <the-header></the-header>
  <base-card class="font-bold text-3xl bg-blue-800 text-white"
    >My Favorite Movies</base-card
  >
  <div class="card">
    <ul class="favorite-action">
      <f-item
        v-for="favourite in favouriteList"
        :key="favourite.id"
        :name="favourite.name"
        :id="favourite.id"
        :rank="favourite.rank"
        :url="favourite.url"
      ></f-item>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import FItem from "./FavouritesItem.vue";
import TheHeader from "./MainPageHeader.vue";
import { ref } from "vue";

export default {
  components: { FItem, TheHeader },

  setup() {
    const store = useStore();
    const len = ref(0);
    const favouriteList = computed(() => {
      let favour1 = store.getters["favourites/favourites"];
      let favour2 = JSON.parse(sessionStorage.getItem("favourites"));
      console.log("favour2", favour2);
      let newfavor = { ...favour1, ...favour2 };
      console.log("new favor", newfavor);

      return newfavor;
    });
    const hasFavorite = computed(() => {
      let favorites = store.getters["favourites/hasfavourites"];

      return favorites;
    });
    function check() {
      console.log("check favoritess", favouriteList);
    }
    return { len, favouriteList, hasFavorite, check };
  },
};
</script>
<style scoped>
h1 {
  margin-left: 35%;
}
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
}
.favorite-action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0;
  width: 80%;
}
</style>
