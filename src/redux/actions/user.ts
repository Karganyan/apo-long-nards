import { ADD_NAME, CONNECT_USER } from "../types/user";

//-------------action-creators-------------//

interface AC {
  type: string,
  payload?: any,
}

export const addNameAC = (name: string): AC => {
  return { type: ADD_NAME, payload: name }
}

export const connectUserAC = (): AC => {
  return { type: CONNECT_USER }
}
