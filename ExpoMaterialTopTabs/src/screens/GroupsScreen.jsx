import React from "react";
import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Girl } from "../../assets";


export const GroupsScreen = () =>{
    return(
        <View style={styles.container}>
            <Text style={{color: 'white' , fontSize: 30}} >Your Groups</Text>
            <Image source={Girl} style={styles.imageStyles}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#61515B'
    },
    imageStyles:{
        height: 300,
        width: 300,
        borderRadius: 150
    }
})