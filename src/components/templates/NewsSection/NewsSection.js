import { Button } from 'components/atoms/Button/Button';
import {
  ArticleWrapper,
  ContentWrapper,
  NewsSectionHeader,
  TitleWrapper,
  Wrapper,
} from './NewsSection.styles';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
            allArticles {
            id
            title
            category
            content
            image {
                url
                }
            }
        }
        `,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => setError(`Sorry we couldn't load articles for you`));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>

      {articles.length > 0 ? (
        articles.map(({ id, category, content, image = null, title }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article " /> : null}
            </ContentWrapper>
            <Button isBig>Click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <TitleWrapper>{error ? error : 'Loading'}</TitleWrapper>
      )}
    </Wrapper>
  );
};

export default NewsSection;
