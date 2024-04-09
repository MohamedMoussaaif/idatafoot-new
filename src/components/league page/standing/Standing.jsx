import React from 'react'
import MetricsStanding from './MetricsStanding'

export default function Standing(props) {
  return (
    <div>
      <h1 className='mb-5 mt-2 pl-2 lg:pl-6  lg:text-xl text-bold'>
        STANDING
      </h1>
      <MetricsStanding leagueId={props.leagueId}/>
    </div>
  )
}
