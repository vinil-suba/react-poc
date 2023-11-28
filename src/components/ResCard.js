
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../utils/redux/cartSlice';

const ResCard = (resData) => {
    // console.log(resData ,"<--" )
    // console.log(resData.resData.title ,"-->" )
    // {resData.title}
    //src='https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg' />
    const dispatch = useDispatch();
    function haddleCart(item) {
        dispatch(addItem(item));
    }
    return (
        <div className='res-card'>
            <img className='res-logo'
            src={resData?.resData.thumbnail} />
            <h3>12{resData?.resData.title} </h3>
            <h4>{resData?.resData?.category}</h4>
            <h4>{resData?.resData?.rating}</h4>
            <h4>{resData?.brand}</h4>
            <h4>{resData?.resData?.description}</h4>
            <Link to={"/res-info/"+ resData?.resData?.id}>
                more info
            </Link>
            <button onClick={() => haddleCart(resData?.resData)}>Add to Cart</button>
        </div>
    )
}

export const resCardWithPromotion =  (ResCard) =>  {
    return (props) =>  {
        return (
           <div className="absolute bg-black text-white m-2 p-2 ">
            <span>
                Promoted
            </span>
            <ResCard {...props}/>
           </div>
        )
    }
}

export default ResCard;



