import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomInput extends Component {
	render() {
		let wrapperClass = 'form-group';
		this.props.error && (wrapperClass = wrapperClass.concat(' ', 'has-error'));
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
					{this.props.error && <div className="input">{this.props.errorMsg}</div> }
				</div>
			</div>
		);
	}
}

CustomInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	error: PropTypes.bool
};

export default CustomInput;
