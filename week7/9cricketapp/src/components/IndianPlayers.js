import React from 'react';

function IndianPlayers() {
  const players = [
    "Player1", "Player2", "Player3", "Player4", "Player5",
    "Player6", "Player7", "Player8", "Player9", "Player10", "Player11"
  ];

  const oddPlayers = players.filter((_, index) => index % 2 === 0);
  const evenPlayers = players.filter((_, index) => index % 2 !== 0);

  const T20players = ["Rohit", "Virat", "Surya"];
  const RanjiTrophy = ["Rahul", "Jadeja", "Ashwin"];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h3>Indian Team</h3>
      <h4>Odd Players:</h4>
      <ul>{oddPlayers.map((name, idx) => <li key={idx}>{name}</li>)}</ul>
      <h4>Even Players:</h4>
      <ul>{evenPlayers.map((name, idx) => <li key={idx}>{name}</li>)}</ul>
      <h4>List of Indian Players Merged:</h4>
      <ul>{mergedPlayers.map((name, idx) => <li key={idx}>{name}</li>)}</ul>
    </div>
  );
}

export default IndianPlayers;