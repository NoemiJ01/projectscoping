import React from "react";
import "./App.css";
import Card from "./components/Card.js";
import data from "./atlas-of-remote-islands.js";

function App() {
  console.log(data);

  return (
    <div>
      <div className="container">
        <h1 className="section-title">Atlas of Remote Islands</h1>
      </div>

      <div className="container">
        <h2 className="section-title">Islands</h2>
        <ul className="cards">
          <Card data={data.islands[0]} />
          <Card data={data.islands[1]} />
          <Card data={data.islands[2]} />
          <Card data={data.islands[3]} />
          <Card data={data.islands[4]} />
          <Card data={data.islands[5]} />
          <Card data={data.islands[6]} />
          <Card data={data.islands[7]} />
          <Card data={data.islands[8]} />
          <Card data={data.islands[9]} />
        </ul>
      </div>
    </div>
  );
}

export default App;
