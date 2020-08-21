import React, { Component } from 'react';
import { Form, Select, Button,Tooltip } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
 
//const {Option} = Select;

class S3HomeType extends Component {
    state={

    }


    CreateHomeYearBoxes = () => {
        let i = 0;
        const homeType = ["Single Family (Populer) ","Single Family Home","Duplex","Multi Family","Town Home","Condominium","Mobile Home","Apartment " ]; 
        const arr=[];
        for (i =0 ; i <=homeType.length  ; i++) {
            arr.push(
                <div  className="col-3 p-3 w-25" key={i}>
                    <Button 
                        
                        size="large"
                        value={homeType[i]}
                        className=" w-100 h-100 btn btn-outline-primary text-center btn-font"
                        onClick={() => { this.moveNext() }}
                    >
                        {homeType[i]}
                    </Button>
                </div>
            );
        }
        console.log(arr);
        return arr;
    }

    CreateHomeYearSelect = () => {
         
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
                                <h5>What Type Of Property Do You Have</h5>
                                <div className="row">
                                    {this.CreateHomeYearBoxes()}
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <Select
                                    style={{ width: "200px" }}
                                    size="large"
                                    placeholder="home type"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }

                                > 
                                </Select>
                            </Form.Item>

                        </Form>
                    </div>
                </div>
        </div>
        );
    }
}

export default S3HomeType;