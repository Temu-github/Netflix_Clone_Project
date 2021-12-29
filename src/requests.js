const REACT_APP_API_KEY= "fea438d5d3957ad448c00c39850829ba";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${REACT_APP_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=99`,
};
export default requests;
