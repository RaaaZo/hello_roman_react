import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setUsers(data.students))
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    console.log('dziala');
    const filteredUsers = users.filter((user) => user.name !== name);

    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };

    setUsers([newUser, ...users]);
  };

  return (
    <UsersContext.Provider value={{ users, handleAddUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
