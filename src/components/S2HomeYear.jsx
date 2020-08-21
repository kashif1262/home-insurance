import React, { Component } from 'react';
import { Form, Button,Tooltip } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
//const { Option } = Select;
class S2HomeYear extends Component {
    state = {
        years: "",
        stateName: ""
    
    }; 
   
    CreateHomeYearBoxes = () =>{ 
        let i=0;
            const arr =[]; 
            for( i = 2019; i>=1992 ; i--){
                arr.push(
                    <div  className="col-1 p-2" key={i}>
                        <Button
                            value={i}
                            className="btn btn-outline-primary text-center btn-font"
                            onClick={()=>{this.moveNext()}}
                        >
                        {i}
                        </Button>
                    </div>
                );
            } 
            console.log(arr); 
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
                            <h5>When Was Your House Built</h5>
                            <div className="row"> 
                                 {this.CreateHomeYearBoxes()}  
                            </div>
                    </Form>
                </div>
            </div>
        </div>
        );
    }
}

export default S2HomeYear;
 



 
  // createHomeYearBoxes = () =>{
    //     let i=0;
    //     const arr =[]; 
    //     for( i = 2019; i>=2015 ; i--){
    //         arr.push(
    //             <div className="" key={i}>
    //                 <Button
    //                     value={i}
    //                     className="btn btn-outline-primary text-center btn-font"
    //                     onClick={(e)=>this.moveNext(e)}
    //                 >
    //                    button {i}
    //                 </Button>
    //             </div>
    //         );
    //     } 
    //     console.log(arr); 
    //     return arr; 
    // }

    

   

    // createHomeYearSelect =()=>{
    //     const arr =[];
    //     for(let i = 2019; i>=1992 ; i--){
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