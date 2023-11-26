import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            userObj: {
                name: 'test-name'
            },
            // valueTwo: "valueTwo"
        }
        // console.log(this.props.name, '--> child constructor---');
    }
    async componentDidMount() {
        // console.log(this.props.name, '--> child componentDidMount---');
        const getUserData = await fetch('https://api.github.com/users/vinil-suba');
        const getUserDataJson = await getUserData.json();
        this.setState = {
            userObj : getUserDataJson,
        }
        console.log(getUserDataJson, 'Json')

    }
    render() {
        // console.log(this.props.name, '--> child render---');
        return(
            <div className="user-class">
            <h1>This is user class from functional component</h1>
            <h2>UserName: {this.props.name}</h2>
            <h3>From: {this.props.location}</h3>
            <h3>the values from state: {this.state.valueOne}</h3>
            <button onClick={
                () => {
                    this.setState({
                        valueOne : this.state.valueOne + 1, 
                    })
                }
            }>Click here to increse the client</button>
            <h4>Andhra Pradesh</h4>
        </div>
        )
    }
}
export default UserClass;