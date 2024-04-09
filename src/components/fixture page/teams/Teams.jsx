import React from 'react'
import { Link } from 'react-router-dom'

export default function Teams(props) {
    const toUpperCase = (str) => {
        return str.toUpperCase();
    };

    return (
        <div className='space-y-2 flex flex-col justify-center items-center'>
            <div className='text-center'>
                <span className='text-[8px] lg:text-[10px]'>{props.teamsInfo[0].match_date} | {props.teamsInfo[0].match_time}</span>
            </div>
            <div className='flex flex-row text-center justify-between items-start text-center h-11/12'>
                <div className='flex flex-col text-center justify-center items-center space-y-5 w-[150px] lg:w-[200px]'>
                    <Link to={`/team/${props.teamsInfo[0].match_hometeam_id}`}>
                        <img className='h-20 w-20 bg-[#1f2937] border border-solid border-[#0097B2] rounded p-2' src={props.teamsInfo[0].team_home_badge} />
                    </Link>
                    <span className='text-center text-sm'>{props.teamsInfo[0].match_hometeam_name}</span>
                </div>
                <div className='flex flex-col text-center w-[95px] lg:w-[150px]'>
                    <span className='text-[50px] lg:text-[60px]'>{props.teamsInfo[0].match_hometeam_score == '' ? '-' : props.teamsInfo[0].match_hometeam_score} : {props.teamsInfo[0].match_awayteam_score == '' ? '-' : props.teamsInfo[0].match_awayteam_score}</span>
                    <span className='text-[8px] lg:text-[10px]'>{toUpperCase(props.teamsInfo[0].match_status)}</span>
                </div>
                <div className='flex flex-col text-center justify-center items-center space-y-5 w-[150px] lg:w-[200px]'>
                    <Link to={`/team/${props.teamsInfo[0].match_awayteam_id}`}>
                        <img className='h-20 w-20 bg-[#1f2937] border border-solid border-[#0097B2] rounded p-2' src={props.teamsInfo[0].team_away_badge} />
                    </Link>
                    <span className='text-center text-sm'>{props.teamsInfo[0].match_awayteam_name}</span>
                </div>
            </div>
        </div>
    )
}
