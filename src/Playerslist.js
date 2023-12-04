
import React from 'react';

import players from './Players';
import Player from './components/Player';



const Playerslist = () => {
  console.log(players)
  return (
    <div style={{ display: 'flex', justifyContent:'space-around',flexWrap: 'wrap' }}>
      {players.map((player) => (
        <Player key={player.id} {...player} />
      ))}
    </div>
  );
};

export default Playerslist;
