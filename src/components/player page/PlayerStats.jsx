import React from 'react'
import { IoIosFootball } from "react-icons/io";
import { GiFootprint } from "react-icons/gi";


export default function PlayerStats(props) {
  return (
    <div className='space-y-4'>
        <div className='flex flex-row justify-between items-center'>
            <p className=''>Name : {props.playerInfo?.player_name}</p>
            <p className=''> {props.playerInfo?.team_name}</p>
        </div>
        <div className='flex flex-row justify-between items-center'>
            <p className=''>Age : {props.playerInfo?.player_age}</p>
            <p className=''>{props.playerInfo?.player_type}</p>
        </div>
        <div className='flex flex-row justify-between items-center'>
            <p className=''>Goals : {props.playerInfo?.player_goals}</p>
            <p className=''>Assists : {props.playerInfo?.player_assists}</p>
        </div>        
    </div>
  )
}
