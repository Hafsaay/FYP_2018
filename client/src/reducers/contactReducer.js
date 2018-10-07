import { ADD_CONTACT, GET_CONTACTS, CONTACT_LOADING } from "../actions/types";

const initialState = {
  contacts: [],
  contact: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONTACT_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
}
