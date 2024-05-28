import ResultList from "@/components/ResultList"
import Searchbar from "../components/Searchbar"
import { View,Text, ScrollView } from "react-native"
import useResults from "@/hooks/useResults"
import { useState } from "react"


const myStyle={backgroundColor:'yellow' ,color:'red' ,textAlign:'center' as const,fontWeight:'bold' as const,fontSize:20}
const SearchScreen = () => {
  const [searchApi,result,errorMessage]=useResults()

  const[term,setTerm]=useState("")

  const filterResultByPrice=(price:string)=>{
    return result.filter((result:any)=>result.price===price)
  }

  return (
    <ScrollView>
      <Searchbar
      term={term}
      onTermChangeFunc={setTerm}
      onTermSubmitFunc={()=>searchApi(term)}
      />

      {/* Network error  */}
      {errorMessage && <Text style={myStyle}>{errorMessage}</Text>    }

      {/* If product didnot found */}
      {
        result.length===0 ? null :
        <>
          <ResultList title="Ucuz Restoran" result={filterResultByPrice("₺")} />
          
          <ResultList title="Normal Restoran" result={filterResultByPrice("₺₺")} />
          
          <ResultList title="Bahali Restoran" result={filterResultByPrice("₺₺₺")} />
        
        </>
      }
      
    </ScrollView>
  )
}

export default SearchScreen

