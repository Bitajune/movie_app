const TMDB_API_KEY = "6a54c063dd0df09911a96ec1e55d2785";

const btn = document.querySelector("button");
const getMovie = async () => {
  const query = document.querySelector("input").value;
  const movie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=true
    `);
  const movieToJson = await movie.json();
  const html = movieToJson.results
    .map(
      m =>
        ` <div>
    <h2>${m.title}</h2>
    <img src="https://image.tmdb.org/t/p/w500${m.poster_path}"/>
  </div>`
    )
    .join("");
  document.getElementById("movies").innerHTML = html;
};
btn.addEventListener("click", getMovie);
