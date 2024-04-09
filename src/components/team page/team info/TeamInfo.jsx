import React from 'react'

export default function TeamInfo(props) {
  return (
    <div className='flex flex-row items-center p-4 pb-10 space-x-4'>
        <div>
            <img className='h-20 bg-[#1f2937] rounded p-2' src={props.teamInfo[0] ? props.teamInfo[0].team_badge : ''} alt="team logo" />
        </div>
        <div>
            <div className="flex flex-row space-x-2 items-center" style={{fontSize:'13px'}}>
                <span>{props.teamInfo[0] ? props.teamInfo[0].team_name : ''}</span>
            </div>
            <div className='text-xs text-gray-400' style={{fontSize:'10px'}}>
                Country : {props.teamInfo[0] ? props.teamInfo[0].team_country : ''}
            </div>
            <div className='text-xs text-gray-400' style={{fontSize:'10px'}}>
                Founded : {props.teamInfo[0] ? props.teamInfo[0].team_founded : ''}
            </div>
            <div className='text-xs text-gray-400' style={{fontSize:'10px'}}>
                Coach : {props.teamInfo[0] && props.teamInfo[0].coaches[0] ? props.teamInfo[0].coaches[0].coach_name : ''}
            </div>
            <div className='text-xs text-gray-400' style={{fontSize:'10px'}}>
                Stadium : {props.teamInfo[0] ? props.teamInfo[0].venue.venue_name : ''}
            </div>
        </div>
    </div>
  )
}
