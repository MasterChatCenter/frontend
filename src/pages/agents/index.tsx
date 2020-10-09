import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AgentsService } from 'root/services';
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
        <h1>Cargando</h1>
      ) : (
        <Grid>
          <Agents agents={agents} />
        </Grid>
      )}
    </Layout>
  );
};

export default AgentsPage;
