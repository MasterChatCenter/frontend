import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputSearch from '../../atoms/InputSearch/index';
import ChatButton from '../../molecules/ChatButton/index';
import { CSSChatContainer, CSSWrapperSearch } from './styles';

const IMAGEN =
  'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d';

type props = {
  changePage?: any;
};

const ChatList: FC<props> = ({ changePage }) => {
  const dispatch = useDispatch();
  const users = useSelector((store: any) => store.conversations.all);
  const [usersFiltered, setUsersFiltered] = useState(users);

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

  const handleClick = (num: number) => {
    changePage('-100%');
    dispatch({ type: 'LOAD_CURRENT_CONVERSATION', payload: num });
  };

  return (
    <CSSChatContainer>
      <CSSWrapperSearch>
        <InputSearch handleChange={handleChange} />
      </CSSWrapperSearch>
      {usersFiltered.map((num: any) => (
        <ChatButton
          key={num}
          avatarUrl={IMAGEN}
          name="Darrell Steward"
          nickName="Darrell Steward"
          slug="Amet minim mollit non deserunt..."
          onClick={() => handleClick(num)}
        />
      ))}
    </CSSChatContainer>
  );
};

ChatList.defaultProps = {
  changePage: null,
};

export default ChatList;
