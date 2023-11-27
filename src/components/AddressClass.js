import React from "react";
import UserContext from "../utils/UserContext";
class AddressClass extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props.name, "--- address constructor----")
    }
    render() {
        // console.log(this.props.name,  "address component render");
        return(
            <div>
            <h1> from Address class component</h1>
            {/* <UserContext.Consumer>
                {(dataInsideContext) => console.log('------ data-----', dataInsideContext) }
            </UserContext.Consumer> */}
              <UserContext.Consumer>
                {(dataInsideContext) => (
                    <h1>Display the name in browser: {dataInsideContext}</h1>
                ) }
            </UserContext.Consumer>
            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props.name,  "address component did mount");
    }
}

export default AddressClass;