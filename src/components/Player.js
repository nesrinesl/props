// src/Player.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

const Player = (player) => {
 
  /*name,jerseyNumber,team,nationality,age,*/
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={player.imageUrl} />
    <Card.Body>
      <Card.Title> NAME:{player.name}</Card.Title> 
      <Card.Text>
      jersey Number:{ player.jerseyNumber}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{player.team}</ListGroup.Item>
      <ListGroup.Item>{player.nationality}</ListGroup.Item>
      <ListGroup.Item>{player.age}</ListGroup.Item>
    </ListGroup>
    
  </Card>
  );
};
  /* Player.propTypes = {
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    jerseyNumber: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }; */


export default Player;
