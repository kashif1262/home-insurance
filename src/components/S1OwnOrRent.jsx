import React, { Component } from 'react';
import { Form, Select, Button } from 'antd';
import CommonComponents from './CommonComponents';
const {Option} = Select;
class S1OwnOrRent extends Component {

    onFinish = () => {
        this.props.nextStep()
    };

    render() {
        return (
            <div className="card shadow-lg  " style={{ minHeight: "80vh" }}>
              <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className=" d-flex" style={{ minHeight: "70vh" }} > 
                    <div className="card-body d-flex justify-content-center align-items-center" align="center">
                        <Form className="w-50" onFinish={this.onFinish}>
                            <h3>Do You Own Or Rent</h3>
                            <Form.Item>
                                <Select placeholder="Select An Option" size="large" >
                                    <Option value="i-own">I Own</Option>
                                    <Option value="i-rent">I Rent</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" htmlType="submit" block size="large">
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

export default S1OwnOrRent;