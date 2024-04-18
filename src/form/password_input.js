import { Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';

function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <InputGroup size="md" width="300px">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        value={value}
        onChange={handleChange}
      />
      <InputRightElement width="100px">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
