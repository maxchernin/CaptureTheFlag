
/**
 * Created by Max on 3/29/2017.
 */
import React, { Component} from 'react';

class Answer extends Component {

	// constructor(props){
	// 	super(props);
  //
	// }
	onButtonClick = function() {
		this.props.onButtonClick(this.props.id);
	}.bind(this);

	render() {
		return (
			<div className='Answer col-md-6'>
				<button
					type="button"
					onClick={this.onButtonClick}
				        className="btn btn-primary answer-btn"
				        aria-expanded="false">
					{this.props.city}
			</button>
			</div>
		);
	}
}

export default Answer;