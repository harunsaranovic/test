import React from 'react';
class FirstComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonText: 'Button'
		};
	}

	render() {
		return (
			<button
				className="square"
				onClick={function() {
					alert('click');
				}}
			>
				{this.props.buttonText}
			</button>
		);
	}
}
