import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import React, { useContext } from 'react';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router';

const UsersList = () => {
  const { deleteUser } = useContext(UsersContext);
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <>
      <Title>Student list</Title>
      <h1>
        <StyledList>
          {students.map((userData) => (
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
