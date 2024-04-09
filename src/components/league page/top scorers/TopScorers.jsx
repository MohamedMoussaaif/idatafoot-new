import React from 'react'
import MetricsScorers from './MetricsScorers'

export default function TopScorers(props) {
  return (
    <div>
      <h1 className='mb-5  pl-2 lg:pl-6  lg:text-xl text-bold'>
        TOP SCORERS
      </h1>
      <MetricsScorers leagueId={props.leagueId}/>
    </div>
  )
}
