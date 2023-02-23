import axios from "axios";
class CustomerService {
  getCustomers() {
    return axios.get("http://localhost:2024/customer/allCustomer");
  }
  getCustomerById(customerId) {
    let temp = "http://localhost:2024/customer/getCustomer/" + customerId;
    console.log(temp);
    return axios.get(temp);
  }
  updateCustomer(customer) {
    return axios.put('http://localhost:2024/customer/editCustomer', customer);
  }


}
export default new CustomerService();
