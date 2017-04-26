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
	getInitialState = function () {
		return {
			settings: {
				numOfAnswers: 4,
				limit: 3
			}
		}
	};

	setSettingsState = function (event) {
		var field = event.target.name;
		var value = event.target.value;
		this.stateCopy.settings[field] = value;
		return this.setState({settings: this.stateCopy.settings});
	};

	render() {
		return (
			<div className="Settings">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<SettingsForm initialSettings={this.state.settings} onChange={this.setSettingsState} />
					</div>
				</div>
				<NavBtn icon="" linkPath="/" text="Back"/>
			</div>
		);
	}
}

export default Settings;
