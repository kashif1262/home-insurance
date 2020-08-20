import React, { Component } from 'react';
import { Form, Select, Button } from 'antd';

class S3AboutYourHomeSize extends Component {
    render() {
        return (
            <div class="card shadow-lg d-flex " style={{ minHeight: "80vh" }}>
                <div class="card-body  d-flex justify-content-center align-items-center" align="center"> 
                            <Form className="w-50" > 
                            
                            <h3>Tell Me a Little Bit About Your Home Size</h3> 
                                <Form.Item >
                                    <h5>Number Of Stories</h5>
                                    <Select placeholder="Select An Option" size="large" >
                                        <option value="i-own">I Own</option>
                                        <option value="i-rent">I Rent</option>
                                    </Select>
                                </Form.Item>  
                                <Form.Item >
                                    <h5>Square Feet</h5>
                                    <Select placeholder="Select An Option" size="large">
                                        <option value="i-own">I Own</option>
                                        <option value="i-rent">I Rent</option>
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

export default S3AboutYourHomeSize;

