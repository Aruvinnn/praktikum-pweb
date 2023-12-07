import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [nama, setNama] = useState('');
  const [status, setStatus] = useState('');
  const [id, setId] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/api/pekerja/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Nama: nama, Status: status }),
    })
      .then(() => history('/'))
      .catch((error) => console.error('Error updating data:', error));
  };

  useEffect(() => {
    setNama(localStorage.getItem('Nama'));
    setStatus(localStorage.getItem('Status'));
    setId(localStorage.getItem('Id'));
  }, []);

  return (
    <div>
      <Form className='d-grip gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control
            type='text'
            placeholder='Masukkan Nama'
            value={nama}
            required
            onChange={(e) => setNama(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formStatus'>
          <Form.Control
            type='text'
            placeholder='Masukkan Status'
            value={status}
            required
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type='submit'>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
