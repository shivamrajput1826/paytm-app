import axios from "axios";
export default {
  async fetchMovies(context, payload) {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: payload.value },
      headers: {
        "X-RapidAPI-Key": "3968a308b2mshf103398fd2982b0p1eac27jsn723fe8c6e208",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    const responseData = response.data.d;

    console.log(responseData);
    const movies = [];
    for (const key in responseData) {
      const movie = {
        id: responseData[key].id,
        image: responseData[key].i,
        name: responseData[key].l,
        rank: responseData[key].rank,
      };
      movies.push(movie);
    }

    context.commit("addMovies", movies);
  },
};
