import React from 'react';

export default function TeamPlayers(props) {
  const Goalkeepers = props.teamPlayers && props.teamPlayers.players.filter((player) => player.player_type === 'Goalkeepers');
  const Defenders = props.teamPlayers && props.teamPlayers.players.filter((player) => player.player_type === 'Defenders');
  const Midfielders = props.teamPlayers && props.teamPlayers.players.filter((player) => player.player_type === 'Midfielders');
  const Forwards = props.teamPlayers && props.teamPlayers.players.filter((player) => player.player_type === 'Forwards');
  
  return (
    <div className='p-5 space-y-5'>
      <span>Goalkeepers</span>
      <div>
        {Goalkeepers && Goalkeepers.length > 0 && Goalkeepers.map((player, index) => (
          <div key={index} className='flex flex-row space-x-5 items-center'>
            <img
              className='h-5'
              src={player.player_image || 'https://images.assetsdelivery.com/compings_v2/kritchanut/kritchanut1406/kritchanut140600093.jpg'}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = 'https://images.assetsdelivery.com/compings_v2/kritchanut/kritchanut1406/kritchanut140600093.jpg'; // Default image URL
              }}
              alt={player.player_name}
            />              
            <span className=''>{player.player_number}</span>
            <span className=''>{player.player_name}</span>
          </div>
        ))}
      </div>
      
      <span>Defenders</span>
      <div>
        {Defenders && Defenders.length > 0 && Defenders.map((player, index) => (
          <div key={index} className='flex flex-row space-x-5 items-center'>
            <img
              className='h-5'
              src={player?.player_image || 'https://images.assetsdelivery.com/compings_v2/kritchanut/kritchanut1406/kritchanut140600093.jpg'}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = 'https://images.assetsdelivery.com/compings_v2/kritchanut/kritchanut1406/kritchanut140600093.jpg'; // Default image URL
              }}
            />              
            <span className=''>{player.player_number}</span>
            <span className=''>{player.player_name}</span>
          </div>
        ))}
      </div>
      
      <span>Midfielders</span>
      <div>
        {Midfielders && Midfielders.length > 0 && Midfielders.map((player, index) => (
          <div key={index} className='flex flex-row space-x-5 items-center'>
            <img
              className='h-5'
              src={player?.player_image || 'https://images.assetsdelivery.com/compings_v2/kritchanut/kritchanut1406/kritchanut140600093.jpg'}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = 'https://images.assetsdelivery.com/compings_v2/kritchanut/kritchanut1406/kritchanut140600093.jpg'; // Default image URL
              }}
            />              
            <span className=''>{player.player_number}</span>
            <span className=''>{player.player_name}</span>
          </div>
        ))}
      </div>
      
      <span>Forwards</span>
      <div>
        {Forwards && Forwards.length > 0 && Forwards.map((player, index) => (
          <div key={index} className='flex flex-row space-x-5 items-center'>
            <img
              className='h-5'
              src={player?.player_image || 'https://images.assetsdelivery.com/compings_v2/kritchanut/kritchanut1406/kritchanut140600093.jpg'}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = 'https://images.assetsdelivery.com/compings_v2/kritchanut/kritchanut1406/kritchanut140600093.jpg'; // Default image URL
              }}
            />              
            <span className=''>{player.player_number}</span>
            <span className=''>{player.player_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
