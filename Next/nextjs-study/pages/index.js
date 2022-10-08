import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "3a2fdabb084f45a01f73751a22cda096";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />

      <h1>Hello</h1>
    </div>
  );
}
