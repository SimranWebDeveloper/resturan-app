import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';


// ResultItem Arayüzü
interface ResultItem {
  id: string; // Eğer id bir numara ise 'number' olarak değiştirin
  // Diğer alanlar eklenebilir
}

// ResultList Bileşeni için Arayüz
interface ResultListProps {
  title: string;
  result: ResultItem[];
}

// ResultListFunc Bileşeni için Arayüz
interface ResultListFuncProps {
  item: ResultItem;
}

const ResultListFunc = ({ item }: ResultListFuncProps) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ResultShowScreen', { id: item.id })}>
      <ResultDetail result={item} />
    </TouchableOpacity>
  );
}

export default function ResultList({title,result}:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
        data={result}
        renderItem={({ item }) => <ResultListFunc item={item} />} // item ögesini doğru şekilde geçir
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24
  },
  title: {
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
    borderBottomColor:'black',
    borderBottomWidth:1
  }
})
