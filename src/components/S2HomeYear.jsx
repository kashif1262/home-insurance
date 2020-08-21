import React, { Component } from 'react';
import { Form, Select, Button,Tooltip } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
const { Option } = Select;
class S2HomeYear extends Component {
    state = {
        years: "",
        stateName: ""
    };

    // createHomeYearBoxes = () =>{
    //     const arr =[];

    //     for (let i = this.state.years.maxYear; i> this.state.years.maxYear - 24; i--){
    //         arr.push(
    //             <div className="col-3 p-2" key={i}>
    //                 <button
    //                     value={i}
    //                     className="btn btn-outline-primary text-center btn-font"
    //                     style={{width: "100%"}}
    //                     onClick={e=>this.moveNext(e)}
    //                 >
    //                     {i}
    //                 </button>
    //             </div>
    //         );
    //     }

    //     return arr;

    // }

    // createHomeYearSelect =()=>{
    //     const arr =[];
    //     for(let i = this.state.years.maxYear -24; i>= this.state.years.minYear; i--){
    //         <Option className="p-0" key={i} value={i}>
    //             <input
    //             type ="button"
    //             className="select-bg"
    //             value={i}
    //             onClick={this.moveNext}                
    //             />
    //         </Option>
    //     }
    //     return arr;
    // }

    // moveNext =(e)=>{
    //     this.props.nextStep(); 
    // }


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
                    <Form >
                        <h3>Tell Me a Little Bit About Your Home Type</h3>
                        <Form.Item>
                            <h5>When Was Your House Built</h5>
                            <Button onClick={this.props.nextStep} className="offset-1" type="primary" >
                                2019
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
        );
    }
}

export default S2HomeYear;