import axios from "axios";
import { ADD_FAV, REMOVE_FAV } from "./actions_types";

// export const ADD_FAV = "ADD_FAV";
// export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

const URL = "http://localhost:3001/rickandmorty/fav";

export const addFav = (character) => {
  return (dispatch) => {
    axios.post(`${URL}`, character)
      .then(({ data }) => {
      console.log(data);
      return dispatch({
        type: ADD_FAV,
        payload: data
      });
    });
  };
};

export const removeFav = (id) => {
  return (dispatch) => {
    axios.delete(`${URL}/${id}`)
      .then(({ data }) => {
        return dispatch({
         type: REMOVE_FAV,
        payload: data
      })
    })
  }
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(orden) {
  return {
    type: ORDER,
    payload: orden,
  };
}
