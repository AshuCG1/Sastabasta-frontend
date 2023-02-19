const customerInitialState = {
    customer: JSON.parse(localStorage.getItem("customer")) || null,
    isFetching: false,
    error: false
}


const CustomerReducer = (state = customerInitialState, action) => {
    
    switch ( action.type ) 
    {
        case "CUSTOMER_LOGIN_START":
            return {
                customer: null,
                isFetching: true,
                error: false
            }
        case "CUSTOMER_LOGIN_SUCCESS":
            return {
                customer: action.payload,
                isFetching: false,
                error: false
            }
        case "CUSTOMER_LOGIN_FAILURE":
            return {
                customer: null,
                isFetching: false,
                error: true
            }

        case "CUSTOMER_LOGOUT":
            return {
                customer: null,
                isFetching: false,
                error: false
            }
        
        default :
            return state;
    }
    
}


export default CustomerReducer;