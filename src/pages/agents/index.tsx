import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AgentsService } from 'root/services';
import { CSSTransition } from 'react-transition-group';
import { Loading } from '@/atoms';
import { Layout, Agents } from '@/templates';
import { Grid, MessageError } from 'root/styles';

const AgentsPage = (): JSX.Element => {
  const [agents, setAgents] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    AgentsService.getAll(user.company.id)
      .then((data: any) => {
        setAgents(data);
        setLoaded(true);
      })
      .catch(() => {
        setLoaded(true);
        setError('Error al cargar datos');
      });
  }, []);

  return (
    <Layout>
      {error !== '' ? <MessageError>{error}</MessageError> : null}
      {!loaded ? <Loading /> : null}
      {error === '' && loaded ? (
        <CSSTransition in={loaded} timeout={400} classNames="my-node">
          <Grid>
            <Agents agents={agents} />
          </Grid>
        </CSSTransition>
      ) : null}
    </Layout>
  );
};

export default AgentsPage;
