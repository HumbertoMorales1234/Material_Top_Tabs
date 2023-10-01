import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { balloon } from "../../assets";


export const MessagesScreen = () =>{
    return(
        <View style={styles.container}>
            <Text style={{color: 'white' , fontSize: 30}}>Your Messages</Text>
            <Image source={balloon} style={styles.imageStyles}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor:'#bc4d54',
    },
    imageStyles:{
        height: 300,
        width: 300,
        backgroundColor:'#60C8F1',
        borderRadius: 150
    }
})