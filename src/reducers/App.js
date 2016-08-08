import {TYPE} from '../actions'

const initial_state = {
  token: null,
  error: 'OK'
}

export function ChatApp(state=initial_state, action){
  switch(action.type){
    case TYPE.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.token
      }
      case TYPE.CONNECTION_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}