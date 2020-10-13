import { Layout, Agent } from '@/templates';
import { Grid } from 'root/styles';

const NewAgentPage = (): JSX.Element => {
  const data = {
    name: '',
    lastname: '',
    username: '',
    role_id: '2',
    password: '123456',
  };

  return (
    <Layout>
      <Grid>
        <Agent data={data} />
      </Grid>
    </Layout>
  );
};

export default NewAgentPage;
