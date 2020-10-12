import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AgentsService } from 'root/services';
import { Layout, Agent } from '@/templates';
import { Grid } from 'root/styles';

const EditAgentPage = (): JSX.Element => {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    AgentsService.getOne(id as string).then((res: any) => {
      setData(res);
      setLoaded(true);
    });
  }, []);

  return (
    <Layout>
      {!loaded ? (
        <h1>Cargando</h1>
      ) : (
        <Grid>
          <Agent agent={data} />
        </Grid>
      )}
    </Layout>
  );
};

export default EditAgentPage;
