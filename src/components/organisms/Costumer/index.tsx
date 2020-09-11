import React, { FC } from 'react';
import InputEdit from '@/atoms/InputEdit';
import { CSSCostumer } from './styles';

const Costumer: FC = () => {
  return (
    <CSSCostumer>
      <div>
        <h2>Usuario</h2>
        <InputEdit
          type="text"
          label="Nombre"
          placeholder="Escribe un nombre"
          value=""
        />
        <InputEdit
          type="email"
          label="Correo electronico"
          placeholder="Escribe un correo"
          value=""
        />
      </div>
      <div>
        <h2>Notas</h2>
        <div>
          <p>Nombre de usuario</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            optio culpa aliquam exercitationem consectetur maxime reprehenderit
            quaerat hic repellendus ex nam accusamus libero obcaecati
            perferendis, voluptatibus labore beatae facilis ad?
          </p>
        </div>
      </div>
      <div>
        <h2>Tickets</h2>
        <div>
          <p>Agente</p>
          <p>Fecha</p>
        </div>
      </div>
    </CSSCostumer>
  );
};

export default Costumer;
