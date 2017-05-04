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
			settings: {
				numOfAnswers: 4,
				limit: 3
			},
			dirty: true
		}
	};

	componentDidMount = function () {
		console.log(this.state);
	};


	setSettingsState = function (event) {
		var field = event.target.name;
		var value = event.target.type == 'number' ? parseInt(event.target.value, 10) : event.target.value;
		this.state.settings[field] = value;
		return this.setState((prevState, props) => {
      return {
        settings: prevState.settings
      };
    });
	}.bind(this);

	saveChanges = function (event) {
		event.preventDefault();
		console.log('//@todo Max - validations + saving settings')
	};

	render() {
		return (
			<div className="Settings">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<SettingsForm settings={this.state.settings} onChange={this.setSettingsState} onSave={this.saveChanges}/>
					</div>
				</div>
				<NavBtn icon="" linkPath="/" text="Back"/>
			</div>
		);
	}
}

export default Settings;
