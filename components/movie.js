import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import MovieDetail from './movieDetail';
import { Avatar, Button, Card, Title, Paragraph, Portal, Provider } from 'react-native-paper';
import Modal from '@material-ui/core/Modal';

export default function Movie(props) {


  const [visible, setVisible] = React.useState(false);

  //const showModal = () => setVisible(true);

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
  

  function showModal2(country) {

      setVisible(true);
    }

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    function showModal(country) {
  
      setOpen(true);
    }

    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
    <Card>
    <Card.Content>
      <Title>{props.title}</Title>
      {/* <Paragraph>Card content</Paragraph> */}
    </Card.Content>
    <Card.Cover source={{ uri: props.img }} />
    <Card.Actions>
    
          <Portal>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
                        <MovieDetail  
                        props={props}>
    
                        </MovieDetail>
            </Modal>
          </Portal>
          <Button style={{marginTop: 30}} onPress={() => showModal(props)} >
            Details
          </Button>
    
    </Card.Actions>
    </Card>
    </Provider>
  );
}
