import React from 'react'
import leagues from '../../../Data/Topleagues/TopleaguesData'
import { Link } from 'react-router-dom'

export default function Leagues() {
  return (
    <div className='w-full mt-20 lg:mt-0' style={{}}>
      <div className="title text-white px-10 md:px-20 pb-10 text-xl lg:text-s lg:p-3 w-full" style={{borderBottom:'1px solid #252525'}}>
        <span className=''>Top Leagues</span>
      </div>

      <div className="flex flex-col px-10 md:px-20 lg:px-3 py-10 lg:py-5 space-y-12 lg:space-y-6">

        {
          leagues.map((league , index) => (
              <Link to={`/league/${league.api_id}`} key={index} className='flex flex-row text-white text-xl lg:text-xs space-x-2 items-center' style={{cursor:'pointer'}}>
                <img className='w-8 lg:w-5' src={league.leagueLogo} />
                <span>{league.leagueName}</span>
              </Link>
          ))
        }
        
      </div>
    </div>
  )
}
