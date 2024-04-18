import { Input } from '@chakra-ui/react';
import { useState } from 'react';

function NameInput({ value, onChange }) {
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Input placeholder='Enter your name' size='md' width="300px"  value={value} onChange={handleChange}/>
  );
}

export default NameInput;
