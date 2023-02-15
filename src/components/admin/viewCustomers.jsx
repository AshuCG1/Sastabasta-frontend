import React from "react";
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
    // viewCustomerDetails(id){
    //     this.props.history.push(`/ViewCustomerDetails/${id}`);
    //     window.location.reload();
    // }
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
                                        
                                        <td> 
                                         {/* <button onClick={() => this.viewCustomerDetails(customer.customerId)} className="btn btn-outline-info" style={{marginLeft: "8px"}} >Details</button> */}
                                     </td> 
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