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
import S5ClaimedAnything from './components/S5ClaimedAnything';
import S6Personalnfo from "./components/S6Personalnfo";
import S7Personalnfo from "./components/S7Personalnfo";
import S8Personalnfo from "./components/S8Personalnfo";
import S9Personalnfo from "./components/S9Personalnfo";
import S10Personalnfo from "./components/S10Personalnfo";
import S11ConformSubmission from './components/S11ConformSubmission';
class App extends Component {
	state={
		postData:{
			ownOrRent:"",
			houseBuiltYear:"",
			typeOfProperty:"",
			numberOfStroies:"",
			houseSizeInSquareFeet:'',
			insuredOrNot:false,
			currentInsuranceCompany:'',
			claimedAnything:0
		},
		personalInfo:{
			firstName:'',
			lastName:'',
			phone:'',
			email:'',
			address:'',
			zipCode:'',
			city:'',
			dateOfBirth:'',
			gender:'',
			craditRating:''
		}

	}

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
									<S1OwnOrRent 
										ownOrRent=
										{this.state.postData.ownOrRent}
										setOwnOrRent=
										{
											(value)=>
											{
												this.setState({
													postData:{
														ownOrRent:value
													}
												})
												console.log(value);
											}
										} 
									/> 
									<S2HomeType />  
									<S3HouseSize />
									<S4AboutInsurance />
									<S5ClaimedAnything /> 
									<S6Personalnfo />
									<S7Personalnfo />
									<S8Personalnfo />
									<S9Personalnfo />
									<S10Personalnfo />
									
									<S11ConformSubmission />
								</StepWizard> 
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
