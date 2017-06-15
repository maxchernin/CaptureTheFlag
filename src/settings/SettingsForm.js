import React, { Component } from 'react';
import CustomInput from '../shared/CustomInput';
import PropTypes from 'prop-types';

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
	onChange: PropTypes.func.isRequired,
	settings: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired
};

export default SettingsForm;