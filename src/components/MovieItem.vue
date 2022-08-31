<template>
  <div class="item-action mx-3 my-2 py-4">
    <button @click="loadFavourites">Favourite</button>
    <div class=""></div>
    <img :src="link" class="image" />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  props: ["id", "name", "rank", "url"],

  setup(props) {
    const store = useStore();
    const router = useRouter();
    const link = computed(() => {
      const val = props.url;
      "url", val;
      return val.imageUrl;
    });

    function loadFavourites() {
      var favorites = JSON.parse(sessionStorage.getItem("favourites")) || [];
      var favorite = {
        id: props.id,
        name: props.name,
        rank: props.rank,
        url: props.url,
      };
      favorites.push(favorite);
      const ids = favorites.map((o) => o.id);

      const filtered = favorites.filter(({ id }, index) => {
        return !ids.includes(id, index + 1);
      });
      sessionStorage.setItem("favourites", JSON.stringify(filtered));
      const alreadyFavMovies = store.getters["favourites/favourites"];
      console.log("alreadymovies", alreadyFavMovies);
      store.dispatch("favourites/addFavourites", {
        id: props.id,
        name: props.name,
        rank: props.rank,
        url: props.url,
      });
      router.replace("/favourites");
    }
    return { link, loadFavourites };
  },
};
</script>
<style scoped>
img {
  height: 80%;
  width: 80%;
  object-fit: cover;
}
.item-action {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin-top: 0px;
  margin-bottom: 8px;
  border-radius: 0.5rem;
  background-color: rgb(3, 3, 51);
  color: white;
  padding: 4px;
}
button :active {
  background-color: aqua;
}
</style>
