import React from "react";
import { ActivityIndicator, Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Girl } from "../../assets";
import { useEffect, useState } from "react";


export const GroupsScreen = () =>{

    const [isloading, setLoading] = useState(false)

    const delay = (ms) => new Promise((res) => setTimeout(res, ms))

    useEffect(() => {
        const cargar = async () =>{
            setLoading(true)
            await delay(4000)
            setLoading(false)
        }

        cargar()
    }, [])

    return(
        <View style={styles.container}>
            <Text style={{color: 'white' , fontSize: 30}} >Your Groups</Text>
            {isloading?(<ActivityIndicator size='large' />):<Image source={Girl} style={styles.imageStyles}/>}
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