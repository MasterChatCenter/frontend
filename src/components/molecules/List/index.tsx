import { FC } from 'react';

const List: FC<any> = ({ data, render }): JSX.Element => {
  return <div>{data.map(render)}</div>;
};

export default List;
