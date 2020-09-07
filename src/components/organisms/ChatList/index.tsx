import React, { FC } from 'react';
import InputSearch from '../../atoms/InputSearch/index';
import ChatButton from '../../molecules/ChatButton/index';
import { CSSChatContainer, CSSWrapperSearch } from './styles';

const IMAGEN =
  'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d';

const ChatList: FC = () => {
  return (
    <CSSChatContainer>
      <CSSWrapperSearch>
        <InputSearch />
      </CSSWrapperSearch>
      <ChatButton
        avatarUrl={IMAGEN}
        name="Darrell Steward"
        nickName="Darrell Steward"
        slug="Amet minim mollit non deserunt..."
      />
      <ChatButton
        avatarUrl={IMAGEN}
        name="Darrell Steward"
        nickName="Darrell Steward"
        slug="Amet minim mollit non deserunt..."
      />
      <ChatButton
        avatarUrl={IMAGEN}
        name="Darrell Steward"
        nickName="Darrell Steward"
        slug="Amet minim mollit non deserunt..."
      />
      <ChatButton
        avatarUrl={IMAGEN}
        name="Darrell Steward"
        nickName="Darrell Steward"
        slug="Amet minim mollit non deserunt..."
      />
    </CSSChatContainer>
  );
};

export default ChatList;
