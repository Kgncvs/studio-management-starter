import { useState } from "react";
import "./App.css";
import { studio, rooms, members, trainers } from "./data/studioData.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="dasboard">
      <header>
        <p>{studio.name}</p>
        <h1>Yönetim Paneli</h1>
      </header>
      <section className="stats" aria-label="stüdyo özeti">
        <article>
          <strong>{rooms.length}</strong>
          <p>Salon</p>
        </article>

        <article>
          <strong>{members.length}</strong>
          <P>Üye</P>
        </article>

        <article>
          <strong>{trainers.length}</strong>
          <p>Eğitmen</p>
        </article>
      </section>
    </main>
  );
}

export default App;
