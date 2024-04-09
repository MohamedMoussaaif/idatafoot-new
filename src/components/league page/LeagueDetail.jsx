import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import leagues from '../../Data/Topleagues/TopleaguesData'
import Standing from './standing/Standing';
import TopScorers from './top scorers/TopScorers';
import LeagueFixtures from './League fixtures/LeagueFixtures';

export default function LeagueDetail() {

    const {leagueId} = useParams();
    const selectedLeague = leagues.find((league) => league.api_id == leagueId)

    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className='flex flex-row text-white justify-center px-2 mt-[-7px] lg:px-28 lg:py-10 lg:space-x-5'>
            {
                selectedLeague ? (
                    <div className='flex flex-col w-full lg:w-5/6 space-y-4 mb-4'>
                        <div className='bg-zinc-900 flex flex-col' style={{borderRadius: '8px'}}>
                            <div className='p-4 pb-10'>
                                <div className="flex flex-row space-x-2 items-center" style={{fontSize:'13px'}}>
                                    <img className='h-2 md:h-3' src={selectedLeague.countryLogo} alt="england" />
                                    <span>{selectedLeague.leagueName}</span>
                                </div>
                                <div className='text-xs text-gray-400 ml-5 md:ml-7' style={{fontSize:'10px'}}>
                                    {selectedLeague.countryName}
                                </div>
                            </div>

                            <div className="">
                                <div className='flex flex-row space-x-3 px-5 py-1'>
                                    <span onClick={() => setActiveTab(3)} className={`${activeTab == 3 ? 'bg-[#1f2937]' : ''} text-xs cursor-pointer px-4 py-[5px] mb-[-5px] rounded`}>STANDING</span>
                                    <span onClick={() => setActiveTab(2)} className={`${activeTab == 2 ? 'bg-[#1f2937]' : ''} text-xs cursor-pointer px-4 py-[5px] mb-[-5px] rounded`}>TOP SCORERS</span>
                                    <span onClick={() => setActiveTab(1)} className={`${activeTab == 1 ? 'bg-[#1f2937]' : ''} text-xs cursor-pointer px-4 py-[5px] mb-[-5px] rounded`}>FIXTURES</span>
                                </div>
                                <div className={`${activeTab == 3 ? 'block' : 'hidden'} bg-[#1f2937] border-[#1f2937]`}>
                                    <div className='p-4' style={{borderRadius: '8px'}}>
                                        <Standing leagueId={leagueId}/>
                                    </div>
                                </div>
                                <div className={`${activeTab == 2 ? 'block' : 'hidden'} bg-[#1f2937] border-[#1f2937]`}>
                                    <div className='p-4' style={{borderRadius: '8px'}}>
                                        <TopScorers leagueId={leagueId}/>
                                    </div>
                                </div>

                                <div className={`${activeTab == 1 ? 'block' : 'hidden'} bg-[#1f2937] border-[#1f2937]`}>
                                    <div className='px-4 pt-4' style={{borderRadius: '8px'}}>
                                        <LeagueFixtures leagueId={leagueId}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                ):
                <p>No Data !!!</p>
            }
            <div className='hidden lg:flex lg:w-1/5'>
                
            </div>
        </div>
    )
}
