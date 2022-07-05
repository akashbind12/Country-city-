import axios from "axios"


export const GET_COUNTRY_REQUEST = "GET_COUNTRY_REQUEST";
export const GET_COUNTRY_SUCCESS = "GET_COUNTRY_SUCCESS";
export const GET_COUNTRY_FAILURE = "GET_COUNTRY_FAILURE";
export const ADD_COUNTRY = "ADD_COUNTRY";

export const countryRequest = () => {
    return {
        type : GET_COUNTRY_REQUEST
    }
}

export const countrySuccess = (data) => {
    return {
        type: GET_COUNTRY_SUCCESS,
        payload : data
    }
}

export const countryFailure = (err) => {
    return {
        type: GET_COUNTRY_FAILURE,
        payload : err
    }
}


export const addcountry = (payload) => (dispatch)=> {
    dispatch(countryRequest())
  
    
    axios.post('https://assignments-backend2.herokuapp.com/add-country', {
        name : payload
    })
      .then(function (response) {
          console.log(response.data);
          dispatch(getcountry())
      })
      .catch(function (error) {
          console.log(error);
          dispatch(countryFailure(error.message))
      });
}

export const getcountry = (payload) => (dispatch)=> {
    dispatch(countryRequest())
  
    
    axios.get('https://assignments-backend2.herokuapp.com/add-country')
      .then(function (response) {
          console.log(response.data);
          dispatch(countrySuccess(response.data))
      })
      .catch(function (error) {
          console.log(error);
          dispatch(countryFailure(error.message))
      });
}