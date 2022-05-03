import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const BackButton = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }

    return (
        <IconButton w='10' height='10' color='gray.400' aria-label='Search database' onClick={ handleClick } icon={ <ChevronLeftIcon /> } />

    )
}

