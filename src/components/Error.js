import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return(
        <div>
            <h1>Opps..... </h1>
            <h2>Something went wrong..............</h2>
            {/* <h3>{error}</h3> */}
        </div>
    )
}

export default Error;