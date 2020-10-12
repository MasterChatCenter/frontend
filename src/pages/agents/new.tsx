import { Layout, Agent } from '@/templates';
import { Grid } from 'root/styles';

const NewAgentPage = (): JSX.Element => {
  const data = {
    name: '',
    lastname: '',
    username: '',
    role: 1,
  };

  return (
    <Layout>
      <Grid>
        <Agent agent={data} />
      </Grid>
    </Layout>
  );
};

export default NewAgentPage;
