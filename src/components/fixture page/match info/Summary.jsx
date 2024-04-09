import React, { useState , useEffect } from 'react'
import { BiSync } from "react-icons/bi";
import { IoFootball } from "react-icons/io5";
import { TbCardsFilled } from "react-icons/tb";




export default function Summary(props) {

    const [sortedEvents, setSortedEvents] = useState([]);

    let homeSub = [];
    let awaySub = [];

    useEffect(() => {

        let combinedEvents = [];

        let homeSub = [];
        let awaySub = [];

        for(let i=0;i<((props.matchInfo[0]?.substitutions?.home).length);i++)
        {
            homeSub[i] = {
                "time" : (props.matchInfo[0]?.substitutions?.home)[i]?.time,
                "substitution" : (props.matchInfo[0]?.substitutions?.home)[i]?.substitution,
                "substitution_player_id" : (props.matchInfo[0]?.substitutions?.home)[i]?.substitution_player_id,
                "subTeam" : "home"
            }
        }
        for(let i=0;i<((props.matchInfo[0]?.substitutions?.home).length);i++)
        {
            awaySub[i] = {
                "time" : (props.matchInfo[0]?.substitutions?.away)[i]?.time,
                "substitution" : (props.matchInfo[0]?.substitutions?.away)[i]?.substitution,
                "substitution_player_id" : (props.matchInfo[0]?.substitutions?.away)[i]?.substitution_player_id,
                "subTeam" : "away"
            }
        }
        if (props.matchInfo && props.matchInfo.length > 0) {
            combinedEvents = [
                ...(props.matchInfo[0]?.goalscorer || []),
                ...(props.matchInfo[0]?.cards || []),
                ...(homeSub || []),
                ...(awaySub || [])
            ];
        }        

        const sorted = combinedEvents.sort((a, b) => parseInt(a.time) - parseInt(b.time));
        setSortedEvents(sorted || []);

    }, [props.matchInfo]);
    

  return (
    <div className='space-y-5 w-full'>
        {
        
            (props.matchInfo[0]?.goalscorer).length>0 || (props.matchInfo[0]?.cards).length>0 || homeSub.length>0 || awaySub.length>0 ? (
            <span className='px-2 text-[13px] text-[#0097B2]'>SUMMARY :</span>
            ):''
        }
        {
            sortedEvents && sortedEvents.map((even,index) => (
                <div key={index} className=''>

                    <div className="home text-[14px] lg:text-[15px] flex flex-col text-left w-full">
                        {
                            even.home_scorer && even.home_scorer && (
                                <div key={index} className='flex flex-row items-center text-left space-x-2 px-5 justify-start'>
                                    <span className='w-[20px]'>{`${even.time}'`}</span>
                                    <div className='flex flex-row items-center space-x-1 px-2 py-[2px] rounded text-center bg-[#1f2937]'>
                                        <span className=''><IoFootball /></span>
                                        <span className=''>{even.score}</span>
                                    </div>
                                    <span className=''>{even.home_scorer}</span>
                                    <span className=''>{`(${even.home_assist})`}</span>
                                </div>
                            )
                        }
                        {
                            even.home_fault && even.home_fault && (
                                <div key={index} className='flex flex-row items-center text-left space-x-1 px-5 justify-start'>
                                    <span className=''>{`${even.time}'`}</span>
                                    <span className=''>{even.home_fault}</span>
                                    <span className={`${even.card == 'yellow card' ? 'text-yellow-500' : 'text-red-500'}`}><TbCardsFilled /></span>
                                </div>
                            )
                        }
                        {
                            even.subTeam == "home" && even.substitution && (
                                <div key={index} className='flex flex-row items-center text-left space-x-2 px-5 justify-start'>
                                    <span className=''>{`${even.time}'`}</span>
                                    <span className='px-2 py-[2px] rounded text-center bg-[#1f2937]'><BiSync /></span>
                                    <span className=''>{even.substitution}</span>
                                </div>
                            )
                        }
                        
                    </div>

                    <div className="away flex text-[14px] lg:text-[15px] flex-col w-full mr-0">
                    {
                        even.away_scorer && even.away_scorer && (
                            <div key={index} className='flex flex-row items-center text-right space-x-2 px-5 justify-end'>
                                <span className=''>{even.away_assist ? `(${even.away_assist})` : ''}</span>
                                <span className=''>{even.away_scorer}</span>
                                <div className='flex flex-row items-center space-x-1 px-2 py-[2px] rounded text-center bg-[#1f2937]'>
                                    <span className=''><IoFootball /></span>
                                    <span className=''>{even.score}</span>
                                </div>
                                <span className=''>{`${even.time}'`}</span>
                            </div>
                        )
                    }
                    {
                        even.away_fault && even.away_fault && (
                            <div key={index} className='flex flex-row items-center text-left space-x-1 px-5 justify-end'>
                                <span className={`${even.card == 'yellow card' ? 'text-yellow-500' : 'text-red-500'}`}><TbCardsFilled /></span>
                                <span className=''>{even.away_fault}</span>
                                <span className=''>{`${even.time}'`}</span>
                            </div>
                        )
                    }
                    {
                        even.subTeam == "away" && even.substitution &&(
                            <div key={index} className='flex flex-row items-center text-left space-x-2 px-5 justify-end'>
                                <span className=''>{even.substitution}</span>
                                <span className='px-2 py-[2px] rounded text-center bg-[#1f2937]'><BiSync /></span>
                                <span className=''>{`${even.time}'`}</span>
                            </div>
                        )
                    }
                    </div>
                    
                </div>
            ))
        }
    </div>
  )
}
