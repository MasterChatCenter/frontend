import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { MessagesService, CustomersService } from 'root/services';

type AddMessage = {
  conversation_id: string;
  username: string;
  text: string;
  is_agent: string;
  createdAt: string;
  senderId: string;
};
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessageAction = (payload: AddMessage): any => ({
  type: 'ADD_MESSAGE',
  payload,
});

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessageAction = (
  data: any,
  username: string,
  conversation_id: string | number
): ThunkAction<void, any, unknown, Action<string>> => {
  return (dispatch: any) => {
    MessagesService.create(data)
      .then((data) => {
        dispatch(addMessageAction({ ...data, username, conversation_id }));
      })
      .catch();
  };
};

export const LOAD_CONVERSATIONS = 'LOAD_CONVERSATIONS';
export const loadConversationsAction = (
  id: string | number
): ThunkAction<void, any, unknown, Action<string>> => {
  return (dispatch: any) => {
    MessagesService.getConversations(id)
      .then((data) => {
        dispatch({ type: LOAD_CONVERSATIONS, payload: data });
      })
      .catch();
  };
};

export const CLOSE_TICKET = 'CLOSE_TICKET';
export const closeTicketAction = (id: number | string) => {
  return (dispatch: any) => {
    MessagesService.close(id)
      .then(() => {
        dispatch({ type: CLOSE_TICKET, payload: id });
      })
      .catch();
  };
};

export const UPDATE_USERNAME_CUSTOMER = 'UPDATE_USERNAME_CUSTOMER';
export const updateUsernameCustomer = (
  conversationId: string,
  customerId: string,
  name: string
): ThunkAction<void, any, unknown, Action<string>> => {
  return (dispatch) => {
    CustomersService.update({ name }, customerId).then(() =>
      dispatch({
        type: UPDATE_USERNAME_CUSTOMER,
        payload: { conversationId, name },
      })
    );
  };
};
