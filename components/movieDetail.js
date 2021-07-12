import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



const MovieDetails = ({props}) => {
  function book(country) {

    alert('booking completed');
  }


  if(props){
    return(
      <Card>
      <Card.Title   />
      <Card.Content>
        <Title>{props.name}</Title>
        <Paragraph>Type: {props.type}</Paragraph>
        <Paragraph>Language: {props.language}</Paragraph>
        <Paragraph>Rate: {props.rate}</Paragraph>
        <Paragraph>Type: {props.type}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: props.imageUrl }} />
      <Card.Actions>
        <Button onPress={() => book(props)}>Book</Button>
      </Card.Actions>
    </Card>
    )
  }

}

export default MovieDetails;