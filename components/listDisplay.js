import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Modal, Portal, Provider } from 'react-native-paper';
import Movie from './movie';
import MovieDetails from './movieDetail';

const ProdRender = ({proddata}) => {

    if(proddata){
        return proddata.map((item,key)=> {
                return(
                    <View key={key}>
                    {/* <Image 
                    source={{uri:item.image}} 
                    style={styles.placeImage}/>
                    <Text style={styles.textval} >{item.name}</Text>
                    <Text >{'\n'}</Text> */}
                    <Movie className={"col-xs-6 col-md-3"}
        title={item.name} img={item.imageUrl} id={item._id} language={item.language} rate={item.rate} type={item.type}>
        </Movie>
                    </View>

                )    
            })
    }
    
}

const ListDisplay =(props) =>{

        return(
                <ScrollView style={styles.listContainer}>
                    <View style={styles.listItem}>
                        {ProdRender(props)}
                    </View>  
                </ScrollView>   
        )

//             const [visible, setVisible] = React.useState(false);

//     const showModal = () => setVisible(true);

//     function showModal(country) {

//         setVisible(true);
//       }

//     const hideModal = () => setVisible(false);
//     const containerStyle = {backgroundColor: 'white', padding: 20};


//     if(proddata){
//         return proddata.map((item,key)=> {
//                 return(
//                     <Provider>
// <Card>
// <Card.Content>
//   <Title>{item.name}</Title>
//   <Paragraph>Card content</Paragraph>
// </Card.Content>
// <Card.Cover source={{ uri: item.imageUrl }} />
// <Card.Actions>

//       <Portal>
//         <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
//                     <MovieDetails  
//                     props={item}>

//                     </MovieDetails>
//         </Modal>
//       </Portal>
//       <Button style={{marginTop: 30}} onPress={() => showModal(item)} >
//         Details
//       </Button>

// </Card.Actions>
// </Card>
// </Provider>
               // )    
           // })
    //}



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