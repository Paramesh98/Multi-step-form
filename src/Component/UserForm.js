import React, { Component } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import Success from "./Success";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    city: "",
    occupation: "",
    bio: "",
    email: ""
  };

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };
  prevStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  handleClear = () => {
    this.setState({
      step: 1,
      firstName: "",
      lastName: "",
      city: "",
      occupation: "",
      bio: "",
      email: ""
    });
  };

  render() {
    const {
      firstName,
      email,
      lastName,
      step,
      city,
      occupation,
      bio
    } = this.state;
    const values = { firstName, email, lastName, step, city, occupation, bio };
    switch (step) {
      case 1:
        return (
          <FirstPage
            nextStep={this.nextStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 2: {
        return (
          <SecondPage
            nextStep={this.nextStep}
            values={values}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
          />
        );
      }
      case 3: {
        return (
          <ThirdPage
            nextStep={this.nextStep}
            values={values}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
          />
        );
      }
      default:
        return <Success handleClear={this.handleClear} />;
    }
  }
}

export default UserForm;
