import { Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function AddTask({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTask({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input id='form_inp' placeholder='Title' size='md' width={'220px'}  value={title} onChange={handleChangeTitle}/>
            <Input id='form_inp' placeholder='Description' size='md' width={'220px'}  value={description} onChange={handleChangeDescription}/>
            <Button type='submit'>Submit</Button>
        </form>
    );
}

export default AddTask;

