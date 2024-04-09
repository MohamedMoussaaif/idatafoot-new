import React, { useState, useEffect } from 'react';
import AllFixture from './AllFixtures';
import axios from 'axios';
import leagues from '../../../Data/Topleagues/TopleaguesData';
import DatePicker from '../date/Date';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();
  return `${year}-${month > 0 && month < 10 ? `0${month}` : month}-${day > 0 && day < 10 ? `0${day}` : day}`;
}

export default function Livescore() {
  const [fixtureInfo, setFixtureInfo] = useState([]);
  const [currentDate, setCurrentDate] = useState(getDate());

  const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';
  useEffect(() => {
    axios
      .get(`https://apiv3.apifootball.com/?action=get_events&from=${currentDate}&to=${currentDate}&APIkey=${APIKey}`)
      .then((res) => {
        setFixtureInfo(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [currentDate]);


  const filteredFixtureInfo = fixtureInfo.filter((fixture) =>
    fixture.league_id == '3' ||
    fixture.league_id == '152' ||
    fixture.league_id == '175' ||
    fixture.league_id == '207' ||
    fixture.league_id == '302' ||
    fixture.league_id == '168'
  );

  return (
    <div className='pb-3'>
      <div className='grid grid-cols-2 items-center'>
        <span className='text-white text-2xl py-4'>Today's Match</span>
      </div>
      <AllFixture fixtures={filteredFixtureInfo} />
    </div>
  );
}
