import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Modal, Portal, Provider } from 'react-native-paper';
import MovieDetails from './movieDetail';

// const ProdRender = ({proddata}) => {

//     const [visible, setVisible] = React.useState(false);

//     const showModal = () => setVisible(true);
//     const hideModal = () => setVisible(false);
//     const containerStyle = {backgroundColor: 'white', padding: 20};


//     if(proddata){
//         return proddata.map((item,key)=> {
//                 return(
//                     // <View key={key}>
//                     // <Image 
//                     // source={{uri:item.image}} 
//                     // style={styles.placeImage}/>
//                     // <Text style={styles.textval} >{item.name}</Text>
//                     // <Text >{'\n'}</Text>
//                     // </View>

// <Card>
// <Card.Title   />
// <Card.Content>
//   <Title>{item.name}</Title>
//   <Paragraph>Card content</Paragraph>
// </Card.Content>
// <Card.Cover source={{ uri: item.imageUrl }} />
// <Card.Actions>
//   <Button  onPress={showModal}>Book</Button>
//   <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
//           <Text>Example Modal.  Click outside this area to dismiss.</Text>
//         </Modal>
// </Card.Actions>
// </Card>
//                 )    
//             })
//     }
    
// }

const ListDisplay =({proddata}) =>{

        // return(
        //         <ScrollView style={styles.listContainer}>
        //             <View style={styles.listItem}>
        //                 {ProdRender(props)}
        //             </View>  
        //         </ScrollView>   
        // )

            const [visible, setVisible] = React.useState(false);

    //const showModal = () => setVisible(true);

    function showModal(country) {

        setVisible(true);
      }

    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};


    if(proddata){
        return proddata.map((item,key)=> {
                return(
                    <Provider>
<Card>
<Card.Content>
  <Title>{item.name}</Title>
  <Paragraph>Card content</Paragraph>
</Card.Content>
<Card.Cover source={{ uri: item.imageUrl }} />
<Card.Actions>

      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <MovieDetails  
                    props={item}>

                    </MovieDetails>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={() => showModal(item)} >
        Details
      </Button>

</Card.Actions>
</Card>
</Provider>


                )    
            })
    }



}


const styles = StyleSheet.create({
    listContainer:{

      },
    listItem:{

        padding:10,
        marginTop:2,
        color:'#191970',
        backgroundColor: '#eee',
        alignSelf:'stretch',
    },
    placeImage:{
        marginRight:8,
        height:200
    },
    textval:{
        textAlign:'center',
        fontSize:30
    }
})



export default ListDisplay;