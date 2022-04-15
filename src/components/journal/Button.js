import React from 'react';

export default function Button({
  title, onClick, type = "action"
}) {
  return (
    <button onClick={onClick}>
      { title }
    </button>
  )
}

