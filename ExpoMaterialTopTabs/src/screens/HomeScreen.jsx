import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FotoGirl, balloon } from "../../assets";


export const HomeScreen = () =>{
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 30}}>Welcome</Text>
            <Image source={FotoGirl} style={styles.imageStyles}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    imageStyles:{
        height: 300,
        width: 300,
        borderRadius: 150,
        backgroundColor:'#fff'
    }
})