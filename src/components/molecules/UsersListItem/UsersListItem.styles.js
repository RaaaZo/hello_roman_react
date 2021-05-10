const { default: styled } = require('styled-components');

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 35px;
  height: 35px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export const StyledInnerWrapper = styled.div`
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledParagraph = styled.p`
  width: 100%;
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ isBig, theme }) =>
    isBig ? theme.fontSize.l : theme.fontSize.m};
  font-weight: ${({ isBig }) => (isBig ? 700 : 400)};
  text-align: left;
`;
