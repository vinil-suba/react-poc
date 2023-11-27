import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../utils/UserContext";

const ResInfo = () => {
    // const [resInfo, SetResInfo] = useState(null);
    const {res_id} = useParams();
    console.log(res_id, 'res id')
    const { userName } = useContext(UserContext);
    useEffect(() => {
       fetchDataAgain();
    }, [])
    const fetchDataAgain = async () => {
        const productDeatils = await fetch(
            "https://dummyjson.com/products/" + res_id);
            // "https://corsproxy.io/?https://www.swiggy.com/restaurants/hotel-niagara-since-1969-himayath-nagar-chaderghat-hyderabad-214809");
        //    console.log('details ', productDeatils);
           const json = await productDeatils;
        //    const json = await productDeatils.body.getReader();
           //const reader = response.body.getReader();
    // return reader.read();
           console.log(json, userName);
    }
    const fetchDataAgain2 = async () => {
        fetch('https://www.swiggy.com/restaurants/hotel-niagara-since-1969-himayath-nagar-chaderghat-hyderabad-214809')
  .then(response => {
    const reader = response.body.getReader();
    return reader.read(); // Read the stream
  })
  .then(({ value, done }) => {
    if (!done) {
      // Convert the stream value to text
      const text = new TextDecoder().decode(value);
      console.log(text.json()); // Log the text content
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
    }
    return (
        <div>
            <h1>This is res info page...</h1>
            userName: {userName}
        </div>
    )
}

export default ResInfo;