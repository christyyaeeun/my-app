import React, { useState } from "react";
import { Input, Button } from '@chakra-ui/react'
function Form(props) {
    const [name, setName] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        if (!name.trim()) {
            return;
        }
        props.addTask(name);
        setName("");
    }


    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <Input variant='outline' placeholder='Outline' type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange} />

            <Button bg='blue.500' color='white' size='sm' type="submit">
                Add
            </Button>

        </form>
    );
}

export default Form;