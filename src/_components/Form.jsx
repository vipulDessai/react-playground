import React, { Component } from "react";
import propTypes from "prop-types";

const gender = {
    MALE: "male",
    FEMALE: "female",
    OTHER: "other",
}

export class Form extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.dsmFile = React.createRef();

        this.state = {
            fName: '',
            lName: '',
            haveBike: false,
            haveCar: false,
            birthDate: '',
            email: '',
            noOfTasks: '',
            password: '',
            gender: '',
            phone: '',
            wStartTime: '',
            favFlavor: 'mango'
        }
    }
    submitForm(e) {
        e.preventDefault();

        this.props.onSubmit({...this.state, dsmFile: this.dsmFile});
    }
    render() {
        return (
            (
                <form onSubmit={this.submitForm}>
                    <label htmlFor="f-name">First name:</label>
                    <input type="text" id="f-name" onChange={(e) => this.setState({fName: e.target.value})} value={this.state.fName} required />
                    <label htmlFor="l-name">Last name:</label>
                    <input type="text" id="l-name" onChange={(e) => this.setState({lName: e.target.value})} value={this.state.lName} /><br />
                    <label htmlFor="have-bike">I have a bike:</label>
                    <input type="checkbox" id="have-bike" onChange={(e) => this.setState({haveBike: e.target.checked})} checked={this.state.haveBike}></input><br />
                    <label htmlFor="have-car">I have a car:</label>
                    <input type="checkbox" id="have-car" onChange={(e) => this.setState({haveCar: e.target.checked})} checked={this.state.haveCar}></input><br />
                    <label htmlFor="birth-date">Birth Date:</label>
                    <input type="date" id="birth-date" onChange={(e) => this.setState({birthDate: e.target.value})} value={this.state.birthDate}></input><br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}></input><br />
                    <label htmlFor="daily-status">DSM File:</label>
                    <input type="file" id="daily-status" ref={this.dsmFile}></input><br />
                    <label htmlFor="number-of-tasks">Number of tasks:</label>
                    <input type="number" id="number-of-tasks" onChange={(e) => this.setState({noOfTasks: e.target.value})} value={this.state.noOfTasks}></input><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" onChange={(e) => this.setState({password: e.target.value})} value={this.state.password}></input><br />
                    <label htmlFor="gender-male">Male:</label>
                    <input type="radio" id="gender-male" name="gender" onChange={(e) => this.setState({gender: gender.MALE})} checked={this.state.gender === gender.MALE}></input><br />
                    <label htmlFor="gender-female">Female:</label>
                    <input type="radio" id="gender-female" name="gender" onChange={(e) => this.setState({gender: gender.FEMALE})} checked={this.state.gender === gender.FEMALE}></input><br />
                    <label htmlFor="gender-other">Other:</label>
                    <input type="radio" id="gender-other" name="gender" onChange={(e) => this.setState({gender: gender.OTHER})} checked={this.state.gender === gender.OTHER}></input><br />
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" onChange={(e) => this.setState({phone: e.target.value})} value={this.state.phone}></input><br />
                    <label htmlFor="w-start-time">Work started Time:</label>
                    <input type="time" id="w-start-time" onChange={(e) => this.setState({wStartTime: e.target.value})} value={this.state.wStartTime}></input><br />
                    <label htmlFor="fav-flavor">
                        Pick your favorite flavor:
                        <select id="fav-flavor" value={this.state.favFlavor} onChange={(e) => this.setState({favFlavor: e.target.value})}>            
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label><br />
                    
                    <input type="reset"></input>
                    <input type="submit" value="Submit"></input><br />

                    <input type="hidden"></input><br />
                </form> 
            )
        )
    }
}

Form.propTypes = {
    onSubmit: propTypes.func.isRequired,
}