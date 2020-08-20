import React, { Component } from 'react';
import {Form, Select, Button} from 'antd';


class S1OwnOrRent extends Component {

    render() {
        return (
            <div class="card shadow-lg d-flex" style={{ minHeight: "80vh" }}>
                <div class="card-body d-flex justify-content-center align-items-center" align="center">
                    <Form className="w-50">
                        <h3>Do You Own Or Rent</h3>
                        <Form.Item>
                            <Select placeholder="Select An Option" size="large" >
                                <option value="i-own">I Own</option>
                                <option value="i-rent">I Rent</option>
                            </Select>
                        </Form.Item>
                        <Form.Item > 
                            <Button  type="primary" block size="large">
                                Next
                            </Button> 
                        </Form.Item> 
                    </Form>
                </div>
            </div>
        );
    }
}

export default S1OwnOrRent;