import React, { useState } from 'react';
import { Button, FormControl, Input } from '@chakra-ui/react';

const TodoForm = props => {
    const [value, setValue] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        props.handleAddTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} >
            <FormControl>
                        <Input
                            type="name"
                            name="todo"
                            id="todo"
                            className="input"
                            placeholder="Add your todo here"
                            onChange={e => {
                                setValue(e.target.value)                                
                            }}
                        />
                        <Input
                            type="description"
                            name="todo"
                            id="todo"
                            className="input"
                            placeholder="Add your todo here"
                            onChange={e => {
                                setValue(e.target.value)                                
                            }}
                        />
                        <Button color="primary" onClick={handleSubmit} className="float-left">save</Button>
            </FormControl>
        </form>
    );

}

export default TodoForm;