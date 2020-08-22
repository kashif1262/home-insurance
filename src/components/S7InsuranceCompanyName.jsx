import React, { Component } from 'react';
import { Button, Form, Tooltip } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


class S7InsuranceCompanyName extends Component {
    state = {

    }

    CreateCompanyNameBoxes = () => {
        let i = 0;
        const arr = [];
        for (i = 500; i <= 5200; i += 100) {
            arr.push(
                <div className="col-1 p-2 w-25" key={1}>
                    <Button
                        size="large"
                        value={i}
                        className=" w-100 btn btn-outline-primary text-center btn-font"
                        onClick={() => { this.moveNext() }}
                    >
                        {i}
                    </Button>
                </div>
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
                <div className=" d-flex" style={{ minHeight: "70vh" }}>
                    <div className=" card-body d-flex justify-content-center align-items-center" align="center">
                        <Form>
                            <Form.Item>
                                <h3>
                                    Tell Me a Little Bit About Your Home Insurance
                                </h3>
                               
                                <h5>
                                Current Insurance Company
                                </h5>
                                <div className="row d-flex justify-content-center align-items-center" align="center">
                                   {this.CreateCompanyNameBoxes()}
                                    
                                </div>
                                <Button className="m-2" onClick={()=>{this.moveNext()}}>
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

export default S7InsuranceCompanyName;