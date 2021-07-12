import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import TicketInfo from './TicketInfo';
import Modal from '@material-ui/core/Modal';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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


const MovieDetails = ({props}) => {


  function book(country) {
if(!date || !seat || !timings){
  alert("you must fill all the details");
  return;
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


setOpenLogin(true);

  }

  const [openLogin, setOpenLogin] = React.useState(false);
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

  const handleClose2 = () => {
    setOpen(false);
  };




  const classes = useStyles();

  if(props){
    return(
      <Card>
      <Card.Title   />
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>Type: {props.type}</Paragraph>
        <Paragraph>Language: {props.language}</Paragraph>
        <Paragraph>Rate: {props.rate}</Paragraph>
        <Paragraph>Type: {props.type}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: props.img }} />
      <FormControl className={classes.formControl}>
        <div className="row col-xs-6 col-md-3">
  <TextField
    id="date"
    label="Date"
    type="date"
    defaultValue="2017-05-24"
    value={date}
          onChange={handleChange3}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  </div>
  </FormControl>
  <FormControl className={classes.formControl}>
  <div className="  col-md-12">
  <InputLabel id="demo-simple-select-label">Available Show Timings</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timings}
          onChange={handleChange2}
        >
          <MenuItem value={"10:30"}>10:30</MenuItem>
          <MenuItem value={"18:00"}>18:00</MenuItem>
          <MenuItem value={"20:00"}>20:00</MenuItem>
        </Select>
        </div>
        </FormControl>
        <FormControl className={classes.formControl}>
        <div className=" col-md-12">
        <InputLabel id="demo-simple-select-label">Choose number of seat</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={seat}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        </div>
</FormControl>
<FormControl style={{paddingTop:"20px"}}>
</FormControl>

      <Card.Actions>
        <Button onPress={() => book(props)}>Book</Button>

        {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
                        <TicketInfo  
                       date={date} seat={seat} timings={timings} movie={props.title} >
    
                        </TicketInfo>
            </Modal> */}

            <Dialog
        open={openLogin}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Ticket Info"}</DialogTitle>
        <TicketInfo  
                       date={date} seat={seat} timings={timings} open={false} movie={props.title} >
    
                        </TicketInfo>

      </Dialog>

      </Card.Actions>
    </Card>
    )
  }

}

export default MovieDetails;