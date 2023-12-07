const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'pekerja',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.get('/', (req, res) => {
    res.send('Hello, welcome to your Express.js server!');
  });

app.get('/api/pekerja', (req, res) => {
  db.query('SELECT * FROM pekerja', (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

app.post('/api/pekerja', (req, res) => {
  const { Nama, Status } = req.body;
  db.query('INSERT INTO pekerja (Nama, Status) VALUES (?, ?)', [Nama, Status], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).json(result);
    }
  });
});

app.put('/api/pekerja/:id', (req, res) => {
  const id = req.params.id;
  const { Nama, Status } = req.body;
  db.query('UPDATE pekerja SET Nama = ?, Status = ? WHERE id = ?', [Nama, Status, id], (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

app.delete('/api/pekerja/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM pekerja WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
