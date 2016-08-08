import fetch from 'isomorphic-fetch'

export const TYPE = {
  FETCH_TOKEN: 'FETCH_TOKEN',
  FETCH_TOKEN_SUCCESS: 'FETCH_TOKEN_SUCCESS',
  FETCH_TOKEN_FAILURE: 'FETCH_TOKEN_FAILURE',
  REQUEST_TOKEN: 'REQUEST_TOKEN',
  
  FETCH_CHANNELS: 'FETCH_CHANNELS',
  FETCH_CHANNELS_SUCCESS: 'FETCH_CHANNELS_SUCCESS',
  FETCH_CHANNELS_FAILURE: 'FETCH_CHANNELS_FAILURE',
  FETCHING_CHANNELS: 'FETCHING_CHANNELS',
  
  OPEN_CHANNEL: 'OPEN_CHANNEL',
  CREATE_CHANNEL: 'CREATE_CHANNEL',
  
  FETCH_MESSAGES: 'FETCH_MESSAGES',
  SEND_MESSAGE: 'SEND_MESSAGE',
  
  CONNECTION_ERROR: 'CONNECTION_ERROR'
}

const domain = '';

export function fetchTokenSuccess(token){
  return {
    type: TYPE.FETCH_TOKEN_SUCCESS,
    token: token
  }
}

export function requestToken(){
  return {
    type: TYPE.REQUEST_TOKEN
  }
}
  
export function connectionError(error){
  return {
    type: TYPE.CONNECTION_ERROR,
    error: error
  }
}
  
export function fetchToken(name){
  return function (dispatch){
    dispatch(requestToken())
    
    return fetch(`${domain}/token`, {
        method: 'POST',
        body: JSON.stringify({
          name: name
        })
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        return dispatch(fetchTokenSuccess(json))
      })
      .catch(ex => dispatch(connectionError('FETCH_TOKEN_FAILURE')))
  }
}