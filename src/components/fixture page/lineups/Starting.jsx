import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SoccerLineUp from 'react-soccer-lineup';
import PlayerCard from './PlayerCard';




const Starting = (props) => {
    const [homePlayers,setHomePlayers] = useState([])
    const [awayPlayers,setAwayPlayers] = useState([])
    const [test,settest] = useState(0)
    function lineupImages (teamlineup,team){    
        
        if(team == 'home')
        {
          for(let i=0;i<teamlineup.length;i++){
            let selectedHomePlayer = homePlayers.find((pl) => teamlineup[i] == pl.player_number)
            settest(teamlineup.length)
            if(selectedHomePlayer){
                const homeEls = document.getElementsByClassName("player-view");
                let playername = (selectedHomePlayer?.player_name).split(" ")[((selectedHomePlayer?.player_name).split(" ")).length - 1]
                homeEls.length ? homeEls[i].innerHTML = `<div class='flex flex-col space-y-1 justify-center text-center items-center text-[7px] lg:text-[10px]'><img class='w-5 lg:w-10' src=${selectedHomePlayer?.player_image} style="border-radius:50%;"/><p class='px-[2px] lg:px-[10px] rounded bg-[#0097B2]'>${playername}</p></div>` : ''
            }
          }
        }
        if(team == 'away') {
            let i,j;
            for(i=test,j=0;i<22,j<teamlineup.length;i++,j++){
                let selectedAwayPlayer = awayPlayers.find((pl) => teamlineup[j] == pl.player_number)
                
                if(selectedAwayPlayer){
                    const awayEls = document.getElementsByClassName("player-view");
                    let playername = (selectedAwayPlayer?.player_name).split(" ")[((selectedAwayPlayer?.player_name).split(" ")).length - 1]
                    awayEls.length ? awayEls[i].innerHTML = `<div class='flex flex-col space-y-1 justify-center text-center items-center text-[7px] lg:text-[10px]'><img class='w-5 lg:w-10' src=${selectedAwayPlayer?.player_image} style="border-radius:50%;"/><p class='px-[2px] lg:px-[10px] rounded bg-[#0097B2]'>${playername}</p></div>` : ''
                }
            }
        }
      }

    const APIKey = '917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282';
    useEffect(() => {
        axios
          .get(`https://apiv3.apifootball.com/?action=get_teams&team_id=${props.firstTeamId}&APIkey=${APIKey}`)
          .then((res) => {
            setHomePlayers((res.data)[0].players);
          })
          .catch((error) => {
            console.error('Error fetching data: ', error);
          });
      }, [props.firstTeamId]);

    useEffect(() => {
        axios
            .get(`https://apiv3.apifootball.com/?action=get_teams&team_id=${props.secondTeamId}&APIkey=${APIKey}`)
            .then((res) => {
            setAwayPlayers((res.data)[0].players);
            })
            .catch((error) => {
            console.error('Error fetching data: ', error);
            });
    }, [props.secondTeamId]);

    let lineupHome = []
    let lineupAway = []

    useEffect(() => {
        lineupImages(lineupHome,'home')
        lineupImages(lineupAway,'away')
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        


    

    const [state, setState] = useState({
        color: '588f58',
        pattern: 'circles',
        showHomeTeam: false,
        showAwayTeam: false,

        homeTeamColor: 'f08080',
        homeTeamNumberColor: 'ffffff',
        homeGoalkeeperColor: 'd6cb65',
        homeGoalkeeperNumberColor: '333333',
        homeTeamClickable: true,

        awayTeamColor: 'add8e6',
        awayTeamNumberColor: '333333',
        awayGoalkeeperColor: '4f6c75',
        awayGoalkeeperNumberColor: 'ffffff',
        awayTeamClickable: true
    });


    const buildSquad = (apiSquad, color, team) => {
        let df = [];
        let cm = [];
        let cam = [];
        let fw = [];
        let teamSelected = team === 'away' ? props.awayFormationArray : props.homeFormationArray;

        const ttt = (player) => {
            alert(player.lineup_player);
        }

        let i = 0;
        let sumFormation = 0;

        let objGk = {
            number: parseInt(apiSquad[0].lineup_number),
            onClick: true ? (() => (alert(apiSquad[0].lineup_player))) : undefined,
            color: `${color}`,
            numberColor: 'white',
        };

        
        
        const positionLineup = (position) => {
            sumFormation = sumFormation + parseInt(teamSelected[position === df ? 0 : position === cm ? 1 : teamSelected.length === 4 && position === cam ? 2 : teamSelected.length === 3 && position === fw ? 2 : teamSelected.length === 3 && position === cam ? -1 : teamSelected.length === 4 && position === fw && 3]);
            console.log(sumFormation)
            while (i < sumFormation) {
                let obj = {
                    number: parseInt(apiSquad[i + 1].lineup_number),
                    color: `${color}`,
                    numberColor: 'white',
                    id: i + 1
                };
                obj.onClick = (() => { (ttt(apiSquad[obj.id])); });
                position.push(obj);
                i++;
            }

            if (team == 'home') {
                position = position.reverse();
                position.forEach((item) => {lineupHome.push(item.number)})
            }
            if(team == 'away'){
                position.forEach((item) => {lineupAway.push(item.number)})
            }
            
        }

        if (team == 'home') {
            lineupHome.unshift(objGk.number)
        }
        if(team == 'away'){
            lineupAway.unshift(objGk.number)        
        }

        positionLineup(df);
        positionLineup(cm);
        teamSelected.length == 4 && positionLineup(cam);
        positionLineup(fw);

        
        return {
            squad: {
                gk: objGk,
                df: df,
                cm: cm,
                cam: cam,
                fw: fw
            },
            style: {
                color: `#18181B`,
                numberColor: 'red'
            }
        }
    };

    const buildHomeTeam = () => {
        return buildSquad(props.startingHomeTeam, '#0097B2', 'home');
    };

    const buildAwayTeam = () => {
        return buildSquad(props.startingAwayTeam, 'gray', 'away');
    };

    const buildPatternsDropdownOptions = () => {
        return [
            {
                label: 'None',
                value: undefined,
            }, {
                label: 'Lines',
                value: 'lines',
            },
            {
                label: 'Squares',
                value: 'squares',
            },
            {
                label: 'Circles',
                value: 'circles',
            }
        ];
    };

    const { color, pattern, showHomeTeam, showAwayTeam } = state;

    return (
        <SoccerLineUp
            size="responsive"
            color="#18181B"
            pattern={pattern}
            homeTeam={buildHomeTeam()}
            awayTeam={buildAwayTeam()}
        />
    );
};

export default Starting;
