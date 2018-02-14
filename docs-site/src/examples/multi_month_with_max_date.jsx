import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

export default class MultiMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().startOf('month').add(5, 'day'),
      maxDate: moment().endOf('month').subtract(3, 'day').startOf('day')
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {`
<DatePicker
    selected={this.state.startDate}
    maxDate={this.state.maxDate}
    onChange={this.handleChange}
    shouldCloseOnSelect={false}
    monthsShown={3}
/>
`}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            monthsShown={3}
            shouldCloseOnSelect={false}
            maxDate={this.state.maxDate}
            onChange={this.handleChange}
            selected={this.state.startDate}/>
        </div>
      </div>
    );
  }
}
