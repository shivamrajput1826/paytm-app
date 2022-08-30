<template>
  <the-header></the-header>
  <h1>My Favorite Movies</h1>
  <div class="card">
    <ul v-if="hasFavorite" class="favorite-action">
      <f-item
        v-for="favourite in favouriteList"
        :key="favourite.id"
        :name="favourite.name"
        :id="favourite.id"
        :rank="favourite.rank"
        :url="favourite.url"
      ></f-item>
    </ul>
    <p v-else>No selection made</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import FItem from "./FavouritesItem.vue";
import TheHeader from "./MainPageHeader.vue";

export default {
  components: { FItem, TheHeader },

  setup() {
    const store = useStore();
    const favouriteList = computed(() => {
      return store.getters["favourites/favourites"];
    });
    const hasFavorite = computed(() => {
      return store.getters["favourites/hasfavourites"];
    });
    console.log("favouriteList", favouriteList.value);
    console.log("hasfavorite", hasFavorite);
    return { favouriteList, hasFavorite };
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
}
.favorite-action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  margin-top: 0;
  width: 80%;
}
</style>
