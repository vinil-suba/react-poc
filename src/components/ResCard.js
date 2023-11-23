const ResCard = (resData) => {
    console.log(resData ,"-->" )
    {resData}
    //src='https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg' />
    return (
        <div className='res-card'>
            <img className='res-logo'
            src={resData?.thumbnail} />
            <h3>12{resData.title} </h3>
            <h4>{resData?.category}</h4>
            <h4>{resData?.rating}</h4>
            <h4>{resData?.brand}</h4>
            <h4>{resData?.description}</h4>
        </div>
    )
   }
   export default ResCard;