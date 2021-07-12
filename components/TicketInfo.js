import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import QRCode  from 'qrcode.react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
}));


const TicketInfo = (props) => {
debugger;
    let stringQr = props;

  function book(country) {
    const newMovie= {
      date: date,
      movie: props.title,
      seat: seat,
      timings: timings
    };

    axios.post('http://localhost:3001/create', newMovie)
    .then(function (response){
      alert('booking completed');
      alert.log(response);
    });

  }

  const [seat, setSeat] = React.useState('');
  const [timings, setTimings] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleChange = (event) => {
    setSeat(event.target.value);
  };

  const handleChange2 = (event) => {
    setTimings(event.target.value);
  };

  const handleChange3 = (event) => {
    setDate(event.target.value);
  };

  const classes = useStyles();


    return(
      <Card>
      <Card.Title   />
      <QRCode value= {stringQr}/>
      <Card.Content>
        <Title>Ticket Info</Title>
        <Paragraph>Movie: {props.movie}</Paragraph>
        <Paragraph>Date: {props.date}</Paragraph>
        <Paragraph>Seat: {props.seat}</Paragraph>
        <Paragraph>Timings: {props.timings}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: props.img }} />
      <Card.Actions>
        <Button onPress={() => book(props)}>Done</Button>
      </Card.Actions>
    </Card>
    )
  

}

export default TicketInfo;