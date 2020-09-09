import React, { FC } from 'react';
import InputSearch from '../../atoms/InputSearch/index';
import ChatButton from '../../molecules/ChatButton/index';
import { CSSChatContainer, CSSWrapperSearch } from './styles';

const IMAGEN =
  'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d';

type props = {
  changePage?: any;
};

const ChatList: FC<props> = ({ changePage }) => {
  return (
    <CSSChatContainer onClick={changePage}>
      <CSSWrapperSearch>
        <InputSearch />
      </CSSWrapperSearch>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <ChatButton
          key={num}
          avatarUrl={IMAGEN}
          name="Darrell Steward"
          nickName="Darrell Steward"
          slug="Amet minim mollit non deserunt..."
        />
      ))}
    </CSSChatContainer>
  );
};

ChatList.defaultProps = {
  changePage: null,
};

export default ChatList;
