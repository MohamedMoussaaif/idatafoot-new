import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MetricsScorers(props) {
  const [playersList, setPlayersList] = useState([]);

  const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';

  useEffect(() => {
    axios
      .get(`https://apiv3.apifootball.com/?action=get_topscorers&league_id=${props.leagueId}&APIkey=${APIKey}`)
      .then((res) => {
        setPlayersList(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [props.leagueId]);

  return (
    <div className="standig-section flex flex-col overflow-x-auto">
      <table className="w-full text-xs text-center">
        <thead className="standing-barre text-white">
          <tr>
            <th className="p-2">#</th>
            <th className="p-1 text-left">Players</th>
            <th className="p-1 text-center">Goals</th>
            <th className="p-1 text-center">Penalty Goals</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(playersList) && playersList.slice(0, 7).map((player) => (
            <tr key={player.player_name} className="players-standing hover:bg-zinc-900 hover:cursor-pointer">
              <td><Link to={`/player/${player.player_key}`}>{player.player_place}</Link></td>
              <td className="p-1 flex items-center text-xs">
                <Link to={`/player/${player.player_key}`} className='flex flex-row items-center'>
                  <span className="flex-grow text-left">{player.player_name}</span>
                </Link>
              </td>
              <td className="p-1 text-center">
                <Link to={`/player/${player.player_key}`}>
                  <span>{player.goals}</span>
                </Link>
              </td>
              <td className="p-1 text-center">
                <Link to={`/player/${player.player_key}`}>
                  <span>{player.penalty_goals}</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
