import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Redirect, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <UsersList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
