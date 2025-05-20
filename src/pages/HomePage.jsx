import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [games, setGames] = useState(null);

  async function getGames() {
    try {
      let res = await axios.get("http://localhost:3000/api/game");
// console.log(res.data)
      setGames(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
      getGames();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
