import { FC } from 'react';
import { Conversation, Costumer } from '@/organisms';
import { PanelChat } from '@/molecules';
import { Container, H1 } from './styles';

type props = {
  conversation: any;
};

const LoadedChat: FC<props> = ({ conversation }): JSX.Element => {
  return (
    <Container>
      {!conversation ? (
        <H1>No has seleccionado ningun Chat</H1>
      ) : (
        <>
          <PanelChat username={conversation.username} />
          <Conversation
            messages={conversation.messages}
            senderId={conversation.senderId}
          />
          <Costumer />
        </>
      )}
    </Container>
  );
};

export default LoadedChat;
