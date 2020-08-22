import React, { Component } from 'react';
import { Form, Select, Button,Switch } from 'antd';
import CommonComponents from './CommonComponents';
const {Option}=Select;
class S5ClaimedAnything extends Component {
    state={

    }

    CreateHowManySelect=()=>{
        let i=0;
        const arr= [];
        for(i=1;i<=6;i++){
            arr.push(
                <Option className="p-0 text-center" key={i} value={i}>
                    {i}
                </Option>
            )
        }
        return arr;
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
                        <Form className="w-50">
                            <Form.Item>
                                <h3>
                                    Almost There!
                                </h3>
                                <h5>
                                    have You Cliaimed Anything Over The Past 3 years
                                </h5> 
                                <div className="row d-flex justify-content-center align-items-center" align="center">
                                    <Switch /><br />
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    If so, how many?         
                                </h5>
                                <Select 
                                    size="large"
                                    placeholder=""
                                    optionFilterProp="children"
                                    filterOption={ (input,option) => option.children.toLowerCase.indexOf(input.toLowerCase()) >= 0

                                    }
                                >
                                    {this.CreateHowManySelect()}
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

export default S5ClaimedAnything;