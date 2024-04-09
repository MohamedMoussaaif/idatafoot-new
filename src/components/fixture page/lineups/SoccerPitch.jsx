import React from 'react';

const SoccerPitch = ({ homeTeam, awayTeam, formation }) => {
  const renderPlayers = (team) => {
    return team.players.map((player, index) => {
      // Calculate position based on formation
      const positionX = formation.positions[index].x;
      const positionY = formation.positions[index].y;
      
      return (
        <div key={player.id} className="absolute" style={{left: `${positionX}%`, top: `${positionY}%`}}>
          {player.name}
        </div>
      );
    });
  };

  return (
    <div className="relative w-96 h-60 bg-green-500 mx-4">
      {/* Render home team players */}
      {renderPlayers(homeTeam)}
      
      {/* Render away team players */}
      {renderPlayers(awayTeam)}
    </div>
  );
};

export default SoccerPitch;
