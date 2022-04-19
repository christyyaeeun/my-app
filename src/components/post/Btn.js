import React from 'react';
import { Button } from '@chakra-ui/react';

export default function Btn({
  title, onClick, type = "action"
}) {
  return (
    <Button className={(type)} size={'sm'} color={'#8cabcd'} onClick={onClick}>
      { title }
    </Button>
  )
}
