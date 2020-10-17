import React, { FC, useState, useEffect } from 'react';
import { InputSearch } from '@/atoms';
import { ChatButton, List } from '@/molecules';
import { CSSChatContainer, CSSWrapperSearch } from './styles';

type props = {
  allConversations: any;
  selectConversation: any;
};

const ChatList: FC<props> = ({ allConversations, selectConversation }) => {
  const [conversations, setConversations] = useState([...allConversations]);

  useEffect(() => {
    setConversations(allConversations);
  }, [allConversations]);

  const handleChange = (event: any) => {
    const value = event.target.value;
    const filter = allConversations.filter(
      ({ username, text }: any) =>
        username.indexOf(value) > -1 || text.indexOf(value) > -1
    );
    setConversations(filter);
  };

  const handleClick = (senderId: string) => {
    selectConversation(senderId);
  };

  return (
    <CSSChatContainer>
      <CSSWrapperSearch>
        <InputSearch handleChange={handleChange} />
      </CSSWrapperSearch>
      <List
        data={conversations}
        render={({ username, text, senderId }: any) => (
          <ChatButton
            key={senderId}
            image="/default-profile.jpg"
            username={username}
            message={text}
            handleClick={() => handleClick(senderId)}
          />
        )}
      />
    </CSSChatContainer>
  );
};

export default ChatList;
