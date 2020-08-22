import React, { Component } from 'react'; 
import {ArrowLeftOutlined} from '@ant-design/icons';
import {Tooltip ,Button} from 'antd';


class CommonComponents extends Component {
    render() {
        return (
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
        );
    }
}

export default CommonComponents;