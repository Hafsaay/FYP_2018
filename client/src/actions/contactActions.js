import axios from "axios";

import {
  ADD_CONTACT,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_CONTACTS,
  CONTACT_LOADING
} from "./types";

// Add Contact
export const addContact = contactData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/contact", contactData)
    .then(res =>
      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      })
    )

    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};

// Get all contacts
export const getContacts = () => dispatch => {
  dispatch(setContactLoading());
  axios
    .get("/api/contact/all")
    .then(res =>
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CONTACTS,
        payload: null
      })
    );
};

// Set loading state
export const setContactLoading = () => {
  return {
    type: CONTACT_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
