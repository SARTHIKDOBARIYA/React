import {useEffect,useState} from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then(res => res.json())
            .then(json => setData(json['rates']))
        console.log("=== data ===>", data);
        
    },[currency])

    return data
}

export default useCurrencyInfo;