import React, { Component } from 'react';
import { Form, Select, Button,Tooltip } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';

class S1OwnOrRent extends Component {

    onFinish = () => {
        this.props.nextStep()
    };

    render() {
        return (
            <div className="card shadow-lg  " style={{ minHeight: "80vh" }}>
                <div className="flex-row d-inline-flex justify-content-between">
                    <div className="p-2">
                        <Tooltip title="Back">  
                            <Button type="primary " shape="circle" onClick={this.props.previousStep} icon={<ArrowLeftOutlined  />} />
                        </Tooltip>
                    </div>
                    <div className="p-2">
                         <h4>{this.props.currentStep}/{this.props.totalSteps}</h4> 
                    </div>
                </div>
                <div className=" d-flex" style={{ minHeight: "70vh" }} > 
                    <div class="card-body d-flex justify-content-center align-items-center" align="center">
                        <Form className="w-50" onFinish={this.onFinish}>
                            <h3>Do You Own Or Rent</h3>
                            <Form.Item>
                                <Select placeholder="Select An Option" size="large" >
                                    <option value="i-own">I Own</option>
                                    <option value="i-rent">I Rent</option>
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