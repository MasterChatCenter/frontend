import { CSSTransition } from 'react-transition-group';
import { Layout, Agent } from '@/templates';
import { useAnimate } from 'root/hooks';
import { Grid } from 'root/styles';

const NewAgentPage = (): JSX.Element => {
  const animate = useAnimate();
  const data = {
    name: '',
    lastname: '',
    username: '',
    role_id: '2',
    password: '123456',
  };

  return (
    <Layout>
      {animate ? (
        <CSSTransition in={animate} timeout={400} classNames="my-node">
          <Grid>
            <Agent data={data} />
          </Grid>
        </CSSTransition>
      ) : null}
    </Layout>
  );
};

export default NewAgentPage;
