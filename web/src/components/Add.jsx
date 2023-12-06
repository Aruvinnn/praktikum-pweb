import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Pekerja from './Pekerja';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom'

function Add() {

    const[name, setName] = useState('');
    const[status, setStatus] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
            b = status;

        Pekerja.push({id: uniqueId, Nama : a, Status : b});

        history('/');
    }

    return <div className='add'>
        <Form className="d-grip gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStatus">
                <Form.Control type="text" placeholder="Enter Status" required onChange={(e) => setStatus(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>;
}

export default Add;