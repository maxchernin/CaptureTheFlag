import React, { Component } from 'react';
import CustomInput from '../shared/CustomInput';

class SettingsForm extends Component {

  render() {
    let settings = this.props.settingsInfo.map((field, index) =>{
      return <CustomInput key={index} name={field.name} label={field.label} type={field.type} onChange={field.onChange} value={this.props.settings[field.name]} error={this.props.errors[field.name]} errorMsg={field.errorMsg} />
    });
    return (
      <div className="SettingsForm">
        <div className="panel panel-default">
          <div className="panel-body">
            <form>
              {settings}
              {/*<CustomInput name="limit" type="number" label="Limit attempts" value={this.props.settings.limit} onChange={this.props.onChange} error="Re-Check your input"/>*/}
              {/*<CustomInput name="numOfAnswers" type="number" label="Number Of Answers" value={this.props.settings.numOfAnswers} onChange={this.props.onChange} error="Re-Check your input"/>*/}
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