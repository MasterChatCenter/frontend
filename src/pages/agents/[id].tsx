import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import { AgentsService } from 'root/services';
import { Loading } from '@/atoms';
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
        <Loading />
      ) : (
        <CSSTransition in={loaded} timeout={400} classNames="my-node">
          <Grid>
            <Agent data={data} id={id as string} />
          </Grid>
        </CSSTransition>
      )}
    </Layout>
  );
};

export default EditAgentPage;
