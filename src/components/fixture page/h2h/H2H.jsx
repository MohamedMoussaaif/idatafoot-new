import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Fixture from '../../body/livescore/Fixture';

export default function H2H(props) {
    const [h2hMatch, setH2hMatch] = useState([]);

    const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';

    useEffect(() => {
        axios
        .get(`https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=${props.firstTeamId}&secondTeamId=${props.secondTeamId}&APIkey=${APIKey}`)
        .then((res) => {
            setH2hMatch((res.data).firstTeam_VS_secondTeam);
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
        });
    }, [props.firstTeamId, props.secondTeamId]);
  return (
    <div className={`p-2 py-8 ${h2hMatch.length > 0 ? 'grid grid-cols-2 lg:grid-cols-3 gap-2' : 'flex justify-center text-center'}`}>
        {
            Array.isArray(h2hMatch) &&
            h2hMatch.length > 0 ?
            h2hMatch.map((fixture, index) => (
                <div key={index} className='cursor-pointer' style={{ borderRadius: '8px' }}>
                  <Fixture
                  status={fixture.match_status}
                  info={[
                    fixture.match_hometeam_name,
                    fixture.team_home_badge,
                    fixture.match_hometeam_score,
                    fixture.match_awayteam_name,
                    fixture.team_away_badge,
                    fixture.match_awayteam_score,
                    fixture.league_name,
                    fixture.match_time,
                    fixture.match_live,
                    fixture.league_id,
                    fixture.match_awayteam_id,
                    fixture.match_hometeam_id,
                    fixture.match_date,
                  ]}
                  matchId={fixture.match_id}
                />
                </div>
            )): ''

        }    
    </div>
  )
}
