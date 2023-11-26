// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import AddressClass from "./AddressClass";

//Funtional way of wrting the code....

// const About = () => {
//     return (
//        <div>
//          <h1>This is about page</h1>
//         <h2>My Infomation</h2>
//         {/* <User name={"vinil suba from function based component"}/> */}
//         <UserClass name={"vinil suba from class based component"} 
//         location = {'Guntur from class'}/>
//        </div>
//     )
// }

//Class way of wrting the code....
class About extends React.Component{
    constructor(props) {
        super(props)
        console.log(this.props.name, '--> Parent constructor---'); 
    }

    componentDidMount() {
        console.log(this.props.name, '--> Parent componentDidMount---');
    }
    render() {
        console.log(this.props.name, '--> Parent render---'); 
        return (
            <div>
              <h1>This is about page</h1>
             <h2>My Infomation</h2>
             {/* <User name={"vinil suba from function based component"}/> */}
             <UserClass name={"vinil suba from class based component"} 
             location = {'Guntur from class'}/>
             <UserClass name={"Gopi"} 
             location = {'Chebrolu'}/>
             <AddressClass/>
            </div>
         ) 
    }
}

export default About;