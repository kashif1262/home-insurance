import React, { Component } from 'react';
import { Form, Select, Button,Tooltip } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';

class S3HomeType extends Component {
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
                <div class="card-body  d-flex justify-content-center align-items-center" align="center">
                    <Form className="w-50">
                        <h3>Tell Me a Little Bit About Your Home Type</h3>
                        <Form.Item>
                            <h5>When Was Your House Built</h5>
                            <Select placeholder="Select An Option" size="large">
                                <option value="i-own">2019</option>
                                <option value="i-rent">2018</option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <h5>What Type Of Property Do You Have</h5>
                            <Select placeholder="Select An Option" size="large">
                                <option value="i-own">I Own</option>
                                <option value="i-rent">I Rent</option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" block size="large" >
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

export default S3HomeType;