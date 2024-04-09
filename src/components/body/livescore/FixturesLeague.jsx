import React from 'react'
import { Link } from 'react-router-dom'

export default function FixturesLeague(props) {
  return (
    <div className='p-4'>
      <Link to={`/league/${props.leagueId}`}>
        <div className="flex flex-row space-x-2 items-center" style={{fontSize:'13px'}}>
          <img className='h-2 md:h-3' src={props.countryLogo} alt="england" />
          <span>{props.leagueName}</span>
        </div>
        <div className='text-xs text-gray-400 ml-5 md:ml-7' style={{fontSize:'10px'}}>
          {props.countryName}
        </div>
      </Link>
    </div>
  )
}
