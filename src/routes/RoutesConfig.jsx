import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from '../components/body/Body';
import Contact from '../components/Contact/Contact';
import LeagueDetail from '../components/league page/LeagueDetail';
import TeamDetail from '../components/team page/TeamDetail';
import FixtureDetail from '../components/fixture page/FixtureDetail';
import NewsPage from '../components/news page/NewsPage';
import PlayerDetail from '../components/player page/PlayerDetail';

export default function RoutesConfig(props) {
  return (
    <Routes>
      <Route index element={<Body navClick={props.navClick}/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/league/:leagueId" element={<LeagueDetail />} />
      <Route path="/team/:teamId" element={<TeamDetail />} />
      <Route path="/fixture/:fixtureId" element={<FixtureDetail />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/player/:playerId" element={<PlayerDetail />} />

    </Routes>
  )
}
