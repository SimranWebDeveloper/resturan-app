import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import useResults from '../hooks/useResults';
import { useEffect, useState } from 'react';



export default function Searchbar({term,onTermChangeFunc,onTermSubmitFunc}:any) {

  return (
    <View style={styles.view}>
        <AntDesign style={styles.icon} name="search1" size={24} color="black" />
      <TextInput 
      style={styles.input} 
      placeholder='Search' 
      autoCapitalize='none' 
      value={term}
      onChangeText={onTermChangeFunc} // when writing set state
      onEndEditing={onTermSubmitFunc} // when click enter btn
      ></TextInput>

      
    </View>
  )
}

const styles = StyleSheet.create({
    view:{

        flexDirection:'row',
       
        backgroundColor:"#A1A1A1",
        borderRadius:24,
        margin:16,
        padding:8,
        
    },
    icon:{
        // backgroundColor:"blue",
    },
    input:{
        flex:1,
        marginHorizontal:8,
        fontSize:16,
        // backgroundColor:"red",
    }
})

// cCULugfu_HJ1rFaJAJAEukRD1E5Os-74sDi5mhWk6KMtyk9zPhjvnwEtlxyev03Z77fpFozOBU1kAbTSMGmEwl8wIWyUGWLSSDqJ9e8_keAWdsQWQpUkLBM_d-JRZnYx