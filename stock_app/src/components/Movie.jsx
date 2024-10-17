import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";
import "./Movie.css";

function Movie() {
  const [data, setData] = useState([]);
  const API = "http://www.omdbapi.com/?s=Avengers&apikey=19e7d45e";

  const getMovieData = async () => {
    try {
      const response = await axios.get(API);
      console.log(response.data.Search); // Array of movies
      setData(response.data.Search); // Set the movie array from the Search field
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="movie-grid">
      {data.map((item) => {
        return (
          <Card
            key={item.imdbID}
            title={item.Title}
            year={item.Year}
            poster={item.Poster}
          />
        );
      })}
    </div>
  );
}

export default Movie;
