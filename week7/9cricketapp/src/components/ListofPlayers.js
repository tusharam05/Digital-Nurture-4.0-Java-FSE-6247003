import React from 'react';

function ListofPlayers() {
  const players = [
    { name: "Player1", score: 80 },
    { name: "Player2", score: 65 },
    { name: "Player3", score: 90 },
    { name: "Player4", score: 50 },
    { name: "Player5", score: 30 },
    { name: "Player6", score: 75 },
    { name: "Player7", score: 85 },
    { name: "Player8", score: 60 },
    { name: "Player9", score: 45 },
    { name: "Player10", score: 55 },
    { name: "Player11", score: 95 },
  ];

  const playersBelow70 = players.filter(p => p.score < 70);

  return (
    <div>
      <h3>List of Players:</h3>
      <ul>{players.map((item, idx) => <li key={idx}>{item.name} - {item.score}</li>)}</ul>
      <h4>Players with Scores Less than 70:</h4>
      <ul>{playersBelow70.map((item, idx) => <li key={idx}>{item.name} - {item.score}</li>)}</ul>
    </div>
  );
}

export default ListofPlayers;