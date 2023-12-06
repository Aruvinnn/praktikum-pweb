import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Pekerja from './Pekerja';
import React, { Fragment } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Home() {

    let history = useNavigate();

    const handleEdit = (id, nama, status) => {
        localStorage.setItem('Nama', nama)
        localStorage.setItem('Status', status)
        localStorage.setItem('Id', id)
    }

    const handleDelete = (id) => {
        var index = Pekerja.map(function(e){
            return e.id
        }).indexOf(id);

        Pekerja.splice(index, 1);

        history('/');
    }

    return (
       <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Nama
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Pekerja && Pekerja.length > 0
                            ?
                            Pekerja.map((item) =>{
                                return (
                                    <tr>
                                        <td>
                                            {item.Nama}
                                        </td>
                                        <td>
                                            {item.Status}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id, item.Nama, item.Status)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "Data Tidak Ditemukan"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
       </Fragment>
    )
}

export default Home;