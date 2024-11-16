import React from 'react';

function Leaderboard({ score }) {
  return (
    <div className="Leaderboard">
      <h2>Leaderboard</h2>
      <p>Your Score: {score}</p>
      {/* You can replace this section with actual leaderboard data from server or a backend */}
      <ul>
        <li>Player 1 - Score: 10</li>
        <li>Player 2 - Score: 9</li>
        <li>You - Score: {score}</li>
      </ul>
    </div>
  );
}

export default Leaderboard;
