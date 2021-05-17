import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import React, { useContext } from 'react';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = ({ users }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <>
      <Title>Student list</Title>
      <h1>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem
              deleteUser={deleteUser}
              key={userData.name}
              userData={userData}
            />
          ))}
        </StyledList>
      </h1>
    </>
  );
};

export default UsersList;
