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
              <CustomInput name="numOfAnswers" type="number" label="Number Of Answers" value={this.props.settings.numOfAnswers} onChange={this.props.onChange} error="Re-Check your input"/>
              <button onClick={this.props.onSave} className='btn btn-default'>
                <span className='glyphicon'></span> Save Settings
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
SettingsForm.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	settings: React.PropTypes.object.isRequired,
	onSave: React.PropTypes.func.isRequired
};

export default SettingsForm;