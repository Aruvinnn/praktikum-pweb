import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Pekerja from './Pekerja';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom'

function Edit() {
    const[nama, setNama] = useState('');
    const[status, setStatus] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    var index = Pekerja.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Pekerja[index];
        a.Nama = nama;
        a.Status = status;

        history('/');
    }

    useEffect(() =>{
        setNama(localStorage.getItem('Nama'))
        setStatus(localStorage.getItem('Status'))
        setId(localStorage.getItem('Id'))
    },[])


    return (
        <div>
            <Form className="d-grip gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Masukkan Nama" value={nama} required onChange={(e) => setNama(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStatus">
                    <Form.Control type="text" placeholder="Masukkan Status" value={status} required onChange={(e) => setStatus(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )

}

export default Edit;
