import React, { useState ,Suspense} from 'react';
import Fixture from './Fixture';
import './styles.css/AllFixtures.css';


export default function AllFixture(props) {

  return (
      <div className='flex flex-col'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
        {Array.isArray(props.fixtures) == 0 ? <p>No Fixtures Today !!!</p> :
          props.fixtures.map((fixture, index) => (
            props.fixtures.length > 0 ? 
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
            :  
              <p>No Match Today</p>
            
            
        ))}
        </div>
      </div>
  );
  }


