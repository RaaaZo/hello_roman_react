import React from 'react';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import Navigation from 'components/organisms/Navigation/Navigation';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
