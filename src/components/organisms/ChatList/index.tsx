import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputSearch from '../../atoms/InputSearch/index';
import ChatButton from '../../molecules/ChatButton/index';
import { loadCurrentConversation } from 'root/actions';
import { CSSChatContainer, CSSWrapperSearch } from './styles';

import { List } from '@/molecules';

const IMAGEN =
  'https://res.cloudinary.com/dwapbqqbo/image/upload/v1599370329/default.jpg';

const ChatList: FC = () => {
  const allConverations = useSelector((store: any) => store.conversations.all);
  const [conversations, setConversations] = useState(allConverations);
  const dispatch = useDispatch();

  useEffect(() => {
    setConversations(allConverations);
  }, [allConverations]);

  const handleChange = (event: any) => {
    if (event.target.value === '') {
      setConversations(allConverations);
      return false;
    }

    const finded = allConverations.filter(
      (num: any) => num === Number(event.target.value)
    );
    setConversations(finded);
  };

  const handleClick = (senderId: string) => {
    dispatch(loadCurrentConversation(senderId));
  };

  return (
    <CSSChatContainer>
      <CSSWrapperSearch>
        <InputSearch handleChange={handleChange} />
      </CSSWrapperSearch>
      <List
        data={conversations}
        render={({ username, text, senderId }: any, idx: number) => (
          <ChatButton
            key={idx}
            avatarUrl={IMAGEN}
            name={username}
            nickName={username}
            slug={text}
            onClick={() => handleClick(senderId)}
          />
        )}
      />
    </CSSChatContainer>
  );
};

ChatList.defaultProps = {
  changePage: null,
};

export default ChatList;

/*
import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputSearch from '../../atoms/InputSearch/index';
import ChatButton from '../../molecules/ChatButton/index';
import { loadCurrentConversation } from 'root/actions';
import { CSSChatContainer, CSSWrapperSearch } from './styles';

const IMAGEN =
  'https://res.cloudinary.com/dwapbqqbo/image/upload/v1599370329/default.jpg';

type props = {
  changePage?: any;
};

const ChatList: FC<props> = ({ changePage }) => {
  const dispatch = useDispatch();
  const users = useSelector((store: any) => store.conversations.all);
  const [usersFiltered, setUsersFiltered] = useState(users);

  useEffect(() => {
    setUsersFiltered(users);
  }, [users]);

  const handleChange = (event: any) => {
    if (event.target.value === '') {
      setUsersFiltered(users);
      return false;
    }

    const finded = users.filter(
      (num: any) => num === Number(event.target.value)
    );
    setUsersFiltered(finded);
  };

  const handleClick = (senderId: string) => {
    changePage('0');
    dispatch(loadCurrentConversation(senderId));
  };

  return (
    <CSSChatContainer>
      <CSSWrapperSearch>
        <InputSearch handleChange={handleChange} />
      </CSSWrapperSearch>
      {usersFiltered.map(({ username, text, senderId }: any, idx: number) => (
        <ChatButton
          key={idx}
          avatarUrl={IMAGEN}
          name={username}
          nickName={username}
          slug={text}
          onClick={() => handleClick(senderId)}
        />
      ))}
    </CSSChatContainer>
  );
};

ChatList.defaultProps = {
  changePage: null,
};

export default ChatList;
*/
