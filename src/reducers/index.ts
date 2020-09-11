/* eslint-disable no-case-declarations */
import Router from 'next/router';
import { combineReducers } from 'redux';
import {
  LOGIN,
  LOGOUT,
  ADD_MESSAGE,
  LOAD_CURRENT_CONVERSATION,
} from 'root/actions';

type action = {
  type: string;
  payload: any;
};

const userReducer = (state = false, { type, payload }: action) => {
  switch (type) {
    case LOGIN:
      document.cookie = `user=${JSON.stringify(payload)}`;
      if (payload.role.name === 'agent') {
        Router.push('/');
      } else if (typeof payload.company_id === 'number') {
        Router.push('/agents');
      } else {
        Router.push('/complete');
      }
      return payload;
    case LOGOUT:
      document.cookie = 'user=';
      Router.push('/login');
      return payload;
    default:
      return state;
  }
};

const defaultState = {
  all: [
    {
      messages: [
        {
          pageId: '116313523496135',
          senderId: '3805880279428853',
          text: 'Jdflhdjl',
          username: 'Usuario 2',
        },
        {
          pageId: '116313523496135',
          senderId: '3805880279428853',
          text: 'Hfjñkghk',
          username: 'Usuario 2',
        },
      ],
      pageId: '1234567',
      senderId: '1234567',
      text: 'Jdflhdjl',
      username: 'Morty Smith',
    },
    {
      messages: [
        {
          pageId: '116313523496135',
          senderId: '3805880279428853',
          text: 'Jdflhdjl',
          username: 'Morty Smith',
        },
        {
          pageId: '116313523496135',
          senderId: '3805880279428853',
          text: 'Hfjñkghk',
          username: 'Morty Smith',
        },
      ],
      pageId: '116313523496135',
      senderId: '3805880279428853',
      text: 'Jdflhdjl',
      username: 'Usuario 2',
    },
  ],
  current: false,
};

const conversationsReducer = (
  state = defaultState,
  { type, payload }: action
) => {
  switch (type) {
    case ADD_MESSAGE:
      const existsUser = state.all.find((user: any) => {
        return user.senderId === payload.senderId;
      });

      if (!existsUser) {
        const newCostumer = {
          ...payload,
          messages: [{ ...payload }],
        };
        const newAll = [...state.all, newCostumer];
        return { ...state, all: newAll };
      }

      existsUser.messages.push(payload as any);

      return { ...state };
    case LOAD_CURRENT_CONVERSATION:
      const exists = state.all.find((user: any) => {
        return user.senderId === payload;
      });
      return { ...state, current: exists };
    default:
      return state;
  }
};

const reducers = {
  user: userReducer,
  conversations: conversationsReducer,
};

export default combineReducers(reducers);
