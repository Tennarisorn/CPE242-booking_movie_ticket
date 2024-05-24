import React, { useState } from "react";

const MovieSearch = () => {
  const [searchText, setSearchText] = useState("");
  const movies = [
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      releaseDate: "2014",
      director: "Christopher Nolan",
    },
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      releaseDate: "2010",
      director: "Christopher Nolan",
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      releaseDate: "1994",
      director: "Frank Darabont",
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      releaseDate: "1972",
      director: "Francis Ford Coppola",
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      releaseDate: "1994",
      director: "Quentin Tarantino",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      releaseDate: "2003",
      director: "Peter Jackson",
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      releaseDate: "2008",
      director: "Christopher Nolan",
    },
    {
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
      releaseDate: "1999",
      director: "David Fincher",
    },
    {
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      releaseDate: "1994",
      director: "Robert Zemeckis",
    },
    {
      title: "The Matrix",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      releaseDate: "1999",
      director: "Lana and Lilly Wachowski",
    },
  ];

  const filteredMovies = searchText
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : movies;

  return (
    <div
      className="mt-10 rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-2xl"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
          Search Movies
        </h3>
        <p className="text-sm text-muted-foreground">
          Type the movie title and press search.
        </p>
      </div>
      <div className="p-6">
        <form
          className="flex flex-col space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="search"
              placeholder="Enter movie title"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-4">
            {filteredMovies.map((movie) => (
              <div
                key={movie.title}
                className="rounded-lg border text-card-foreground shadow-sm bg-gray-100 p-4 mb-4"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Directed by {movie.director}, Released in{" "}
                    {movie.releaseDate}
                  </p>
                </div>
                <div className="px-6 py-4 text-sm">{movie.description}</div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieSearch;
