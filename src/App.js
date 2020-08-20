import React, { Component } from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Logo from './Assets/logo.png';
import S1OwnOrRent from "./components/S1OwnOrRent";
import S3AboutYourHome from "./components/S3AboutYourHomeSize";
import S2AboutYourHomeType from "./components/S2AboutYourHomeType";
import S4AboutYourHomeInsurance from "./components/S4AboutYourHomeInsurance";
import StepWizard from "react-step-wizard";
import S5ClaimedAnyThing from "./components/S5ClaimedAnyThing";

class App extends Component {


	componentDidMount = () => {
		// var LeadiDscript = document.getElementById('LeadiDscript_campaign');
		// console.log(LeadiDscript)
	};

	render() {
		return (
			<div
				className="container-fluid"
				style={{ minHeight: "100vh", backgroundColor: "#f7f7f7", overflow: "hidden" }}
			>
				<div className="container">
					<div className="row">
						<div className="col">
							<img className="my-4" src={Logo} width="150px" />
						</div>
					</div>
					<div className="row">
						<div className="col"> 
								<S1OwnOrRent />
								<S2AboutYourHomeType />
								<S3AboutYourHome />
								<S4AboutYourHomeInsurance /> 
								<S5ClaimedAnyThing />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
