import React, { Component } from 'react';
import {Form, Select, Button} from 'antd';

class S5ClaimedAnyThing extends Component {
    render() {
        return (
            <div class="card shadow-lg d-flex " style={{ minHeight: "80vh" }}>
                <div class="card-body  d-flex justify-content-center align-items-center" align="center">
                    <Form >
                        <h3>Almost There!</h3>
                        <h3>Have you Claimed Anything Over the Last past 3 year</h3>
                        <Form.Item >
                            <h5>Are you Currently Insured</h5>
                            <Select placeholder="Select An Option" size="large">
                                <option value="i-own">I Own</option>
                                <option value="i-rent">I Rent</option>
                            </Select>
                        </Form.Item>
                        <Form.Item >
                            <h5>If So, How Many?</h5>
                            <Select placeholder="Select An Option" size="large" >
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large" block >
                                Next
                                </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default S5ClaimedAnyThing;