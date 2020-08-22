import React, { Component } from 'react';
import { Form, Select, Button } from 'antd';
import CommonComponents from './CommonComponents';
import { Switch } from 'antd'; 
const {Option} = Select;

class S4AboutInsurance extends Component {
    state = {

    }

    CreateCompanyNameSelect = () => {
        let i = 0;
        const arr = [];
        for (i = 500; i <= 5200; i += 100) {
            arr.push(
                <Option className="p-0 text-center" key={1} value={i}> 
                    {i} 
                </Option>
            );
        }
        return arr;
    }

 

    moveNext = () => {
        this.props.nextStep();
    }

    render() {
        return (
            <div className="card shadow-lg" style={{ minHeight: "80vh" }}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className=" d-flex" style={{ minHeight: "70vh" }}>
                    <div className=" card-body d-flex justify-content-center align-items-center" align="center">
                        <Form className="w-50">
                            <Form.Item>
                                <h3>
                                    Tell Me a Little Bit About Your Home Insurance
                                </h3>
                                <h5>
                                Are You Currently Insured? 
                                </h5>
                                <div className="row d-flex justify-content-center align-items-center" align="center">
                                    <Switch /><br /> 
                                </div> 
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                Current Insurance Company
                                </h5>
                                <Select 
                                    size="large"
                                    placeholder="Company Not Listed"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }

                                >
                                    {this.CreateCompanyNameSelect()}
                                </Select>
                            </Form.Item>
                            <Form.Item >
                                <Button onClick={()=>this.moveNext()} type="primary" htmlType="submit" block size="large">
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

export default S4AboutInsurance;