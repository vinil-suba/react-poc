import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ResInfo = () => {
    // const [resInfo, SetResInfo] = useState(null);
    const {res_id} = useParams();
    console.log(res_id, 'res id')
    useEffect(() => {
       fetchDataAgain();
    }, [])
    const fetchDataAgain = async () => {
        const productDeatils = await fetch(
            "https://dummyjson.com/products/" + res_id);
           console.log('details ', productDeatils);
           const json = await productDeatils;
           console.log(json);
    }
    return (
        <div>
            <h1>This is res info page...</h1>
        </div>
    )
}

export default ResInfo;