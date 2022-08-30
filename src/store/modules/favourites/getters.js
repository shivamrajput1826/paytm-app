export default {
  favourites(state) {
    return state.favourites;
  },
  hasfavourites(state) {
    return state.favourites && state.favourites.length > 0;
  },
};
