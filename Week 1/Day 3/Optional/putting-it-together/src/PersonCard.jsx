import React, { Component } from 'react';
import './App.css';

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    };
  }

  HappyBirthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1
    }));
    console.log(this.state.age);
  };

  render() {
    const { firstName, lastName, hairColor } = this.props;
    const { age } = this.state;

    return (
      <div className="person-card">
        <h3>{firstName} {lastName}</h3>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button className='btn' onClick={this.HappyBirthday}>Happy Birthday To {firstName} {lastName}</button>
      </div>
    );
  }
}

export default PersonCard;
