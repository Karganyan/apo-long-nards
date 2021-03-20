import { ADD_NAME, CONNECT_USER } from "../types/user";

const userReducer = (state = {}, { type, payload }: any): object => {
  switch (type) {
    case ADD_NAME:
      return { ...state, name: payload };
    case CONNECT_USER:
      return {...state, connected: true}
    default:
      return state;
  }
}

export default userReducer;
