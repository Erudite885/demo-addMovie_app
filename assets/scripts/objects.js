const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  console.log(newMovie, movies);
  renderMoviesToUI();
};

const renderMoviesToUI = () => {
  const movieList = document.getElementById("movie-list");
  if (!movies) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const movieElement = document.createElement("li");
    let text = movie.info.title + "-";
    for (const key in movie.info) {
      if (key !== "title") {
        text += ` for ${key}: ages ${movie.info[key]} and above.`;
      }
    }
    movieElement.textContent = text;
    movieList.append(movieElement);
  });
};

const searchMovieHandler = () => {}

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
