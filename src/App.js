import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Logo from './Assets/logo.png';
import S1OwnOrRent from "./components/S1OwnOrRent"; 
import S2HomeType from "./components/S2HomeType";
import StepWizard from 'react-step-wizard'; 
import S3HouseSize from "./components/S3HouseSize";
import S4AboutInsurance from "./components/S4AboutInsurance";
import S7InsuranceCompanyName from "./components/S7InsuranceCompanyName";

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
							<img className="my-4" src={Logo} alt="Uotehound" width="150px" />
						</div>
					</div>
					<div className="row">
						<div className="col"> 
								<StepWizard initialStep={1} >
									<S1OwnOrRent /> 
									<S2HomeType />  
									<S3HouseSize />
									<S4AboutInsurance /> 
								</StepWizard> 
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
