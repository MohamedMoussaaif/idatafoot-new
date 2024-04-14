import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Starting from './Starting';
import { Link } from 'react-router-dom';


export default function Lineups(props) {
    const [lineupsHome, setLineupsHome] = useState({});
    const [lineupsAway, setLineupsAway] = useState({});

    const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';
    useEffect(() => {
        axios
            .get(`https://apiv3.apifootball.com/?action=get_lineups&APIkey=${APIKey}&match_id=${props.matchId}`)
            .then((res) => {
                setLineupsHome((res.data)[props.matchId]?.lineup.home || {});
                setLineupsAway((res.data)[props.matchId]?.lineup.away || {});
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [props.matchId]);

    const homeFormationArray = (props.homeFormation).split('-')
    const awayFormationArray = (props.awayFormation).split('-')

    return (
        <div className='lg:px-2 py-8 space-y-10'>
          {
            lineupsHome?.starting_lineups?.length && lineupsAway?.starting_lineups?.length ? (
              <div> 
                <div className='flex felx-row text-[#0097B2] text-sm lg:text-lg font-medium rounded bg-white mx-5 lg:mx-8'>
                  <div className='w-1/2 text-center'>
                    {props.homeFormation}
                  </div>  
                  <div className='w-1/2 text-center'>
                    {props.awayFormation}
                  </div>
                </div>
                <div className='px-0'>
                  <Starting firstTeamId={props.firstTeamId} secondTeamId={props.secondTeamId} homeFormationArray={homeFormationArray} awayFormationArray={awayFormationArray} startingHomeTeam={lineupsHome?.starting_lineups} startingAwayTeam={lineupsAway?.starting_lineups}/>
                </div>
                <div className="subtitutes flex flex-col justify-center space-y-5">
                    <span className='text-center text-sm'>SUBSTITUTES</span>
                    <div className='flex justify-between'>

                        <div className="home flex flex-col text-left space-y-5 w-1/2">
                          {
                            lineupsHome?.substitutes?.map((player,index) => (
                              <Link to={`/player/${player.player_key}`} key={index} className='cursor-pointer'>
                                <div className='flex flex-row items-center text-left space-x-1 bg-[#1f2937] px-5 py-2 justify-start'>
                                      <span className='text-[12px]'>{player.lineup_number}</span>
                                      <img className='w-3' src={props.homeBadge} alt="Home Badge" />
                                      <span className='text-[12px]'>{player.lineup_player}</span>
                                </div>
                              </Link>
                            ))
                          }
                            
                        </div>

                        <div className="away flex flex-col space-y-5 w-1/2">
                        {
                          lineupsAway?.substitutes?.map((player,index) => (
                            <Link key={index} to={`/player/${player.player_key}`} className='cursor-pointer'>
                              <div className='flex flex-row items-center text-right space-x-1 bg-[#1f2937] px-5 py-2 justify-end'>
                                    <span className='text-[12px]'>{player.lineup_player}</span>
                                    <img className='w-3' src={props.awayBadge} alt="Away Badge" />
                                    <span className='text-[12px]'>{player.lineup_number}</span>
                              </div>
                            </Link>
                          ))
                        }
                        </div>
                        
                    </div>
                </div>

                <div className="subtitutes flex flex-col pt-5 justify-center space-y-5">
                    <span className='text-center text-sm'>COACH</span>
                    <div className='flex justify-between'>

                        <div className="home flex flex-col text-left space-y-5 w-1/2">
                              <div className='flex flex-row items-center text-left space-x-1 bg-[#1f2937] px-5 py-2 justify-start'>
                                  {lineupsHome?.coach[0].lineup_player}
                              </div>
                            
                        </div>

                        <div className="away flex flex-col space-y-5 w-1/2">
                          <div className='flex flex-row items-center text-right space-x-1 bg-[#1f2937] px-5 py-2 justify-end'>
                              {lineupsAway?.coach[0].lineup_player}
                          </div>
                        </div>
                        
                    </div>
                </div>
              </div>
            ) : 
            <p className='text-center'>No data !!!</p>
          }
            

        </div>
    );
}
