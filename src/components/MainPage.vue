<template>
  <div>
    <the-header></the-header>

    <movie-filters @change-filters="setFilters"></movie-filters>
    <form @submit.prevent="submitForm">
      <base-card>
        <div class="search-action">
          <label for="searchMovies"></label>
          <input
            class="searchInput"
            type="text"
            id="searchMovies"
            v-model="searchValue"
            placeholder="Search Movies"
          />
        </div>
        <div class="action">
          <button @click="newDefault">Get started</button>
        </div>
      </base-card>
    </form>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>

    <ul class="movieaction" v-else>
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
      movie: false,
      tvShows: false,
    });

    const movieList = computed(() => {
      let movies = store.getters["movies/isMovies"];
      console.log("unfilter", movies);
      movies = movies.filter(
        (movie) => movie.image != undefined && movie.qid != undefined
      );
      console.log("filter", movies);

      if (
        activeFilters.rankByAsc &&
        !activeFilters.rankByDesc &&
        !activeFilters.movie &&
        !activeFilters.tvShows
      ) {
        movies = movies.sort(function (a, b) {
          return a.rank - b.rank;
        });
      } else if (!activeFilters.rankByAsc && activeFilters.rankByDesc) {
        movies = movies.sort(function (a, b) {
          return b.rank - a.rank;
        });
      } else if (activeFilters.movie) {
        movies = movies.filter((movie) => movie.qid == "movie");
      } else if (activeFilters.tvShows) {
        movies = movies.filter((movie) => movie.qid == "tvSeries");
      }
      console.log("movies is still there", movies);
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
      try {
        await store.dispatch("movies/fetchMovies", defaultValue);
      } catch (e) {
        console.log("error here", e);
      }
      isLoading.value = false;
    }

    loadMovies();
    async function newDefault() {
      if (searchValue.value != "") {
        isLoading.value = true;
        try {
          await store.dispatch("movies/fetchMovies", searchValue);
        } catch (e) {
          console.log("error is", e);
        }
        isLoading.value = false;
      } else {
        isLoading.value = true;
        try {
          await store.dispatch("movies/fetchMovies", defaultValue);
        } catch (e) {
          console.log("error here", e);
        }
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
<style scoped>
.search-action {
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
}
.searchInput {
  width: 30%;
  height: 30%;
}
.movieaction {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0;
}
button,
a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}
</style>
