import React from "react";
class AddressClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.name, "--- address constructor----")
    }
    render() {
        console.log(this.props.name,  "address component render");
        return(
            <h1> from Address class component</h1>
        )
    }
    componentDidMount() {
        console.log(this.props.name,  "address component did mount");
    }
}

export default AddressClass;