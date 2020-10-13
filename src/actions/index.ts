export {
  LOGIN,
  LOGOUT,
  UPDATE_USER,
  loginAction,
  logoutAction,
  updateUserAction,
} from './auth';
export {} from './conversations';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { sendMessageService } from 'root/services';

type action = {
  type: string;
  payload: any;
};

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessageAction = (payload: any): action => ({
  type: 'ADD_MESSAGE',
  payload,
});
export const LOAD_CURRENT_CONVERSATION = 'LOAD_CURRENT_CONVERSATION';
export const loadCurrentConversation = (payload: string): action => ({
  type: 'LOAD_CURRENT_CONVERSATION',
  payload,
});

export const UPDATE_LOCAL_COMPANY = 'UPDATE_LOCAL_COMPANY';
export const updateLocalCompany = (payload: {
  name: string;
  value: string;
}): action => ({ type: UPDATE_LOCAL_COMPANY, payload });

export const UPDATE_LOCAL_USER = 'UPDATE_LOCAL_USER';
export const updateLocalUser = (payload: {
  name: string;
  value: string;
}): action => ({ type: UPDATE_LOCAL_USER, payload });

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = (
  data: any,
  username: string
): ThunkAction<void, any, unknown, Action<string>> => {
  return (dispatch) => {
    sendMessageService(data)
      .then(() => {
        dispatch({
          type: SEND_MESSAGE,
          payload: { type: 'sender', text: data.messageData.text, username },
        });
      })
      .catch();
  };
};
