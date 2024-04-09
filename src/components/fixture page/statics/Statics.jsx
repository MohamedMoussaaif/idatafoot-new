import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProgressComponent from './progress/ProgressComponent';

export default function Statics(props) {

    const [statics, setStatics] = useState([]);

    const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';
    useEffect(() => {
    axios
      .get(`https://apiv3.apifootball.com/?action=get_statistics&APIkey=${APIKey}&match_id=${props.matchId}`)
      .then((res) => {
        setStatics((res.data)[props.matchId].statistics || []);
        if ((res.data)[props.matchId].statistics && (res.data)[props.matchId].statistics.length < 0) {
          props.setStaticsActive(0);
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [props.matchId, props.setStaticsActive]);


  const statsData = statics.filter((data) => 
    data.type === 'Shots Total' || 
    data.type === 'Shots On Goal' || 
    data.type === 'Fouls' || 
    data.type === 'Corners' || 
    data.type === 'Offsides' || 
    data.type === 'Ball Possession' || 
    data.type === 'Yellow Cards' || 
    data.type === 'Passes Total'
  );
  return (
    <div className={`space-y-5 px-5 py-10`}>
      {
        statics?.length ? (
        <div className='text-left space-y-4'>
            {
              statsData.length > 0 && statsData.map((stat) => (
                  <ProgressComponent key={stat.type} statName={stat.type} homeValue={stat.home} awayValue={stat.away} maxValue={parseInt(stat.home) + parseInt(stat.away)}/>
              ))
            }
        </div>
        ) :
        <p className='text-center'>No data !!!</p>
      }
    </div>
  )
}
