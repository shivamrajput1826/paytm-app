export default {
  addMovies(state, payload) {
    state.movies = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
