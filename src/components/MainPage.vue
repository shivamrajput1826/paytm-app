<template>
  <div>
    <the-header></the-header>
    <button @click="check">Check</button>
    <movie-filters @change-filters="setFilters"></movie-filters>
    <form @submit.prevent="submitForm">
      <div>
        <label for="searchMovies">Search Movies</label>
        <input type="text" id="searchMovies" v-model="searchValue" />
      </div>
      <button @click="newDefault">Submits</button>
    </form>
    <div v-if="isLoading">
      <h1>isLoading...</h1>
      <base-spinner></base-spinner>
    </div>
    <ul v-else-if="!isFiltered">
      <movie-item
        v-for="movie in movieList"
        :key="movie.id"
        :name="movie.name"
        :id="movie.id"
        :rank="movie.rank"
        :url="movie.image"
      ></movie-item>
    </ul>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed, ref, reactive } from "vue";
import MovieItem from "./MovieItem.vue";
import MovieFilters from "./MovieFilters.vue";
import TheHeader from "./MainPageHeader.vue";

export default {
  components: {
    MovieItem,
    MovieFilters,
    TheHeader,
  },
  setup() {
    const isLoading = ref(false);
    const store = useStore();
    const defaultValue = ref("iron");
    const searchValue = ref("");
    const isFiltered = ref(false);
    const activeFilters = reactive({
      rankByAsc: false,
      rankByDesc: false,
    });

    const movieList = computed(() => {
      let movies = store.getters["movies/isMovies"];
      console.log("hello filter");
      if (activeFilters.rankByAsc && !activeFilters.rankByDesc) {
        movies = movies.sort(function (a, b) {
          return a.rank - b.rank;
        });
      } else if (!activeFilters.rankByAsc && activeFilters.rankByDesc) {
        movies = movies.sort(function (a, b) {
          return b.rank - a.rank;
        });
      }
      console.log("movies is still there");
      return movies;
    });
    function check() {
      console.log("isMovies", movieList);
    }
    function setFilters(filters) {
      Object.assign(activeFilters, filters);
      console.log("activefilters", activeFilters);
    }
    async function loadMovies() {
      isLoading.value = true;
      store.dispatch("movies/fetchMovies", defaultValue);
      isLoading.value = false;
    }

    loadMovies();
    function newDefault() {
      if (searchValue.value != "") {
        isLoading.value = true;
        store.dispatch("movies/fetchMovies", searchValue);
        isLoading.value = false;
      } else {
        isLoading.value = true;
        store.dispatch("movies/fetchMovies", defaultValue);
        isLoading.value = false;
      }
    }

    return {
      defaultValue,
      searchValue,
      newDefault,
      check,
      isLoading,
      setFilters,
      isFiltered,
      movieList,
    };
  },
};
</script>
