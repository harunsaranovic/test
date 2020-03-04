import React from 'react';
import './App.css';

import { CeptorWrapper } from 'CeptorJS';
//const CeptorWrapper2 = new CeptorWrapper();
const CeptorJS = new CeptorWrapper();

function App() {
	return (
		<div className="App">
			<header className="App-headers">
				<CeptorTest />
			</header>
		</div>
	);
}

class CeptorTest extends React.Component {
	constructor(props) {
		//setConfigParams()
		const ceptorConfigParams = {
			uatpHostUrl: 'https://ceptordev.uatp.com/api',
			uatpAirlineIdentifier: 'SW'
		};
		CeptorJS.setConfigParams(ceptorConfigParams);

		//setAFPParams()
		const requestedAFPParams = {
			transactionOrderNo: 123456,
			amount: 100,
			customerEmail: 'testing@test.ba',
			customerMobile: 9766963679,
			customerRef: 'testingref@email.com',
			language: 'us',
			currency: 840,
			paymentMethodConfigParams: [
				{
					paymentMethod: 'ApplePay',
					provider: 'CPD',
					config: {
						clientId: 10079,
						password: 'testing',
						hostUrl: 'https://uatp.uat-01.cellpointmobile.net',
						countryId: 200,
						accountId: 100790,
						userName: 'UATP',
						storeCard: false,
						version: '1.0',
						platform: 'HTML5/1.00',
						transactionTypeId: 30,
						applePayCardTypeId: 15
					}
				}
			]
		};
		CeptorJS.setAFPParams(requestedAFPParams);

		//Pass to PSS
		function callbackFunction(response) {
			const callbackFunctionResponse = response;
		}

		// Call get available payment methods to receive all available AFP
		const paymentMethods = CeptorJS.getAvailablePaymentMethods(callbackFunction);
		console.log('getAvailablePaymentMethods(callbackFunction)');
		console.log(paymentMethods);

		// After receiving paymentMethods and setting components parameters call setupAvailablePaymentMethods to enable payments
		CeptorJS.setupAvailablePaymentMethods(callbackFunction);

		const applePayComponent = if( methodAvailable){
			return (<div className='divClassName’  id={htmlComponentId}>);
		}

		super(props);
		this.state = {
			value: 'Test'
		};
	}

	render() {
		return (
			<div>
				<h2>Ceptor Test</h2>
			</div>
		);
	}
}

export default App;
