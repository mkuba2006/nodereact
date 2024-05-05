import React from 'react';
import NameInput from './name_input';
import PasswordInput from './password_input';
import { Button } from '@chakra-ui/react';
import "../../App.css"

const Form = ({ name, password, onNameChange, onPasswordChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1 id='title'>Add user</h1>
      <NameInput value={name} onChange={onNameChange}/>
      <PasswordInput value={password} onChange={onPasswordChange} />
      <Button type="submit" colorScheme='green'>Add User</Button>
    </form>
  );
};

export default Form;

