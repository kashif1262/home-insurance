import React, { Component } from 'react';
import moment from 'moment';
import { Form,  Button, Select,DatePicker, Space } from 'antd';
import CommonComponents from './CommonComponents'; 
const dateFormat = 'DD/MM/YYYY';  
const { Option } = Select; 
class S8Personalnfo extends Component {
    state = {

    }

    CreateDateOfBirthSelect = () => {
        return (
            <Space className="w-100 text-center" direction="vertical" size={12} >
                <DatePicker className="w-100 text-center"   size="large" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />  
            </Space>
        );
    }

    moveNext = () => {
        this.props.nextStep();
    }

    render() {
        return (
            <div className="card shadow-lg" style={{ minHeight: "80vh" }}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className="d-flex" style={{ minHeight: "70vh" }}>
                    <div className="card-body d-flex justify-content-center align-items-center" align="center" >
                        <Form className="w-50" >
                            <Form.Item>
                                <h3>
                                    Personal Info
                                </h3>
                                <h5>
                                    Date Of Birth
                                </h5>
                                {this.CreateDateOfBirthSelect()}
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    Gender
                                </h5>

                                <Select size="large" placeholder="Select An Option"  >
                                    <Option>Male</Option>
                                    <Option>Female</Option>
                                    <Option>Non Binary</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button onClick={() => { this.moveNext() }} type="primary" htmlType="submit" block size="large">
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

export default S8Personalnfo;