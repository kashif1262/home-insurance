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
			claimedAnything:0,
			howMany:''
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
		console.log(this.state);
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
										ownOrRent={this.state.postData.ownOrRent}
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
									<S2HomeType
										houseBuiltYear={this.state.postData.houseBuiltYear}
										typeOfProperty={this.state.postData.typeOfProperty}
										setHouseBuiltYear=
										{
											(year)=>{
												this.setState({
													postData:{
														houseBuiltYear:year
													}
												});
												console.log(year);
											}
										}
										setTypeOfProperty=
										{
											(type)=>{
												this.setState({
													postData:{
														typeOfProperty:type
													}
												});
												console.log(type);
											}
										}
									/>  
									<S3HouseSize
										houseSizeInSquareFeet={this.state.postData.houseSizeInSquareFeet}
										numberOfStroies={this.state.postData.numberOfStroies}
										setHouseSizeInSquareFeet={
											(value)=>{
												this.setState({
													postData:{
														houseSizeInSquareFeet:value
													}
												})
												console.log(value);
											}
										}
										setNumberOfStroies={
											(value)=>{
												this.setState({
													postData:{
														numberOfStroies:value
													}
												})
												console.log(value);
											}
										}
									/>
									<S4AboutInsurance
										insuredOrNot={this.state.postData.insuredOrNot}
										currentInsuranceCompany={this.state.postData.currentInsuranceCompany}
										setinsuredOrNot={
											(value)=>{
												this.setState({
													postData:{
														insuredOrNot:value
													}
												})
												console.log(value);
											}
										}
										setcurrentInsuranceCompany={
											(value)=>{
												this.setState({
													postData:{
														currentInsuranceCompany:value
													}
												})
												console.log(value);
											}
										}
									/>
									<S5ClaimedAnything 
										claimedAnything={this.state.postData.claimedAnything}
										howMany={this.state.postData.howMany}
										setclaimedAnything={
											(value)=>{
												this.setState({
													postData:{
														claimedAnything:value
													}
												})
												console.log(value);
											}
										}
										sethowMany={
											(value)=>{
												this.setState({
													postData:{
														howMany:value
													}
												})
												console.log(value);
											}
										}
									/> 
									<S6Personalnfo 
										firstName={this.state.postData.firstName}
										lastName={this.state.postData.lastName}
										setFirstName={
											(value)=>{
												this.setState({
													personalInfo:{
														firstName:value
													}
												})
												console.log(value);
											}
										}
										setLastName={
											(value)=>{
												this.setState({
													personalInfo:{
														lastName:value
													}
												})
												console.log(value);
											}
										}
									/>
									<S7Personalnfo 
										phone={this.state.personalInfo.phone}
										email={this.state.personalInfo.email}
										setPhone={
											(value)=>{
												this.setState({
													personalInfo:{
														phone:value 
													}
												})
												console.log(value);
											}
										} 
										setEmail={
											(value)=>{
												this.setState({
													personalInfo:{
														email: value
													}
												})
												console.log(value);
											}
										}
									/>
									<S8Personalnfo 
										dateOfBirth={this.state.personalInfo.dateOfBirth}
										gender={this.state.personalInfo.gender}
										setDateOfBirth={
											(value)=>{
												this.setState({
													personalInfo:{
														dateOfBirth: value
													}
												})
												console.log(value);
											}
										} 
										setGender={
											(value)=>{
												this.setState({
													personalInfo:{
														gender:value
													}
												})
												console.log(value);
											}
										}
									/>
									<S9Personalnfo 
										zipCode={this.state.postData}
										address={this.state.postData}
										setZipCode={
											(value)=>{
												this.setState({
													personalInfo:{
														zipCode:value
													}
												})
												console.log(value);
											}
										}
										setAddress={
											(value)=>{
												this.setState({
													personalInfo:{
														address:value
													}
												})
												console.log(value);
											}
										}
									/>
									<S10Personalnfo 
										city={this.state.personalInfo.city}
										craditRating={this.state.personalInfo.craditRating}
										setCity={
											(value)=>{
												this.setState({
													personalInfo:{
														city:value
													}
												})
												console.log(value);
											}
										}
										setCraditRating={
											(value)=>{
												this.setState({
													personalInfo:{
														craditRating:value
													}
												})
												console.log(value);
											}
										}
									/>
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
