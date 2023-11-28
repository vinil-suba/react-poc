import { useEffect, useState } from 'react';
import ResCard, {resCardWithPromotion} from './ResCard';
import { mockData } from '../utils/mockData'
import Shimmer from './Shimmer'
// import { Link } from 'react-router-dom';


const Body = () => {
    // const [resStaticData, setResStaticData] = useState([]);
    const [resStaticData, setResStaticData] = useState(mockData);
    const [serachResponse, setSearchResponse] = useState(mockData);
    const [searchText, setSearchText] = useState("");
    const ResCardWithPromotion = resCardWithPromotion(ResCard);
    useEffect(() => {
        fetcData();
    }, []);

    const fetcData = async () => {
       const dataFromAPI = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
    //    console.log('dataFromAPI', dataFromAPI);
       const json = await dataFromAPI.json();
       console.log(json);
    //    setResStaticData(json.body)
    }

    return resStaticData.length === 0 ? <Shimmer/> : (
        <div className='body'>
           <div className="serach-top-rated">
                <div className='search'>
                    <input type='text' value={searchText} onChange={
                        (data) => setSearchText(data.target.value)
                    }/>
                    <button className='search-btn' onClick={
                        () => {
                      const finalData = resStaticData
                        .filter((filterdData) => 
                             filterdData?.title.toLowerCase()
                             .includes(searchText.toLowerCase())
                        )
                        console.log('from serach', finalData)
                        finalData.length === 0 ? resStaticData.length = 0 : resStaticData
                        setSearchResponse(finalData);
                    }}>Search</button>
                </div>
                <button className='top-rated-btn' onClick={
                    ()=> {
                        const filertedData = resStaticData.filter( data=>
                            data.rating > 4.5
                        );
                        setResStaticData(filertedData);
                        console.log(filertedData, 'Top res')
                    }
                } >
                    Top rated restaurants
                </button>
                <button className='top-rated-btn' onClick={
                    ()=> {
                        console.log('All res', mockData)
                        setResStaticData(mockData);
                    }
                } >
                    All Restaurants
                </button>
           </div>
            <div className='res-container'>
               {serachResponse.map( (res) => 
               <div key={res.id} >
               {/* <Link key={res.id} to={"/res-info/"+ res.id}> */}
                { (res.rating > 4.5) ? 
                <ResCardWithPromotion resData = {res} /> : 
                <ResCard  resData = {res}/> 
                }
                {/* </Link> */}
                </div>
               )}
            </div>
        </div>
    )
   };

   export default Body;