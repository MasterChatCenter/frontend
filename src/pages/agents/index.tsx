import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AgentsService } from 'root/services';
import { CSSTransition } from 'react-transition-group';
import { Loading } from '@/atoms';
import { Layout, Agents } from '@/templates';
import { Grid } from 'root/styles';

const AgentsPage = (): JSX.Element => {
  const [agents, setAgents] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    AgentsService.getAll(user.company.id).then((data: any) => {
      setAgents(data);
      setLoaded(true);
    });
  }, []);

  return (
    <Layout>
      {!loaded ? (
        <Loading />
      ) : (
        <CSSTransition in={loaded} timeout={400} classNames="my-node">
          <Grid>
            <Agents agents={agents} />
          </Grid>
        </CSSTransition>
      )}
    </Layout>
  );
};

export default AgentsPage;
