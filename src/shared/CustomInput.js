import React, { Component } from 'react';

class CustomInput extends Component {
	render() {
		let wrapperClass = 'form-group';
		this.props.error && this.props.error.length > 0 && (wrapperClass.concat(' ', 'has-error'));
		return (
			<div className={wrapperClass}>
							<label htmlFor={this.props.name}>{this.props.label}</label>
				<div className="field">
							<input type={this.props.type}
							       name={this.props.name}
							       className="form-control"
							       placeholder={this.props.placeholder}
							       ref={this.props.name}
							       value={this.props.value}
							       onChange={this.props.onChange}
							/>
					<div className="input">{this.props.error}</div>
				</div>
			</div>
		);
	}
}

CustomInput.propTypes = {
	name: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string,
	error: React.PropTypes.string
};

export default CustomInput;
