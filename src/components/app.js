import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Picker from './datePicker';
export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="title-box">
          Birthday Countdown
        </div>

        <div className="skew-light"></div>
        <div className="skew-light-base"></div>
        <div className="skew-light-two"></div>

        <div className="skew-dark-base"></div>
        <div className="skew-dark"></div>
        <div className="skew-dark-two"></div>
         <Picker/>
      </div>
    );
  }
}
