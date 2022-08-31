import axios from "axios";
export default {
  async fetchMovies(context, payload) {
    if (payload.value == "iron" && !context.getters.shouldUpdate) {
      return;
    }
    let responseData = {};
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: payload.value },
      headers: {
        "X-RapidAPI-Key": "71e4653bdcmshc9679f80d1a5297p174e81jsnc97df8b1762a",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        responseData = response.data.d;
      })
      .catch(function (error) {
        "error", error;
        throw error;
      });
    // const responsejson = await response.json();

    responseData;
    const movies = [];
    for (const key in responseData) {
      const movie = {
        id: responseData[key].id,
        image: responseData[key].i,
        name: responseData[key].l,
        rank: responseData[key].rank,
        qid: responseData[key].qid,
      };
      movies.push(movie);
    }
    "movies", movies;

    context.commit("addMovies", movies);
    context.commit("setFetchTimestamp");
  },
};
