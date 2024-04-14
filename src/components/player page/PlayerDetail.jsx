import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import PlayerInfo from './PlayerInfo';
import PlayerStats from './PlayerStats';

export default function PlayerDetail() {


  const {playerId} = useParams();

  const [playerInfo, setPlayerInfo] = useState([]);


  const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';

  useEffect(() => {
    axios
      .get(`https://apiv3.apifootball.com/?action=get_players&player_id=${playerId}&APIkey=${APIKey}`)
      .then((res) => {
        setPlayerInfo(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [playerId]);

  return (
    <div className='flex text-white justify-center items-center p-4 lg:px-28 mt-[-7px] lg:py-10 lg:space-x-5'>
          <div className="flex flex-col justify-startcard w-96 p-5 bg-[#1f2937] shadow-xl space-y-5">
            <figure className='flex flex-row space-x-5 items-center'>
              <img className='bg-[#1f2937] w-full border border-2 border-solid border-[#0097B2] rounded' src={`${playerInfo[playerInfo.length == 1 ? 0 : 1]?.player_image}`} alt="Shoes" />
            </figure>
            <div className="space-y-5">
              <p className='text-xs'>( Note : All stats are only for League )</p>
              <PlayerStats playerInfo={playerInfo[playerInfo.length == 1 ? 0 : 1]}/>
            </div>
          </div>
      </div>
  )
}
