import React from 'react'

export default function PlayerInfo(props) {
  return (
    <div className='flex flex-row items-center p-4 pb-10 space-x-4'>
        <div>
            <img className='h-20 bg-[#1f2937] rounded p-2' src={props.playerInfo[props.playerInfo.length == 1 ? 0 : 1]?.player_image} alt="player" />
        </div>
        <div>
            <div className="flex flex-row space-x-2 items-center" style={{fontSize:'13px'}}>
                <span>{props.playerInfo[props.playerInfo.length == 1 ? 0 : 1]?.player_name}</span>
            </div>
            <div className='text-xs text-gray-400' style={{fontSize:'10px'}}>
                {`${props.playerInfo[props.playerInfo.length == 1 ? 0 : 1]?.player_type} ( ${props.playerInfo[props.playerInfo.length == 1 ? 0 : 1]?.team_name} )`}
            </div>
            <div className='text-xs text-gray-400' style={{fontSize:'10px'}}>
                Age : {props.playerInfo[props.playerInfo.length == 1 ? 0 : 1]?.player_age}
            </div>
            <div className='text-xs text-gray-400' style={{fontSize:'10px'}}>
                Rating : {props.playerInfo[props.playerInfo.length == 1 ? 0 : 1]?.player_dribble_succ}
            </div>
        </div>
    </div>
  )
}
