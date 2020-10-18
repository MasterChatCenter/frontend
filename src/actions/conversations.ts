import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { MessagesService } from 'root/services';

type AddMessage = {
  pageId: string;
  senderId: string;
  text: string;
  username: string;
};
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessageAction = (payload: AddMessage): any => ({
  type: 'ADD_MESSAGE',
  payload,
});

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessageAction = (
  data: any,
  username: string
): ThunkAction<void, any, unknown, Action<string>> => {
  return (dispatch: any) => {
    MessagesService.create(data)
      .then((data) => {
        dispatch(addMessageAction({ ...data, username, pageId: '' }));
      })
      .catch();
  };
};
