import axios from "axios";
const USERS_REST_API_URL = "http://localhost:2024/api/v1/admin";
const baseURL = "http://localhost:2024/api/v1";
class AdminService {
  getAdmin() {
    return axios.get(USERS_REST_API_URL);
  }
  getAdminById(adminId) {
    return axios.get(baseURL + "/admin/" + adminId);
  }
  updateAdmin(admin) {
    return axios.put(baseURL + "/admin", admin);
  }
  deleteCustomer(id) {
    return axios.delete("http://localhost:2024/customer/deleteById/"+ id);
  }
//   buyInsurance(customerId, insuranceId) {
//     return axios.put(
//       baseURL + "/" + customerId + "/puchaseInsurance/" + insuranceId
//     );
//   }
}
export default new AdminService();
