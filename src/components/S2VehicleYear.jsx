import React, { Component } from "react";
import "./S2VehicleYear.css";
import carQuery from "../Assets/carQuery.json";
import { Select } from "antd";

const { Option } = Select;

class S2VehicleYear extends Component {
	state = {
		years: "",
		stateName: "",
	};

	UNSAFE_componentWillMount = () => {
		var yearsArray = [];
		carQuery.map((data) => !yearsArray.includes(data.model_year) && yearsArray.push(data.model_year));
		this.setState({
			years: {
				minYear: Math.min.apply(null, yearsArray),
				maxYear: Math.max.apply(null, yearsArray),
			},
		});
	};

	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ stateName: newProps.zipCodeState });
	};

	createVehicleYearBoxes = () => {
		const arr = [];

		for (var i = this.state.years.maxYear; i > this.state.years.maxYear - 24; i--) {
			arr.push(
				<div className="col-3 p-2" key={i}>
					<button
						value={i}
						className="btn btn-outline-primary text-center btn-font"
						style={{ width: "100%" }}
						onClick={(e) => this.moveNext(e)}
					>
						{i}
					</button>
				</div>
			);
		}
		return arr;
	};

	createVehicleYearSelect = () => {
		const arr = [];

		for (var i = this.state.years.maxYear - 24; i >= this.state.years.minYear; i--) {
			arr.push(
				<Option className="p-0" key={i} value={i}>
					<input
						type="button"
						className="select-bg"
						style={{ border: "none", width: "100%", height: "100%" }}
						value={i}
						onClick={this.moveNext}
					/>
				</Option>
			);
		}
		return arr;
	};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.Vehicle_1_Year(Number(e.target.value));
		this.props.yearForVehicleName(Number(e.target.value));
	};
	render() {
		return (
			<div className="container pt-0 main-content-container mb-5">
				<h3 className="text-center mt-2 mb-2 main-heading">
					{this.props.zipCodeCity} <span style={{ fontWeight: "200" }}> Drivers Can Save Up to </span>
					$500<span style={{ fontWeight: "200" }}>/Year!</span>
				</h3>
				<br></br>
				<div>
					<div className="right-number">2/16</div>

					<br />
					<br />
					<div className="text-center box-width">
						<br></br>
						<h1 className="heading">Vehicle Year</h1>
						<div className="row">{this.state.years.length !== 0 && this.createVehicleYearBoxes()}</div>
						<br />
						{this.state.years.length !== 0 && (
							<Select
								style={{ width: "200px" }}
								size="large"
								placeholder="Prior Years"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								{this.createVehicleYearSelect()}
							</Select>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default S2VehicleYear;
