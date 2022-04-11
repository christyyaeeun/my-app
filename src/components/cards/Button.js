import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'


export const Button = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }

    return (

        <IconButton w='8' aria-label='Search database' onClick={handleClick} icon={<ArrowBackIcon />} />

    )
}

