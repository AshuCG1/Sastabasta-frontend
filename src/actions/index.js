export const AdminLoginStart = (admin) => ({
    type : "ADMIN_LOGIN_START"
})

export const AdminLoginSuccess = (admin) => ({
    type: "ADMIN_LOGIN_SUCCESS",
    payload: admin
})

export const AdminLoginFailure = () => ({
    type: "ADMIN_LOGIN_FAILURE"
})

export const AdminLogout = () => ({
    type: "ADMIN_LOGOUT"
})



export const CustomerLoginStart = (customer) => ({
    type : "CUSTOMER_LOGIN_START"
})

export const CustomerLoginSuccess = (customer) => ({
    type: "CUSTOMER_LOGIN_SUCCESS",
    payload: customer
})

export const CustomerLoginFailure = () => ({
    type: "CUSTOMER_LOGIN_FAILURE"
})

export const CustomerLogout = () => ({
    type: "CUSTOMER_LOGOUT"
})
