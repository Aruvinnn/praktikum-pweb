import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [pekerja, setPekerja] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/api/pekerja')
      .then((response) => response.json())
      .then((data) => setPekerja(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleEdit = (id, nama, status) => {
    localStorage.setItem('Nama', nama);
    localStorage.setItem('Status', status);
    localStorage.setItem('Id', id);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/pekerja/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedPekerja = pekerja.filter((item) => item.id !== id);
        setPekerja(updatedPekerja);
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  return (
    <Fragment>
      <div style={{ margin: '10rem' }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pekerja && pekerja.length > 0 ? (
              pekerja.map((item) => (
                <tr key={item.id}>
                  <td>{item.Nama}</td>
                  <td>{item.Status}</td>
                  <td>
                    <Link to={`/edit`}>
                      <Button onClick={() => handleEdit(item.id, item.Nama, item.Status)}>Edit</Button>
                    </Link>
                    &nbsp;
                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Data Tidak Ditemukan</td>
              </tr>
            )}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
