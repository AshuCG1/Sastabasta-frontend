import React from "react";
import adminService from "../../services/adminService";
import CustomerService from "../../services/customerService";
import './viewCustomers.css';

class ViewCustomer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
    }
    componentDidMount() {
        CustomerService.getCustomers().then((response) => {
            this.setState({ customers: response.data })
               
        });
        
    }
    deleteCustomer(id) {
        adminService.deleteCustomer(id).then(res => {
            this.setState({ customers: this.state.customers.filter(customer => customer.custId !== id) });
        });
        alert("Customer Deleted")
    }
   
    render() {
        return (
            
            <div>
                 {/* <Header/> */}
            <div className="maincontainer">
               
                <h1 className="text-center"> Customer List</h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td> Name</td>    
                            <td> Contact</td>
                            <td> Email</td>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map(
                                customer =>
                                    <tr key={customer.custId}>
                                        <td> {customer.custName}</td>
                                        <td> {customer.mobileNo}</td>
                                        <td> {customer.email}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}
export default ViewCustomer;