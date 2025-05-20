import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [games, setGames] = useState(null);

  async function getGames() {
    try {
      let res = await axios.get("http://localhost:3000/api/game");
      setGames(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  //Alternative arrow function version:
  //   let getGames = async () => {
  //       let res = await axios("http://localhost:3000/api/game");
  //       setGames(res.data)
  //   };

  useEffect(() => {
    getGames();
  }, []);

  const loaded = () => {
    return games.map((game) => {
      return (
        <div>
          <h3>{game.title}</h3>
          <p>$ {game.price}</p>
          <p>Description: {game.desc}</p>
        </div>
      );
    });
  };

  const loading = () => {
    return <h1>Loading Data</h1>;
  };

  return games ? loaded() : loading();
}
