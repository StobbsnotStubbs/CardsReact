
import React from 'react';
import { Card, Image } from "semantic-ui-react";

const UserCard = ({ avatar, name, location, userName, descript, }) => (
  <div className="card">
    <Card>
        <Image src={avatar}  />
      <Card.Content>
        <Card.Header style={{ fontSize: "20px"}}>{name}</Card.Header>
        
        <Card.Meta>
          <span className="date" i class="fa fa-map-marker">
            {location}
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content >
        <Card.Description>Username - {userName}</Card.Description>
      </Card.Content>
      <Card.Content >
        <Card.Description>Description - {descript}</Card.Description>
      </Card.Content>
      
     
    </Card>
  </div>
);

export default UserCard;