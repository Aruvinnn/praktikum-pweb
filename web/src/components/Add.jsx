import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/api/pekerja', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Nama: name, Status: status }),
    })
      .then(() => history('/'))
      .catch((error) => console.error('Error inserting data:', error));
  };

  return (
    <div className='add'>
      <Form className='d-grip gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control
            type='text'
            placeholder='Enter Name'
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formStatus'>
          <Form.Control
            type='text'
            placeholder='Enter Status'
            required
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
