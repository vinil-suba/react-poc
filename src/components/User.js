import { useState } from "react";

const User = ({name}) => {
    const [valueOne,  setValueOne] = useState(1)
    const [valueTwo,  setValueTwo] = useState(1)
    return(
        <div className="user-fun">
            <h1>This is user class from functional component</h1>
            <h2>UserName: {name}</h2>
            <h3>From: Guntur</h3>
            <h4>Andra Pradesh</h4>
            <h3>Values from stste: {valueOne}, {valueTwo}</h3>
        </div>
    )
}
export default User;