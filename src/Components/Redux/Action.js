import { ADD, DELETE, ERROR, GET, REQUEST } from "./ActionType";

export const request = () => {
  return {
    type: REQUEST,
  };
};

export const error = (data) => {
  return {
    type: ERROR,
    payload: data,
  };
};

export const adddata = (data) => {
  return {
    type: ADD,
    payload: data,
  };
};

export const getdata = (data) => {
  return {
    type: GET,
    payload: data,
  };
};

export const deletedata = () => {
  return {
    type: DELETE,
  };
};
