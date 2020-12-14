import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Conversation, Costumer } from '@/organisms';
import { PanelChat } from '@/molecules';
import { Container, H1 } from './styles';

type props = {
  conversationId: any;
};

const LoadedChat: FC<props> = ({ conversationId }): JSX.Element => {
  const conversation = useSelector(
    (store: any) => store.conversations[conversationId]
  );
  return (
    <Container>
      {!conversation ? (
        <H1>No has seleccionado ningun Chat</H1>
      ) : (
        <>
          <PanelChat
            username={conversation.username}
            conversationId={conversation.id}
          />
          <Conversation
            messages={conversation.messages}
            senderId={conversation.senderId}
            conversationId={conversation.id}
          />
          <Costumer
            conversationId={conversation.id}
            customerId={conversation.customerId}
            username={conversation.username}
          />
        </>
      )}
    </Container>
  );
};

export default LoadedChat;
