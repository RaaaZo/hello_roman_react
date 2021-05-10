import users from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
import React, { useEffect, useState } from 'react';

const mockApi = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [listOfUsers, setListOfUsers] = useState(users);
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);

    setListOfUsers(filteredUsers);
  };

  useEffect(() => {
    setIsLoading(true);

    mockApi()
      .then((data) => {
        setIsLoading(false);
        setListOfUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <h1>
        {isLoading ? (
          'Loading...'
        ) : (
          <ul>
            {listOfUsers.map((userData) => (
              <UsersListItem
                deleteUser={deleteUser}
                key={userData.name}
                userData={userData}
              />
            ))}
          </ul>
        )}
      </h1>
    </Wrapper>
  );
};

export default UsersList;
