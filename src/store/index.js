import { createStore } from "vuex";
import moviesModule from "./modules/movies/index";
import favouriteModule from "./modules/favourites/index";
const store = createStore({
  modules: {
    movies: moviesModule,
    favourites: favouriteModule,
  },
});
export default store;
