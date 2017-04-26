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

	componentDidMount = function () {
		console.log(this.state);
	};

	setSettingsState = function (event) {
		var field = event.target.name;
		var value = event.target.type == 'number' ? parseInt(event.target.value, 10) : event.target.value;
		this.state.settings[field] = value;
		return this.setState({settings: this.state.settings});
	}.bind(this);

	render() {
		return (
			<div className="Settings">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<SettingsForm settings={this.state.settings} onChange={this.setSettingsState} />
					</div>
				</div>
				<NavBtn icon="" linkPath="/" text="Back"/>
			</div>
		);
	}
}

export default Settings;
