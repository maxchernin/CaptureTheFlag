import React, {Component} from "react";
import NavBtn from "../shared/navBtn";
import SettingsForm from "./SettingsForm";
import _ from 'lodash';

class Settings extends Component {
	constructor(props){
		super(props);
		this.state = this.getInitialState();
		this.stateCopy = _.cloneDeep(this.state);
	}

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {

    }
  }

  componentWillUnmount(){
		if(this.state.dirty){
			return false;
		} else return true;
	}

	getInitialState = function () {
    return {
    	errors: {
    		attempts: false,
				numOfAnswers: false
			},
    	validation: {
    		attempts: {
    			min: 1,
          validationFn: this.checkMin
				},
				numOfAnswers: {
    			min: 1,
          validationFn: this.checkMin
				}
			},
      settingsInfo: [
        {
          name: 'attempts',
          type: 'number',
          label: '# of attempts',
					placeHolder: 'Insert you number',
					errorMsg: 'Minimum number of attempts: 1',
					onChange: this.setSettingsState
        },
        {
          name: 'numOfAnswers',
          type: 'number',
          label: '# of answers',
          placeHolder: 'Insert you number',
          errorMsg: 'Please insert a valid number',
          onChange: this.setSettingsState
        }
      ],
			settings: {
      	attempts: 3,
				numOfAnswers: 4
			},
      dirty: true
    };
	};

	componentDidMount = function () {
		console.log(this.state);
	};

	checkMin(field, inputMin){
    return inputMin < this.state.validation[field].min ? false : true;
	}

	setSettingsState = function(event) {
		var field = event.target.name;
		let type = event.target.type;
		var value = event.target.value;

		let settingsCopy = _.cloneDeep(this.state.settings);
		let errorsCopy = _.cloneDeep(this.state.errors);

    let isValid;
    switch (type) {
        case 'number':
          isValid =	this.state.validation[field] && this.state.validation[field].validationFn && this.state.validation[field].validationFn.call(this, field, event.target.valueAsNumber);
          value = event.target.valueAsNumber;
            errorsCopy[field] = isValid ? false : true;
          break;
      }
		settingsCopy[field] = value; //@todo Max - bad state mutation

		return this.setState((prevState, props) => {
      return {
        settings: settingsCopy,
				errors: errorsCopy
      }
    });
	}.bind(this);

  displayPopup(){
  	this.setState((prev, props)=>{
  		return {
  			dirty: true
			}
		})
	}

	saveChanges = function (event) {
		event.preventDefault();
		console.log('//@todo Max - validations + saving settings')
	};

	render() {

		return (
			<div className="Settings">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<SettingsForm settings={this.state.settings} settingsInfo={this.state.settingsInfo} onChange={this.setSettingsState} onSave={this.saveChanges} errors={this.state.errors}/>
					</div>
				</div>
				<NavBtn icon="" linkPath="/" text="Back"/>
			</div>
		);
	}
}


export default Settings;
