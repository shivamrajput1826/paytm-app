<template>
  <base-card class="item-action">
    <button @click="loadFavourites">Favourite</button>
    <div class=""></div>
    <img :src="link" class="image" />
  </base-card>
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
      console.log("url", val);
      return val.imageUrl;
    });

    function loadFavourites() {
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
  background-color: blue;
  color: white;
  padding: 4px;
}
</style>
