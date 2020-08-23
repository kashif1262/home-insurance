import React, { Component } from 'react';
import { Form,   Button } from 'antd';
import CommonComponents from './CommonComponents';


class S11ConformSubmission extends Component {
    state = {

    }

    moveNext = () => {
        this.props.lastStep();
    }

    render() {
        return (
            <div className="card shadow-lg" style={{ minHeight: "80vh" }}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className="d-flex" style={{ minHeight: "70vh" }}>
                    <div className="card-body d-flex justify-content-center align-items-center" align="center" >
                        <Form className="w-50" >
                            <Form.Item>
                                <h3>
                                    Confirm Submission
                                </h3>
                            </Form.Item>
                            <Form.Item>
                                <h6 className="text-justify">
                                    By clicking "Get My Quote" I provide my electronic signature and express
                                    written consent to telemarketing calls, text messages, emails, and postal
                                    mail from this Web site
                                    our marketing and re-marketing network, and up to eight insurance companies
                                    or their affiliates or representatives at the phone number (including wireless number),
                                    email address, and postal address provided by me. I consent to calls and text messages
                                    transmitting insurance quotes, or seeking related additional information from me,
                                    using an Automatic Telephone Dialing System or prerecorded or artificial voices.
                                    I consent that my signature is not a condition of purchasing any property, goods,
                                    or services and that I may revoke my consent at any time.
                                </h6>
                            </Form.Item>
                            <Form.Item >
                                <Button onClick={() => { this.moveNext() }} type="primary" htmlType="submit" block size="large">
                                    Get My Quote!
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default S11ConformSubmission;