import React, { Component } from 'react';
import { Form, Input,Select, Button } from 'antd';
import CommonComponents from './CommonComponents';
const {Option}=Select;

class S10Personalnfo extends Component {
    state={

    }

    moveNext=()=>{
        this.props.nextStep();
    }

    handleChangeCity = (value) => {
        this.props.setCity(value);
    }
    handleChangeCraditRating = (value) => {
        this.props.setCraditRating(value);
    }

    render() {
        return (
            <div className="card shadow-lg" style={{minHeight:"80vh"}}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className="d-flex" style={{minHeight: "70vh"}}>
                    <div className="card-body d-flex justify-content-center align-items-center" align="center" >
                        <Form className="w-50" >
                            <Form.Item>
                                <h3>
                                    Personal Info
                                </h3>
                                <h5>
                                    City
                                </h5>  
                                <Input onChange={this.handleChangeCity} size="large" placeholder="City" /> 
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    Credit Rating       
                                </h5>
                                <Select onChange={this.handleChangeCraditRating} size="large" placeholder="Credit Rating">
                                    <Option value="average" >Average</Option>
                                    <Option value="poor" >Poor</Option>
                                    <Option value="Good" >Good</Option>
                                    <Option value="excellent" >Excellent</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                    <Button onClick={()=>{this.moveNext()}} type="primary" htmlType="submit" block size="large">
                                        Next
                                    </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default S10Personalnfo;