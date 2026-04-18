window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
           const movieElement = document.createElement("article");
        movieElement.innerHTML = `
          <header>
            <h1>${movie.Title}</h1>
          </header>
          <figure>
            <img src="${movie.Poster}" alt="Poster of ${movie.Title}">
          </figure>
          <section>
            <p><strong>Release Date:</strong> ${new Date(movie.Released).toLocaleDateString()}
            <strong>Runtime:</strong> ${movie.Runtime} min</p>
            <p><strong>Metascore:</strong> ${movie.Metascore}
            <strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
          </section>
          <section>
            <h3>Genres</h3>
            <p>${movie.Genres.map(g => `<span class="genre">${g}</span>`).join("")}</p>
          </section>
          <section>
            <h3>Plot</h3>
            <p>${movie.Plot}</p>
          </section>
          <section>
            <h3>Directors</h3>
            <p>${movie.Directors}</p>
          </section>
          <section>
            <h3>Writers</h3>
            <p>${movie.Writers}</p>
          </section>
          <section>
            <h3>Actors</h3>
            <ul>${movie.Actors.map(a => `<li>${a}</li>`).join("")}</ul>
          </section>
          <button class="edit-button">Edit</button>
        `;
          bodyElement.appendChild(movieElement);
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
