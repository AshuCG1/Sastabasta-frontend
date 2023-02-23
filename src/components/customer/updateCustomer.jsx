import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import './updateCustomer.css'
import React, { Component } from 'react'
import customerService from '../../services/customerService';
export default class UpdateCustomer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            custId: this.props.match.params.custId,
            custName: "",
            mobileNo: "",
            email: "",
            password: ""
        }
        this.changeCustIdHandler = this.changeCustIdHandler.bind(this);
        this.changeCustNameHandler = this.changeCustNameHandler.bind(this);
        this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);


        this.updateCustomer = this.updateCustomer.bind(this);
    }
    componentDidMount() {
        
        customerService.getCustomerById(this.state.custId).then((res) => {
            let customer = res.data;
            this.setState({
                custId: customer.custId,
                custName: customer.custName,
                mobileNo: customer.mobileNo,
                email: customer.email,
                password: customer.password
            });
            
        });
    }

    updateCustomer = (e) => {
        e.preventDefault();
        
        let customer = { 
            custId: this.state.custId,
            custName: this.state.custName, 
            mobileNo: this.state.mobileNo, 
            email: this.state.email,
            password: this.state.password};

        customerService.updateCustomer(customer).then(res => {
            alert("customer updated")
            console.log(customer)
        });
    }
    changeCustIdHandler = (event) => {
        this.setState({ custId: event.target.value });
    }

    changeCustNameHandler = (event) => {
        this.setState({ custName: event.target.value });
    }

    changeMobileNoHandler = (event) => {
        this.setState({ mobileNo: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    

    render() {
        return (

            <div>
               
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className=" col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Customer</h3>
                            <div className="card-body">
                                <form>
                                 
                                    <div className="form-group">
                                        <label> Customer Name: </label>
                                        <input name="title" className="upd "
                                            value={this.state.custName} onChange={this.changeCustNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Mobile No: </label>
                                        <input  name="mobileNo" className="upd"
                                            value={this.state.mobileNo} onChange={this.changeMobileNoHandler} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input  name="email" className="upd"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password: </label>
                                        <input  name="password" className="upd"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>

                                    <button className="btn btn-outline-success btn" onClick={this.updateCustomer}>Save</button>
                                  
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


