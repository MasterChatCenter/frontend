import { useState, useEffect } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styled from 'styled-components';

import Settings from '@/organisms/Settings';

import Layout from '@/templates/Layout';

const DIV = styled.div`
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
  }
`;

const Conversations = () => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setTimeout(() => setInProp(true), 200);
  }, []);

  return (
    <Layout>
      <TransitionGroup component={DIV}>
        <Settings inProp={inProp} />
      </TransitionGroup>
    </Layout>
  );
};

export default Conversations;
