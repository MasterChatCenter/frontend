import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ChatList, LoadedChat } from '@/organisms';
import { Grid } from 'root/styles';

const Conversations = (): JSX.Element => {
  const conversations = useSelector((store: any) => store.conversations);
  const [currentConveration, setCurrentConveration] = useState(false as any);

  const handleConversation = (senderId: string) => {
    setCurrentConveration(senderId);
  };

  return (
    <Grid>
      <ChatList
        allConversations={Object.values(conversations)}
        selectConversation={handleConversation}
      />
      <LoadedChat conversationId={currentConveration} />
    </Grid>
  );
};

export default Conversations;
