import React from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Perkerja from './Perkerja';

function Home() {

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Perkerja && Perkerja.length > 0
                            ?
                            Perkerja.map((item) =>{
                                return (
                                    <tr>
                                        <td>
                                            {item.Nama}
                                        </td>
                                        <td>
                                            {item.Status}
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "Data Tidak Ditemukan"
                        }
                    </tbody>
                </Table>
            </div>
       </Fragment>
    )
}

export default Home;