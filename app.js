"use strict";
const APIKEY = "b4d0c5670596729daf8a302e952c39d0";
const APITOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGQwYzU2NzA1OTY3MjlkYWY4YTMwMmU5NTJjMzlkMCIsIm5iZiI6MTc4MjM4OTU2OC40MDk5OTk4LCJzdWIiOiI2YTNkMWI0MDhhNzdlMzQ3NGMwZDQ5OTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kcO85n4t1milhFwXujCLYD-VzXAk32KadDN2metY3o8";

document.addEventListener("DOMContentLoaded", () => {
  // 1. DOM Elements
  const moviesCont = document.querySelector(".movie-card-1");
  const seriesCont = document.getElementById("series-container");

  // THE MODALS
  // MOVIE
  const movieModal = document.getElementById("movieModal");
  const seriesModal = document.getElementById("seriesModal");
  const movieModalPoster = document.getElementById("movieModalPoster");
  const movieModalTitle = document.getElementById("movieModalTitle");
  const movieModalMeta = document.getElementById("movieModalMeta");
  const movieModalOverview = document.getElementById("movieModalOverview");
  const movieModalRuntime = document.getElementById("movieModalRuntime");
  const movieModalGenre = document.getElementById("movieModalGenre");
  const movieModalReleaseDate = document.getElementById(
    "movieModalReleaseDate",
  );
  const movieModalLanguage = document.getElementById("movieModalLanguage");
  const movieModalRating = document.getElementById("movieModalRating");
  const movieModalVoteCount = document.getElementById("movieModalVoteCount");
  const movieModalVoteAverage = document.getElementById(
    "movieModalVoteAverage",
  );
  const movieModalCompany = document.getElementById("movieModalCompany");
  const movieModalCountry = document.getElementById("movieModalCountry");
  const movieModalTagline = document.getElementById("movieModalTagline");

  // SERIES
  const seriesModalPoster = document.getElementById("seriesModalPoster");
  const seriesModalTitle = document.getElementById("seriesModalTitle");
  const seriesModalMeta = document.getElementById("seriesModalMeta");
  const seriesModalOverview = document.getElementById("seriesModalOverview");
  const seriesModalSeasons = document.getElementById("seriesModalSeasons");
  const seriesModalEpisodes = document.getElementById("seriesModalEpisodes");
  const seriesModalReleaseDate = document.getElementById(
    "seriesModalReleaseDate",
  );
  const seriesModalRating = document.getElementById("seriesModalRating");
  const seriesModalGenre = document.getElementById("seriesModalGenre");
  const seriesModalStatus = document.getElementById("seriesModalStatus");
  const seriesModalVoteCount = document.getElementById("seriesModalVoteCount");
  const seriesModalVoteAverage = document.getElementById(
    "seriesModalVoteAverage",
  );
  const seriesModalCompany = document.getElementById("seriesModalCompany");
  const seriesModalCountry = document.getElementById("seriesModalCountry");
  const seriesModalLanguage = document.getElementById("seriesModalLanguage");

  //const searchMovie=fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
  //const searchSeries=fetch('https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1', options)

  console.log(
    moviesCont,
    seriesCont,
    movieModal,
    seriesModal,
    movieModalPoster,
    seriesModalPoster,
    movieModalTitle,
    seriesModalTitle,
    movieModalMeta,
    movieModalOverview,
    movieModalRuntime,
    movieModalGenre,
    movieModalReleaseDate,
    movieModalLanguage,
    movieModalRating,
    movieModalVoteCount,
    movieModalVoteAverage,
    movieModalCompany,
    movieModalCountry,
    movieModalTagline,
    seriesModalMeta,
    seriesModalOverview,
    seriesModalSeasons,
    seriesModalEpisodes,
    seriesModalReleaseDate,
    seriesModalRating,
    seriesModalGenre,
    seriesModalStatus,
    seriesModalVoteCount,
    seriesModalVoteAverage,
    seriesModalCompany,
    seriesModalCountry,
    seriesModalLanguage,
  );

  // 2. Authentication Configuration
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGQwYzU2NzA1OTY3MjlkYWY4YTMwMmU5NTJjMzlkMCIsIm5iZiI6MTc4MjM4OTU2OC40MDk5OTk4LCJzdWIiOiI2YTNkMWI0MDhhNzdlMzQ3NGMwZDQ5OTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kcO85n4t1milhFwXujCLYD-VzXAk32KadDN2metY3o8",
    },
  };

  // 3. Helper Functions
  function getUrl(path) {
    if (!path) {
      return "https://placehold.co";
    }
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  function openModal(modals) {
    modals.classList.add("active");
    modals.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modals) {
    modals.classList.remove("active");
    modals.setAttribute("aria-hidden", "true");
    if (
      !movieModal.classList.contains("active") &&
      !seriesModal.classList.contains("active")
    ) {
      document.body.style.overflow = "auto";
    }
  }
  function clearModalContent() {
    closeModal(movieModal);
    closeModal(seriesModal);
  }
  // MOVIE LOGIC
  // ==========================================
  function allMovieDisplay(movies) {
    if (!movies || movies.length === 0) {
      if (moviesCont) moviesCont.innerHTML = "<p>No movies found.</p>";
      return;
    }

    const mappedMovie = movies.map((movie) => {
      const urlPoster = getUrl(movie.poster_path);
      return `
      <article class="card-box movie-card-item" data-id="${movie.id}" aria-label="${movie.original_title}"> 
        <div class="card-poster-wrap">
          <img src="${urlPoster}" alt="${movie.original_title} poster" loading="lazy"/>
          <div class="card-overlay"></div>
          <div class="release-badge">
            <span class="star">★</span>
            <span class="score">${movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}</span>
          </div>
        </div>
        <div class="card-content">
          <h3>${movie.original_title || movie.title}</h3>
          <p class="release-date">${movie.release_date || "Unknown date"}</p>
        </div>
        <span class="card-pill">Movie</span>
        <span class="card-view-hint">Click for details</span>
      </article>
      `;
    });

    if (moviesCont) moviesCont.innerHTML = mappedMovie.join("");
  }

  async function getAllMovies() {
    const movieUrl =
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    try {
      const res = await fetch(movieUrl, options);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      allMovieDisplay(data.results);
    } catch (error) {
      console.error("Movie Fetch Failed:", error.message);
      if (moviesCont)
        moviesCont.innerHTML = `<p style="color: red;">Failed to load movies. Error: ${error.message}</p>`;
    }
  }

  // SERIES LOGIC

  function allSeriesDisplay(seriesList) {
    if (!seriesList || seriesList.length === 0) {
      if (seriesCont) seriesCont.innerHTML = "<p>No series found.</p>";
      return;
    }

    const mappedMovies = seriesList.map((movie) => {
      const urlPoster = getUrl(movie.poster_path);
      return `
      <article class="card-box series-card-item" data-id="${movie.id}" aria-label="${movie.original_name}">
        <div class="card-poster-wrap">
          <img src="${urlPoster}" alt="${movie.original_name} poster" loading="lazy"/>
          <div class="card-overlay"></div>
          <div class="release-badge">
            <span class="star">&#9733</span>
            <span class="score">${movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}</span>
          </div>
        </div>
        <div class="card-content">
          <h3>${movie.original_name}</h3>
          <p class="release-date">${movie.first_air_date || "Unknown date"}</p>
        </div>
        <span class="card-pill">Series</span>
        <span class="card-view-hint">Click for details</span>
      </article>
      `;
    });

    if (seriesCont) seriesCont.innerHTML = mappedMovies.join("");
  }

  async function getAllSeries() {
    const urlSeries =
      "https://api.themoviedb.org/3/discover/tv?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    try {
      const res = await fetch(urlSeries, options);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      console.log("Series API Data Fetched Successfully:", data);
      allSeriesDisplay(data.results);
    } catch (err) {
      console.error("Series Fetch Failed:", err.message);
      if (seriesCont)
        seriesCont.innerHTML = `<p style="color: red;">Failed to load series. Error: ${err.message}</p>`;
    }
  }

  getAllMovies();
  getAllSeries();

  //fetch("https://api.themoviedb.org/3/movie/movie_id?language=en-US", options);
  //fetch('https://api.themoviedb.org/3/tv/series_id?language=en-US', options)

  async function getMovieDetails(movieId) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options,
    );
    const dataDetails = await res.json();
    return dataDetails;
  }

  async function getSeriesDetails(seriesId) {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`,
      options,
    );
    const dataDetails = await res.json();
    return dataDetails;
  }

  function showMovieDetails(details) {
    console.log(details);
    movieModalPoster.src = getUrl(details.poster_path);
    movieModalTitle.textContent = details.original_title || details.title;
    movieModalMeta.textContent = `${details.release_date || "Unknown date"} | ${details.runtime || "Unknown runtime"} min`;
    movieModalOverview.textContent =
      details.overview || "No overview available.";
    movieModalRuntime.textContent = `${details.runtime || "Unknown runtime"} min`;
    movieModalGenre.textContent =
      details.genres.map((genre) => genre.name).join(", ") || "Unknown genres";
    movieModalReleaseDate.textContent = details.release_date || "Unknown date";
    movieModalLanguage.textContent =
      details.original_language || "Unknown language";
    movieModalRating.textContent = details.vote_average
      ? details.vote_average.toFixed(1)
      : "0.0";
    movieModalVoteCount.textContent = details.vote_count || "0";
    movieModalVoteAverage.textContent = details.vote_average
      ? details.vote_average.toFixed(1)
      : "0.0";
    movieModalCompany.textContent =
      details.production_companies.map((company) => company.name).join(", ") ||
      "Unknown companies";
    movieModalCountry.textContent =
      details.production_countries.map((country) => country.name).join(", ") ||
      "Unknown countries";
    movieModalTagline.textContent = details.tagline || "No tagline available.";
    openModal(movieModal);
  }

  function showSeriesDetails(details) {
    seriesModalPoster.src = getUrl(details.poster_path);
    seriesModalTitle.textContent = details.original_name;
    seriesModalMeta.textContent = `${details.first_air_date || "Unknown date"} | ${details.number_of_seasons || "Unknown seasons"} seasons`;
    seriesModalOverview.textContent =
      details.overview || "No overview available.";
    seriesModalSeasons.textContent =
      details.number_of_seasons || "Unknown seasons";
    seriesModalEpisodes.textContent =
      details.number_of_episodes || "Unknown episodes";
    seriesModalReleaseDate.textContent =
      details.first_air_date || "Unknown date";
    seriesModalRating.textContent = details.vote_average
      ? details.vote_average.toFixed(1)
      : "0.0";
    seriesModalGenre.textContent =
      details.genres.map((genre) => genre.name).join(", ") || "Unknown genres";
    seriesModalStatus.textContent = details.status || "Unknown status";
    seriesModalVoteCount.textContent = details.vote_count || "0";
    seriesModalVoteAverage.textContent = details.vote_average
      ? details.vote_average.toFixed(1)
      : "0.0";
    seriesModalCompany.textContent =
      details.production_companies.map((company) => company.name).join(", ") ||
      "Unknown companies";
    seriesModalCountry.textContent =
      details.production_countries.map((country) => country.name).join(", ") ||
      "Unknown countries";
    seriesModalLanguage.textContent =
      details.original_language || "Unknown language";
    openModal(seriesModal);
  }

  moviesCont.addEventListener("click", async (event) => {
    const movieCard = event.target.closest(".card-box");
    if (!movieCard) return;
    const movieId = movieCard.dataset.id;
    const movieDetails = await getMovieDetails(movieId);
    showMovieDetails(movieDetails);
  });

  seriesCont.addEventListener("click", async (event) => {
    const seriesCard = event.target.closest(".card-box");
    if (!seriesCard) return;
    const seriesId = seriesCard.dataset.id;
    const seriesDetails = await getSeriesDetails(seriesId);
    showSeriesDetails(seriesDetails);
  });

  // 1. Close Modals via Close Buttons (Using optional chaining to prevent null errors)
  document.querySelectorAll(".modal-close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      clearModalContent();
    });
  });

  // 2. Close Modals via Background Overlay Click (Separated and safe from null crashes)
  [movieModal, seriesModal].forEach((modal) => {
    modal?.addEventListener("click", (event) => {
      if (event.target === modal) {
        clearModalContent();
      }
    });
  });

  // 3. Close Modals via Escape Key (Declared once globally)
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      clearModalContent();
    }
  });

  // NEW SEARCH ELEMENTS
  const searchForm = document.getElementById("form");
  const searchInput = document.getElementById("searchInput");
  const searchModal = document.getElementById("searchModal");
  const searchResultsContainer = document.getElementById(
    "searchResultsContainer",
  );
  const searchModalTitle = document.getElementById("searchModalTitle");
  console.log(
    searchForm,
    searchInput,
    searchModal,
    searchResultsContainer,
    searchModalTitle,
  );
  //fetch('https://api.themoviedb.org/3/search/multi?query=house%20of%20dragon&include_adult=false&language=en-US&page=1', options)//

  const searchModalCloseBtn = searchModal
    ? searchModal.querySelector(".modal-close")
    : null;

  if (searchModalCloseBtn) {
    searchModalCloseBtn.addEventListener("click", () => {
      // Reuses your existing closeModal helper function to hide the overlay
      closeModal(searchModal);
    });
  }

  if (searchForm) {
    searchForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // Stop the page from reloading on form submit

      const query = searchInput.value.trim();
      if (!query) return; // Do nothing if the user submits an empty search

      // Kick off the asynchronous fetch request
      await performSearch(query);
    });
  }

  // 2. Fetch data from TMDB using the search/multi endpoint
  async function performSearch(query) {
    // encodeURIComponent protects the URL from breaking due to spaces or special characters
    const searchUrl = `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(query)}`;

    try {
      // 'options' holds your TMDB API authorization headers/bearer token
      const res = await fetch(searchUrl, options);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();

      // Filter the payload to only include actual movies or TV shows (ignoring people/actors)
      const filteredResults = data.results.filter(
        (item) => item.media_type === "movie" || item.media_type === "tv",
      );

      // Pass the cleaned array to the template rendering function
      displaySearchResults(filteredResults, query);
    } catch (error) {
      console.error("Search Fetch Failed:", error.message);

      // Graceful error state layout
      if (searchResultsContainer) {
        searchResultsContainer.innerHTML = `<p style="color: red; padding: 20px;">Search failed. Error: ${error.message}</p>`;
      }
      openModal(searchModal);
    }
  }

  // 3. Map and inject the dynamic HTML cards into the modal grid
  function displaySearchResults(results, query) {
    // Update the modal subtitle to let the user know what they're looking at
    if (searchModalTitle) {
      searchModalTitle.textContent = `Results for "${query}"`;
    }

    // Handle empty search result arrays cleanly
    if (!results || results.length === 0) {
      if (searchResultsContainer) {
        searchResultsContainer.innerHTML = `<p style="padding: 20px;">No movies or series found matching "${query}".</p>`;
      }
      openModal(searchModal);
      return;
    }

    // Map over every item and compile a string array of HTML cards
    const mappedResults = results.map((item) => {
      const urlPoster = getUrl(item.poster_path); // Reuses your existing image helper
      const isMovie = item.media_type === "movie";

      // TMDB switches naming conventions depending on media type:
      // Movies use 'title'/'release_date', Series use 'name'/'first_air_date'
      const title = isMovie
        ? item.original_title || item.title
        : item.original_name;
      const date = isMovie
        ? item.release_date || "Unknown date"
        : item.first_air_date || "Unknown date";
      const typeLabel = isMovie ? "Movie" : "Series";
      const cardClass = isMovie ? "movie-card-item" : "series-card-item";

      return `
      <article class="card-box ${cardClass}" data-id="${item.id}" aria-label="${title}">
        <div class="card-poster-wrap">
          <img src="${urlPoster}" alt="${title} poster" loading="lazy"/>
          <div class="card-overlay"></div>
          <div class="release-badge">
            <span class="star">★</span>
            <span class="score">${item.vote_average ? item.vote_average.toFixed(1) : "0.0"}</span>
          </div>
        </div>
        <div class="card-content">
          <h3>${title}</h3>
          <p class="release-date">${date}</p>
        </div>
        <span class="card-pill">${typeLabel}</span>
        <span class="card-view-hint">Click for details</span>
      </article>
      `;
    });

    // Inject the mapped grid cards into your scroll grid container
    if (searchResultsContainer) {
      searchResultsContainer.innerHTML = mappedResults.join("");
    }

    // Open up the search results modal structure
    openModal(searchModal);
  }
});
