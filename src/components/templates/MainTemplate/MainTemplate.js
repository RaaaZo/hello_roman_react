import React from 'react';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <NewsSection />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
