import React, { useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from 'hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const {
    handleClearForm,
    handleInputChange,
    handleThrowError,
    handleToggleConsent,
    state,
  } = useForm(initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (state.consent) {
      handleAddUser(state);
      handleClearForm();
    } else {
      handleThrowError('You need to give a consent');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>

      <FormField
        label="Name"
        id="name"
        name="name"
        value={state.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={state.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={state.average}
        onChange={handleInputChange}
      />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        value={state.consent}
        onChange={handleToggleConsent}
      />

      <Button type="submit">Add</Button>

      {state.error ? <p>{state.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
