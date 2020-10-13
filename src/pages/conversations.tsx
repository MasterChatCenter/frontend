import { Layout } from '@/templates';
import { ChatList } from '@/organisms';

const Conversations = (): JSX.Element => {
  return (
    <Layout>
      <ChatList />
    </Layout>
  );
};

export default Conversations;
