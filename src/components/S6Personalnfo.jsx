import React, { Component } from 'react';
import {Form, Input,Tooltip,Button} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';


class S6Personalnfo extends Component {
    state={

    }

    moveNext=()=>{
        this.props.nextStep();
    }

    render() {
        return (
            <div className="card shadow-lg" style={{minHeight:"80vh"}}>
                <div className="flex-row d-inline-flex justify-content-between">
                    <div className="p-2">
                        <Tooltip title="back">
                            <Button type="primary" shape="circle" onClick={this.props.previousStep} icon={<ArrowLeftOutlined />} />
                        </Tooltip>
                    </div>
                    <div className="p-2">
                        <h4>
                            {this.props.currentStep}/{this.props.totalSteps}
                        </h4>
                    </div>
                </div>
                <div className="d-flex" style={{minHeight: "70vh"}}>
                    <div className="card-body d-flex justify-content-center align-items-center" align="center" >
                        <Form className="w-50" >
                            <Form.Item>
                                <h3>
                                    Personal Info
                                </h3>
                                <h5>
                                    First Name
                                </h5>  
                                <Input size="large" placeholder="" /> 
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    Last Name       
                                </h5>
                                
                                <Input size="large" placeholder=""  />
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

export default S6Personalnfo;