import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import CommonComponents from './CommonComponents';


class S9Personalnfo extends Component {
    state={

    }

    moveNext=()=>{
        this.props.nextStep();
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
                                   Zip Code
                                </h5>  
                                <Input size="large" placeholder="Zip Code" /> 
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    Address       
                                </h5>
                                
                                <Input size="large" placeholder="Address"  />
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

export default S9Personalnfo;