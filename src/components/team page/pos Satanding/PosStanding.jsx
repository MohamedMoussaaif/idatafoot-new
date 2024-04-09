import React, { useEffect } from 'react'
import MetricsStanding from '../../league page/standing/MetricsStanding'

export default function PosStanding(props) {
  useEffect(() => {

  },[props.leagueId ,props.teamName])
  return (
    <div className='p-5'>
      <MetricsStanding leagueId={props.leagueId} teamName={props.teamName}/>
    </div>
  )
}
