import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ChatList, LoadedChat } from '@/organisms';
import { Grid } from 'root/styles';

const Conversations = (): JSX.Element => {
  const conversations = useSelector((store: any) => store.conversations);
  const [currentConveration, setCurrentConveration] = useState(false);

  const handleConversation = (senderId: string) => {
    setCurrentConveration(conversations[senderId]);
  };

  return (
    <Grid>
      <ChatList
        allConversations={Object.values(conversations)}
        selectConversation={handleConversation}
      />
      <LoadedChat conversation={currentConveration} />
    </Grid>
  );
};

export default Conversations;
