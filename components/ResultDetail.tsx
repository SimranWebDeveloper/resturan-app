import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultDetail({result}:any) {
    
  return (
    <View style={styles.container}>
      <Text>ResultDetail</Text>
      {
      result.image_url ? (
        <Image 
            style={styles.img} 
            source={{ uri: result.image_url }} 
        />
        ) : null
      }

      <Text style={styles.title}>{result.name}</Text>
      
      <Text>Ulduzlu restoran:{result.rating}  Baxis sayi: {result.review_count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    img:{
         width: 200, height: 120 ,
         marginBottom: 5,
         borderRadius:20
    }
    ,
    title:{
        fontWeight:'bold',
    }
})