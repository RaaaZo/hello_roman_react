import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import {
  StyledAverage,
  StyledInnerWrapper,
  StyledParagraph,
  Wrapper,
} from './UsersListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInnerWrapper>
        <StyledParagraph isBig>{name}</StyledParagraph>
        <StyledParagraph>Attendance: {attendance}</StyledParagraph>
      </StyledInnerWrapper>
      <Button />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
