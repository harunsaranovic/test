import React from 'react';
import './firstComponent.css';

class FirstComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonText: 'Button'
		};
	}

	handleClick() {
		return this.setState({ buttonText: 'Changed' });
	}

	render() {
		return (
			<button className="button" onClick={() => this.handleClick()}>
				{this.state.buttonText}
			</button>
		);
	}
}

export default FirstComponent;
