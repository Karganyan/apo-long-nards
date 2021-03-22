import { ADD_NAME, CONNECT_USER } from "../types/user";
import { connect } from "../ws/ws";


const userReducer = (state = {}, { type, payload }: any): object => {
  switch (type) {
    case ADD_NAME:
      return { ...state, name: payload };
      case CONNECT_USER:
      connect()
      return {...state, connected: true}
    default:
      return state;
  }
}

export default userReducer;
