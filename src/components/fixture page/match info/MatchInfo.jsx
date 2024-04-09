import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { GiWhistle } from "react-icons/gi";
import { MdStadium } from "react-icons/md";
import Statics from '../statics/Statics';
import Lineups from '../lineups/Lineups';
import Summary from './Summary';

export default function MatchInfo(props) {
    const [matchInfo, setMatchInfo] = useState([]);

    const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';

    useEffect(() => {
        axios
            .get(`https://apiv3.apifootball.com/?action=get_events&APIkey=${APIKey}&match_id=${props.matchId}`)
            .then((res) => {
                setMatchInfo(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [props.matchId]);

    return (
        <div className='lg:px-2 py-8'>
            {matchInfo.length > 0 && (
                <div className='space-y-5'>
                    <div className='w-full'>
                        <Summary matchInfo={matchInfo} />
                    </div>
                    <div className='px-2 space-y-5'>
                        <span className='text-[13px] text-[#0097B2]'>MATCH INFORMATION :</span>
                        {matchInfo[0].match_referee && (
                            <div className='flex justify-between items-center w-full'>
                              <div className='flex items-center space-x-2'>
                                <GiWhistle />
                                <span className='text-xs'> REFEREE : </span>
                              </div>
                                <span className='text-xs text-right'>{matchInfo[0].match_referee}</span>
                            </div>
                        )}
                        {matchInfo[0].match_stadium && (
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex items-center space-x-2'>
                                  <MdStadium />
                                  <span className='text-xs'> VENUE : </span>
                                </div>
                                <span className='text-xs text-right'>{matchInfo[0].match_stadium}</span>
                            </div>
                        )}
                    </div>

                </div>
            )}
        </div>
    )
}
