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
