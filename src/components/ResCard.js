const ResCard = (resData) => {
    // console.log(resData ,"<--" )
    // console.log(resData.resData.title ,"-->" )
    // {resData.title}
    //src='https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg' />
    return (
        <div className='res-card'>
            <img className='res-logo'
            src={resData?.resData.thumbnail} />
            <h3>12{resData?.resData.title} </h3>
            <h4>{resData?.resData?.category}</h4>
            <h4>{resData?.resData?.rating}</h4>
            <h4>{resData?.brand}</h4>
            <h4>{resData?.resData?.description}</h4>
        </div>
    )
   }
   export default ResCard;