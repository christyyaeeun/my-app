import React from 'react';
import { Button } from '@chakra-ui/react';

export default function Btn({
  title, onClick, type = "action"
}) {
  return (
    <Button className={(type)} onClick={onClick}>
      { title }
    </Button>
  )
}
