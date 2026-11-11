/*
Class component Student defined to be injected into App
*/
import { Component } from "react";

class Student extends Component {
    constructor(props){
        // Child constructor must always call parent constructor
        super(props);
        // Regular class prop, not a class component state
        this.classProperty = "some property value"
        // Storing internal data
        this.state ={
            studentNumber: props.studentNumber,
            firstName: "Colin"
        }        
        this.showMessage = this.showMessage.bind(this)        
        
    }
    // Regular method for the class
    showMessage() {
            alert("Welcome to the site " + this.state.firstName)
    }
    //Define a method using arrow syntax, which auto-binds the keyword
    incrementEventHandler = () => {
        this.classProperty = this.classProperty + ". The rest of the value string"
        console.log(this.classProperty)
        this.setState({studentNumber: this.state.studentNumber + 1})
    }
    eventHandler = (event) => {
        console.log("Event: " + event)
        console.log(event.target.name + " : " + event.target.value)
    }
    readName = (event) => {
        this.setState({firstName: event.target.value})
    }
    
    render() {
        return (
            <article>
                <h2>Student Component</h2>
                <p>classProperty: {this.classProperty}</p>
                <p>studentNumber: {this.state.studentNumber}</p>
                <p>Whole state object: {JSON.stringify(this.state)}</p>
                <input name="firstName" onChange={this.readName}/>
                <br/>
                <button onClick={this.incrementEventHandler}>Add</button>
                <button name="btnEvent" value="Event" onClick={(event) => this.eventHandler(event)}>
                    Show Event
                </button>
                <button onClick={this.showMessage}>Click Here</button>
            </article>
        )
    }
    // Old lifecycle methods, probably legacy
    componentDidMount() {
        console.log("Student component mounted")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("The component should update to: " + JSON.stringify(nextState))
        return true
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("The component was updated")
    }
    componentWillUnmount() {
        console.log("The component is about to unmount")
    }
}

export default Student;