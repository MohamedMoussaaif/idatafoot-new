import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Fixture(props) {
  const [favorite, setFavorite] = useState(false)
  return (
      
      <div className="p-5 bg-[#1f2937] text-xs text-white border w-full border-solid border-[#0097B2] h-60 rounded-xl">
        
          {
            props.info[12] != undefined && (
              <div className='text-xs mb-5 text-center'>
                <span className='text-gray-400'>{props.info[12]}</span>
              </div>
            )
          }
           

          <div className='flex flex-row items-center justify-center space-x-3 bg-zinc-900 px-5 py-2 rounded-3xl mb-4'>
            <Link to={`/team/${props.info[11]}`} ><img className='h-4 lg:h-5' src={props.info[1]} alt={props.info[0]} /></Link>
            <span>VS</span>
            <Link to={`/team/${props.info[10]}`} ><img className='h-4 lg:h-5' src={props.info[4]} alt={props.info[3]} /></Link>
          </div>

          <div className='mb-2'>
            <Link to={`/league/${props.info[9]}`}><span className='text-[10px]'>{props.info[13]}</span> | <span className='text-[10px]'>{props.info[6]}</span></Link>
          </div>

          <Link to={`/fixture/${props.matchId}`}>
            <div className='text-xs mb-4'>
              <span className='text-gray-400'>{props.info[7]}</span>
              <span className={`float-right ${props.info[8] == '0' ? '' : 'font-bold text-[#0097B2]'}`}>{props.status == '' ? '--' : props.status == 'Finished' ? 'FT' : props.status == 'Postponed' ? 'PP' : props.status == 'Cancelled' ? 'CA' : `${props.status}'`}</span>
            </div>


            <div className='mb-2'>
              <span className={`text-[11px] ${props.info[2] > props.info[5] && props.info[8] == '1' ? 'text-[#0097B2]' : ''}`}>{props.info[0]}</span>
              <span className={`float-right ${props.info[2] > props.info[5] && props.info[8] == '1' ? 'text-[#0097B2]' : ''}`}>{props.info[2] == '' ? '0' :  props.info[2]}</span>
            </div>

            <div>
              <span className={`text-[11px] ${props.info[5] > props.info[2] && props.info[8] == '1' ? 'text-[#0097B2]' : ''}`}>{props.info[3]}</span>
              <span className={`float-right ${props.info[5] > props.info[2] && props.info[8] == '1' ? 'text-[#0097B2]' : ''}`}>{props.info[5] == '' ? '0' :  props.info[5]}</span>
            </div>
          </Link>
      </div>
      
      
  )
}
