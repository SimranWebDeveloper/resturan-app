import yelpInstance from "@/api/yelp";
import { useEffect, useState } from "react";

interface prop {
    location:string
    term:string // axtardigim soz
    limit:number
}

export default () =>{

    const [result,setResult]=useState<any>([])
    const[errorMessage,setErrorMessage]=useState("")

    async function searchApi(item:string) {
        try {
            const response=await yelpInstance.get('/search',{
                params:{
                    location:"Istanbul",
                    term:item, // axtardigim soz
                    limit:30
                }
            })
            setResult(response.data.businesses)
            setErrorMessage("")
            
        } catch (error) {
            console.log(error);
            setErrorMessage("Baglantida xeta yarandi")
            
        }

    }
    
    useEffect(() => {
        searchApi("Toast")
    }, [])


    return [searchApi,result,errorMessage]
}
