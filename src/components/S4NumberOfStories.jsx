import React, { Component } from 'react';
import { Tooltip, Button, Form } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
//const {Option} = Select; 
class S4NumberOfStories extends Component {
    state = {

    }
    CreateNumberOfStoriesBoxes = () => {
        const arr = [];
        for (let i = 1; i <= 4; i++) {
            arr.push(
                <div className="col-3 p-2 w-25" key={i}>
                    <Button
                        size="large"
                        value={i}
                        className="w-100 btn btn btn-outline-primary text-center btn-font"
                        onClick={() => { this.moveNext() }}
                    >
                        {i}
                    </Button>
                </div>
            )
        }
        const specific = () => {
            return (
                <div className="col-3 p-2 w-25" key={2}>
                    <Button
                        size="large"
                        value={2}
                        className="w-100 btn btn btn-outline-primary text-center btn-font"
                        onClick={() => { this.moveNext() }}
                    >
                        2 (Popular)
                    </Button>
                </div>)
        };
        arr[1]= specific();
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
                        <Tooltip>
                            <Button type="primary" shape="circle" onClick={this.props.previousStep} icon={<ArrowLeftOutlined />} />
                        </Tooltip>
                    </div>
                <div className="p-2">
                    <h4>
                        {this.props.currentStep}/{this.props.totalSteps}
                    </h4>
                </div>
                </div>
                <div className="d-flex" style={{ minHeight: "70vh" }}>
                    <div className="card-body d-flex justify-content-center align-items-center" align="center">
                        <Form>
                            <Form.Item>
                                <h3>
                                    Tell Me a Little Bit About Hour Home Stories
                                </h3>
                                <h5>
                                    Number Of Stories
                                </h5>
                                <div className="row">
                                    {this.CreateNumberOfStoriesBoxes()}
                                </div>
                            </Form.Item>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default S4NumberOfStories;