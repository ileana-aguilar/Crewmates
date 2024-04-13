import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'



const Card = ({ id, name, speed, color }) =>  {
  console.log(id, name, speed, color);
  return (
    <Link to={`/Gallery/CrewmateDetails/${id}`}>
      <div className="Card">
          <h3 className="Name">{"Name of Crewmate: " + name}</h3>
          <h3 className="Speed">{"Speed of Crewmate: " + speed + " mph"}</h3>
          <h3 className="Color">{"Color of Crewmate: " + color}</h3>
          <Link to={`/Gallery/EditCrewmate/${id}`}>
          <button className="editButton"> Edit Crewmate</button>
          </Link>
      </div>
      </Link>
  );
};

export default Card;