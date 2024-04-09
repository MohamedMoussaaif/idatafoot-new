import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from '../../body/date/Date';
import Fixture from '../../body/livescore/Fixture';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();
  return `${year}-${month > 0 && month < 10 ? `0${month}` : month}-${day > 0 && day < 10 ? `0${day}` : day}`;
}

export default function TeamFixtures(props) {
  const [fixtureInfo, setFixtureInfo] = useState([]);
  const [currentDate, setCurrentDate] = useState(getDate());

  const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';

  useEffect(() => {
    axios
      .get(`https://apiv3.apifootball.com/?action=get_events&from=2023-10-05&to=2024-10-05&team_id=${props.teamId}&APIkey=${APIKey}`)
      .then((res) => {
        setFixtureInfo(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [currentDate,props.teamId]);

  return (
    <div className='p-2 lg:p-5'>
      <div className={`my-5`}>
        <div className={`${fixtureInfo.length > 0 ? 'grid grid-cols-2 lg:grid-cols-4 gap-3' : 'flex justify-center text-center'}`}>
        {Array.isArray(fixtureInfo) &&
          fixtureInfo.length > 0 ?
            (fixtureInfo.reverse()).map((fixture, index) => (
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
                    fixture.country_name,
                  ]}
                  matchId={fixture.match_id}
                />
                </div>              
            )) : 
            <p className='text-center'>No Match Today !!!</p>
        }
        </div>
      </div>
    </div>
  );
}
