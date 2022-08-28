export default {
  addFavourites(state, payload) {
    state.favourites.push(payload);
    console.log("state", state.favourites);
  },
};
