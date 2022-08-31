export default {
  addFavourites(state, payload) {
    state.favourites.push(payload);
    console.log("favourites", state.favourites);
  },
  // localFav(state) {
  //   const localStorageFav = JSON.parse(sessionStorage.getItem("favourites"));
  //   state.favourites.push(localStorageFav);
  //   console.log("state.fav", state.favourites);
  // },
};
