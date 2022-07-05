import { GET_CITY_FAILURE, GET_CITY_REQUEST, GET_CITY_SUCCESS } from "./action"




const initState = {
    isLoading: false,
    isError: false,
    employee : []
}

export const cityReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_CITY_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError : false
            }
        }
        case GET_CITY_SUCCESS: {

            return {
                ...state,
                city : payload,
                isLoading: false,    
            }
        }
        case GET_CITY_FAILURE: {
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


