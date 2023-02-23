import axios from "axios";
const USERS_REST_API_URL = "http://localhost:2024/api/v1/admin";

class AdminService {
  
  deleteCustomer(id) {
    return axios.delete("http://localhost:2024/customer/deleteById/"+ id);
  }

}
export default new AdminService();
