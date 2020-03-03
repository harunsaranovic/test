import React from 'react';
import './firstComponent.css';

class FirstComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
			buttonText: 'Button'
		};
	}

	handleClick() {
		if (clicked) {
			clicked != clicked;
			return this.setState({ buttonText: 'Button' });
		} else {
			clicked != clicked;
			return this.setState({ buttonText: 'Changed' });
		}
	}

	//change
	//change
	//change
	//change
	//change
	//change

	render() {
		return (
			<button className="button" onClick={() => this.handleClick()}>
				{this.state.buttonText}
			</button>
		);
	}
}

export default FirstComponent;
