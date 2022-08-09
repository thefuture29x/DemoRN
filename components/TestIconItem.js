<script src="http://localhost:8097"></script>
import React, { useState } from "react";
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native'
import HappyImage from '../assets/happy.png'


export default function TestIconItem(props){
    const {item} = props;
    return (
        <View style={styles.container}>
        <Text style={styles.title}>
            {item.name}
        </Text>
        <Image source={HappyImage} style={styles.happyIcon}></Image>
    </View>
    );
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding:15,
        backgroundColor: 'pink',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width:0,height:0},
        marginBottom:15
    },
    happyIcon: {
        width: 100,
        height: 100
    },
    title:{
        alignItems:'center',
        textTransform:'uppercase',
        marginBottom: 8,
        fontWeight:'700'
    }

});