import React from 'react';
import { ChatList } from '../../../src/components/organisms';
import { render } from '../../utils';

describe('organisms / ChatList', () => {
  const conversations = [
    {
      senderId: '123456',
      username: 'username',
      text: 'Menssage',
      id: 1,
    },
    {
      senderId: '654321',
      username: 'username',
      text: 'Menssage',
      id: 2,
    },
  ];

  it('matches snapshot', () => {
    const { asFragment } = render(
      <ChatList
        allConversations={conversations}
        selectConversation={() => alert('Selected')}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
