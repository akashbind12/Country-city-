import axios from "axios"


export const GET_CITY_REQUEST = "GET_CITY_REQUEST";
export const GET_CITY_SUCCESS = "GET_CITY_SUCCESS";
export const GET_CITY_FAILURE = "GET_CITY_FAILURE";
export const ADD_CITY = "ADD_CITY";

export const cityRequest = () => {
    return {
        type : GET_CITY_REQUEST
    }
}

export const citySuccess = (data) => {
    return {
        type: GET_CITY_SUCCESS,
        payload : data
    }
}

export const cityFailure = (err) => {
    return {
        type: GET_CITY_FAILURE,
        payload : err
    }
}


export const addcity = (payload) => (dispatch)=> {
    dispatch(cityRequest())
  
    
    axios.post('https://assignments-backend2.herokuapp.com/add-city', payload)
      .then(function (response) {
          console.log(response.data);
          dispatch(getcity())
      })
      .catch(function (error) {
          console.log(error);
          dispatch(cityFailure(error.message))
      });
}

export const getcity = (payload) => (dispatch)=> {
    dispatch(cityRequest())
  
    
    axios.get('https://assignments-backend2.herokuapp.com/add-city')
      .then(function (response) {
          console.log(response.data);
          dispatch(citySuccess(response.data))
      })
      .catch(function (error) {
          console.log(error);
          dispatch(cityFailure(error.message))
      });
}

export const Deletecity = (id) => (dispatch) => {
    console.log(id)
    dispatch(cityRequest())

    axios.delete(`https://assignments-backend2.herokuapp.com/add-city/${id}`)
    .then(function (response) {
        console.log(response.data);
        dispatch(getcity())
    })
    .catch(function (error) {
        console.log(error);
        dispatch(cityFailure(error.message))
    });
    }

    export const Editcity = (id,payload) => (dispatch) => {
        console.log(id,payload)
        dispatch(cityRequest())
    
        axios.put(`https://assignments-backend2.herokuapp.com/add-city/${id}`, payload)
        .then(function (response) {
            console.log(response.data);
            dispatch(getcity())
        })
        .catch(function (error) {
            console.log(error);
            dispatch(cityFailure(error.message))
        });
        }