import { GET_COUNTRY_FAILURE, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS } from "./action"




const initState = {
    isLoading: false,
    isError: false,
    company : []
}

export const countrysReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_COUNTRY_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError : false
            }
        }
        case GET_COUNTRY_SUCCESS: {

            return {
                ...state,
                company : payload,
                isLoading: false,    
            }
        }
        case GET_COUNTRY_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }
      
        default:
            return state
    }
}


