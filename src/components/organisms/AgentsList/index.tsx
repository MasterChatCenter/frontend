import React, { FC } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import AgentCard from '@/molecules/AgentCard';
import { NotAgents, Div } from './styles';

type props = {
  users: any;
  onEdit: any;
  onDelete: any;
};

const AgentsList: FC<props> = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return (
      <NotAgents>
        <p>No hay agentes agregados </p>
        <AiOutlineUserAdd />
      </NotAgents>
    );
  }

  return (
    <Div>
      {users.map((user: any, idx: number) => (
        <AgentCard
          key={idx}
          avatarUrl="https://www.tibs.org.tw/images/default.jpg"
          name={user.name + '' + user.lastname}
          nickName={user.name + '' + user.lastname}
          handleEdit={() => onEdit(user)}
          handleDelete={() => onDelete(user)}
        />
      ))}
    </Div>
  );
};

export default AgentsList;
