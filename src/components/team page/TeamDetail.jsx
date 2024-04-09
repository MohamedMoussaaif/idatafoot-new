import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import TeamFixtures from './team fixtures/TeamFixtures';
import PosStanding from './pos Satanding/PosStanding';
import TeamPlayers from './team players/TeamPlayers';
import TeamInfo from './team info/TeamInfo';
import leagues from '../../Data/Topleagues/TopleaguesData';

export default function TeamDetail() {


  const {teamId} = useParams();

  const [teamInfo, setTeamInfo] = useState([]);
  const [activeTab, setActiveTab] = useState(1);


  const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';

  useEffect(() => {
    axios
      .get(`https://apiv3.apifootball.com/?action=get_teams&team_id=${teamId}&APIkey=${APIKey}`)
      .then((res) => {
        setTeamInfo(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [teamId]);

  const targetLeague = teamInfo.length > 0 ? leagues.find((league) => league.countryName === teamInfo[0].team_country) : null ;

  return (
    <div className='flex flex-row text-white justify-start px-2 lg:px-28 mt-[-7px] lg:py-10 lg:space-x-5'>
      <div className='flex flex-col justify-start w-full lg:w-5/6 space-y-4 mb-4'>
        <div className='bg-zinc-900 flex flex-col' style={{borderRadius: '8px'}}>
          <TeamInfo teamInfo={teamInfo}/>

          <div className="">
              <div className='flex flex-row space-x-3 px-5 py-1'>
                  <span onClick={() => setActiveTab(3)} className={`${activeTab == 3 ? 'bg-[#1f2937]' : ''} text-xs cursor-pointer px-4 py-[5px] mb-[-5px] rounded`}>STANDING</span>
                  <span onClick={() => setActiveTab(2)} className={`${activeTab == 2 ? 'bg-[#1f2937]' : ''} text-xs cursor-pointer px-4 py-[5px] mb-[-5px] rounded`}>SQUAD</span>
                  <span onClick={() => setActiveTab(1)} className={`${activeTab == 1 ? 'bg-[#1f2937]' : ''} text-xs cursor-pointer px-4 py-[5px] mb-[-5px] rounded`}>FIXTURES</span>
              </div>
              <div className={`${activeTab == 3 ? 'block' : 'hidden'} bg-[#1f2937] border-[#1f2937]`}>
                  <div className='' style={{borderRadius: '8px'}}>
                    <PosStanding leagueId={targetLeague != null ? targetLeague.api_id : null} teamName={teamInfo[0]?.team_name}/>
                  </div>
              </div>
              <div className={`${activeTab == 2 ? 'block' : 'hidden'} bg-[#1f2937] border-[#1f2937]`}>
                  <div className='' style={{borderRadius: '8px'}}>
                    <TeamPlayers teamPlayers={teamInfo[0]}/>
                  </div>
              </div>

              <div className={`${activeTab == 1 ? 'block' : 'hidden'} bg-[#1f2937] border-[#1f2937]`}>
                  <div className='' style={{borderRadius: '8px'}}>
                    <TeamFixtures teamId={teamId}/>
                  </div>
              </div>
          </div>
        </div>
      </div> 
      <div className='hidden lg:flex lg:w-1/5'>
                
      </div>
    </div>
  )
}
