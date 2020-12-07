import { FC } from 'react';
import { CSSContainer, CSSTable, CSSThead } from './styles';

const ListTable: FC<any> = ({ data, render }): JSX.Element => {
  return (
    <CSSContainer>
      <CSSTable>
        <CSSThead>
          <tr>
            <th>Usuario</th>
            <th>Role</th>
            <th></th>
            <th></th>
          </tr>
        </CSSThead>
        <tbody>{data.map(render)}</tbody>
      </CSSTable>
    </CSSContainer>
  );
  // return <div>{data.map(render)}</div>;
};

export default ListTable;
