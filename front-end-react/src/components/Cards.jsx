import React from 'react';
import { Card, Image } from 'semantic-ui-react'

import './Cards.css'

const Cards = props => {
  return (
    <Card onClick={() => { props.cardsCallback(props.clickEventName) }}>
      <Image src={props.imgName} wrapped ui={false} />
      <Card.Content>
        <Card.Header >{props.name}</Card.Header>
        <Card.Description>
          Batch 1
      </Card.Description>
        <Card.Meta className='spanText'>
          <span >{props.dataSize}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default Cards;

