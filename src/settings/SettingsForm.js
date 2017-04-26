import React, { Component } from 'react';
import CustomInput from '../shared/CustomInput';

class SettingsForm extends Component {
  render() {
    return (
      <div className="SettingsForm">
        <div className="panel panel-default">
          <div className="panel-body">
            <form>
              <CustomInput name="limit" type="number" label="Limit attempts" value={this.props.settings.limit} onChange={this.props.onChange} error="Re-Check your input"/>
              <CustomInput name="numOfAnswers" type="number" label="Number Of Answers" value="" onChange={this.props.onChange} error="Re-Check your input"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingsForm;
