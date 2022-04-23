import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';

export default function Btn({
  title, onClick, type = "action"
}) {
  return (
    <Button className={(type)} size={'sm'} color={useColorModeValue('8cabcd', 'white')} onClick={onClick}>
      { title }
    </Button>
  )
}
