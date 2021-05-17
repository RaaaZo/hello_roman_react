import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormField = ({ onChange, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        data-testid={label}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
