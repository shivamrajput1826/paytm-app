<template>
  <the-header></the-header>
  <h1>My Favorite Movies</h1>
  <ul>
    <f-item
      v-for="favourite in favouriteList"
      :key="favourite.id"
      :name="favourite.name"
      :id="favourite.id"
      :rank="favourite.rank"
      :url="favourite.url"
    ></f-item>
  </ul>
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
    console.log("favouriteList", favouriteList.value);
    return { favouriteList };
  },
};
</script>
