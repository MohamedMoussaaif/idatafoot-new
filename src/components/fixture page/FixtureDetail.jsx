import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Teams from './teams/Teams';
import TeamsStandings from './standings/TeamsStandings';
import H2H from './h2h/H2H';
import { Link } from 'react-router-dom';
import MatchInfo from './match info/MatchInfo';
import Lineups from './lineups/Lineups';
import Statics from './statics/Statics';


export default function FixtureDetail() {
  const {fixtureId} = useParams();
  const [fixtureInfo, setFixtureInfo] = useState([]);
  const [activeInfo, setActiveInfo] = useState(1);


  const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';
  useEffect(() => {
    axios
      .get(`https://apiv3.apifootball.com/?action=get_events&APIkey=${APIKey}&match_id=${fixtureId}`)
      .then((res) => {
        setFixtureInfo((res.data));
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [fixtureId]);

    return(
      <div className='flex flex-row text-white justify-center px-2 lg:px-28 mt-[-7px] lg:py-10 lg:space-x-5'>
          <div className='flex flex-col w-full lg:w-3/5 space-y-4 mb-4'>
            {fixtureInfo.length > 0 ? (
                <div className='bg-zinc-900 flex flex-col' style={{borderRadius: '8px'}}>
                    <div className='p-4 pb-2' style={{borderBottom:'1px solid rgb(31 41 55)'}}>
                      <Link to={`/league/${fixtureInfo[0].league_id}`}>
                        <div className="flex flex-row space-x-2 items-center" style={{fontSize:'13px'}}>
                            <img className='h-2 md:h-3' src={fixtureInfo[0].country_logo}/>
                            <span>{fixtureInfo[0].league_name} - {fixtureInfo[0].league_year}</span>
                        </div>
                        <div className='text-xs text-gray-400 ml-5 md:ml-7' style={{fontSize:'10px'}}>
                            {fixtureInfo[0].country_name}
                        </div>
                      </Link>
                    </div>
                    <div className='flex p-4 justify-center items-center my-8'>
                        <Teams teamsInfo={Array.isArray(fixtureInfo) && fixtureInfo}/>
                    </div>
                    

                    <div className='text-center py-2 text-xs space-x-5' style={{borderTop:'1px solid rgb(31 41 55)', borderBottom:'1px solid rgb(31 41 55)'}}>
                      <span onClick={() => setActiveInfo(1)} className={`${activeInfo==1 && 'text-[#0097B2]'} cursor-pointer`}>MATCH</span>
                      <span onClick={() => setActiveInfo(2)} className={`${activeInfo==2 && 'text-[#0097B2]'} cursor-pointer`}>H2H</span>
                      <span onClick={() => setActiveInfo(3)} className={`${activeInfo==3 && 'text-[#0097B2]'} cursor-pointer`}>STANDINGS</span>
                      <span onClick={() => setActiveInfo(4)} className={`${activeInfo==4 && 'text-[#0097B2]'} cursor-pointer`}>LINEUPS</span>
                      <span onClick={() => setActiveInfo(5)} className={`${activeInfo==5 && 'text-[#0097B2]'} cursor-pointer`}>STATS</span>
                    </div>

                    <div className={`${activeInfo == 1 ? 'block' : 'hidden'}`}>
                      <MatchInfo matchId={fixtureInfo[0].match_id} />
                    </div>
                    <div className={`${activeInfo == 2 ? 'block' : 'hidden'}`}>
                      <H2H firstTeamId={fixtureInfo[0].match_hometeam_id} secondTeamId={fixtureInfo[0].match_awayteam_id}/>
                    </div>
                    <div className={`${activeInfo == 3 ? 'block' : 'hidden'}`}>
                      <TeamsStandings leagueId={fixtureInfo[0].league_id} teamName={fixtureInfo[0].match_hometeam_name} teamName2={fixtureInfo[0].match_awayteam_name}/>
                    </div>
                    <div className={`${activeInfo == 4 ? 'block' : 'hidden'}`}>
                      <Lineups firstTeamId={fixtureInfo[0].match_hometeam_id} secondTeamId={fixtureInfo[0].match_awayteam_id} homeFormation={fixtureInfo[0].match_hometeam_system} awayFormation={fixtureInfo[0].match_awayteam_system} matchId={fixtureInfo[0].match_id} homeBadge={fixtureInfo[0].team_home_badge} awayBadge={fixtureInfo[0].team_away_badge}/>
                    </div>
                    <div className={`${activeInfo == 5 ? 'block' : 'hidden'}`}>
                      <Statics matchId={fixtureInfo[0].match_id}/>
                    </div>
                </div>
            ):
            <p className='text-center'>NO DATA TO DISPLAY !!!</p>
            }
          </div>
      </div>
  )
  
  
}
