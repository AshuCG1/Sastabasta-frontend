import axios from "axios";
const USERS_REST_API_URL = "http://localhost:2024/api/v1/customer";
const baseURL = "http://localhost:2024";
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
  deleteCustomer(customerId) {
    return axios.delete(baseURL + "/" + customerId);
  }
  buyProduct(customerId, productId) {
    return axios.put(
      baseURL + "/" + customerId + "/purchaseInsurance/" + productId
    );
  }
}
export default new CustomerService();
