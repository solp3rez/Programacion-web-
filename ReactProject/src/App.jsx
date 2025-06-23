import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //el estadso tiene 3partes
  const [variable, setVariable] = useState("valor Inicial");
  const [personaje, setPersonaje] = useState[""];

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);

  return (
    <>
      {!personajes ? (
        <div>cargando...</div>
      ) : (
        <ul>
          {personajes.map((personaje) => (
            <li>
              <h3>{personaje.name}</h3>
              <img src={personaje.image} alt="" />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
