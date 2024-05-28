import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelpInstance from '@/api/yelp';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ResultShowScreen({route}:any) {
    const  id  = route.params.id;
    const [result, setResult] = useState<any>([]);

    const getResultId=async function (params:string) {
        const response=await yelpInstance.get(`/${params}`);
//
        setResult(response.data);
    }

    useEffect(() => {
        getResultId(id);
    }, [])
    console.log(result);
    

    if (result.length === 0) return null;    
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.txt}>{result.phone}</Text>
      <View style={styles.txt}>{
        result.is_closed ?
        <Ionicons name="lock-closed" size={24} color="black" >Baglidi</Ionicons> : 
        <FontAwesome5 name="lock-open" size={24} color="black" >Aciqdi</FontAwesome5>
      }
      </View>
      <Image style={styles.img}  source={{ uri: result.image_url }} />

    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:20,
       alignSelf:'center',
       marginBottom:10
    },
    txt:{
        fontSize:15,
       alignSelf:'center', 
       marginBottom:10
    },
    img:{
        height:180,
        margin:10,
        borderRadius:10,
        padding:10,
        
    }
})