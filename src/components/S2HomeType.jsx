import React, { Component } from 'react';
import { Form, Select, Button, Tooltip } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'; 

const {Option} = Select;
class S2HomeType extends Component {
    state = {
        years: "",
        stateName: ""

    };


    

    CreateHomeYearSelect = () => {
        let i = 0;
        const arr = [];
        for (i = 2019; i >= 1922; i--) {
            arr.push(
            <Option className="p-0 text-center" key={i} value={i}>
               {i}
            </Option>
            )
        }
        return arr;
    } 

    CreateHomeTypeSelect = () => {
        let i = 0;
        const homeType = ["Single Family (Populer) ","Single Family Home","Duplex","Multi Family","Town Home","Condominium","Mobile Home","Apartment " ];
        const arr = [];
        for(i=0 ; i<homeType.length;i++){
            arr.push(
            <Option className="p-0 text-center" key={i} value={homeType[i]}> 
                {homeType[i]}
            </Option>
            )
        }
        return arr;
    } 

    moveNext = () => {
        this.props.nextStep();
    };



    render() {
        return (
            <div className="card shadow-lg  " style={{ minHeight: "80vh" }}>
                <div className="flex-row d-inline-flex justify-content-between">
                    <div className="p-2">
                        <Tooltip title="Back">
                            <Button type="primary " shape="circle" onClick={this.props.previousStep} icon={<ArrowLeftOutlined />} />
                        </Tooltip>
                    </div>
                    <div className="p-2">
                        <h4>{this.props.currentStep}/{this.props.totalSteps}</h4>
                    </div>
                </div>
                <div className=" d-flex" style={{ minHeight: "70vh" }} >
                    <div class="card-body  d-flex justify-content-center align-items-center" align="center">
                        <Form >
                            <Form.Item>
                                <h3>Tell Me a Little Bit About Your Home Type</h3>
                                <h5>When Was Your House Built</h5>
                                <Select 
                                    size="large"
                                    placeholder="House Built Years"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }

                                >
                                    {this.CreateHomeYearSelect()}
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                What Type Of Property Do You Have
                                </h5>
                                <Select 
                                    size="large"
                                    placeholder="Property Type"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }

                                >
                                    {this.CreateHomeTypeSelect()}
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

export default S2HomeType;

