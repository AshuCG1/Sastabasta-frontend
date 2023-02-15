import axios from "axios";
const USERS_REST_API_URL = "http://localhost:2024/api/v1/customer";
const baseURL = "http://localhost:2024/api/v1";
class CustomerService {
  getCustomers() {
    return axios.get("http://localhost:2024/customer/getcustomer/101");
  }
  getCustomerById(customerId) {
    return axios.get(baseURL + "/customer/" + customerId);
  }
  updateCustomer(customer) {
    return axios.put(baseURL + "/customer", customer);
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
