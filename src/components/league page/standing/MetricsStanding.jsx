import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MetricsStanding(props) {
  const [teamList, setTeamList] = useState([]);
  const [teamsToShow, setTeamsToShow] = useState(7);

  const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';

  useEffect(() => {
    axios
      .get(`https://apiv3.apifootball.com/?action=get_standings&league_id=${props.leagueId}&APIkey=${APIKey}`)
      .then((res) => {
        setTeamList(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [props.leagueId]);

  const showMoreTeams = () => {
    setTeamsToShow(teamList.length); // Display all teams
  };

  const showLessTeams = () => {
    setTeamsToShow(7); // Set back to initial value (show 5 teams)
  };

  return (
    <div className="standig-section flex flex-col overflow-x-auto">
      <table className="w-full text-xs text-center">
        <thead className="standing-barre text-white">
          <tr>
            <th className="p-2">#</th>
            <th className="p-1 text-left">TEAM</th>
            <th className="p-1 text-center">MP</th>
            <th className="p-1 text-center">W</th>
            <th className="p-1 text-center">D</th>
            <th className="p-1 text-center">L</th>
            <th className="p-1 text-center">GD</th>
            <th className="p-1 text-center">PTS</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(teamList) && teamList.slice(0, teamsToShow).map((team) => (
            <tr key={team.team_name} className={`team-standing hover:bg-[#0097B2] hover:cursor-pointer ${props.teamName == team.team_name || props.teamName2 == team.team_name ? 'bg-[#0097B2]' : ''}`}>
              <td><Link to={`/team/${team.team_id}`}>{team.overall_league_position}</Link></td>
              <td className="p-1 flex items-center text-xs">
                <Link to={`/team/${team.team_id}`} className='flex flex-row items-center'>
                  <img src={team.team_badge} className='mr-2 w-3 md:w-3' alt={`${team.team_name} badge`} />
                  <span className="flex-grow text-left">{team.team_name}</span>
                </Link>
              </td>
              <td className="p-1 text-center">
                <Link to={`/team/${team.team_id}`}>
                  <span>{team.overall_league_payed}</span>
                </Link>
              </td>
              <td className="p-1 text-center">
                <Link to={`/team/${team.team_id}`}>
                  <span>{team.overall_league_W}</span>
                </Link>
              </td>
              <td className="p-1 text-center">
                <Link to={`/team/${team.team_id}`}>
                  <span>{team.overall_league_D}</span>
                </Link>
              </td>
              <td className="p-1 text-center">
                <Link to={`/team/${team.team_id}`}>
                  <span>{team.overall_league_L}</span>
                </Link>
              </td>
              <td className="p-1 text-center">
                <Link to={`/team/${team.team_id}`}>
                  <span>{team.overall_league_GF - team.overall_league_GA}</span>
                </Link>
              </td>
              <td className="p-1 text-center">
                <Link to={`/team/${team.team_id}`}>
                  <span>{team.overall_league_PTS}</span>
                </Link>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      <div className='flex justify-center p-1 text-center text-xs'>
        {teamsToShow < teamList.length && (
          <button onClick={showMoreTeams} style={{ marginTop: '10px' }} className='outline-none'>
            ... Show More ...
          </button>
        )}
        {teamsToShow > 7 && (
          <button onClick={showLessTeams} style={{ marginTop: '10px' }} className='outline-none'>
            ... Show Less ...
          </button>
        )}
      </div>
    </div>
  );
}
