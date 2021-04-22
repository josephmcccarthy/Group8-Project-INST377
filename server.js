/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'public';

app.use(express.urlencoded({ extended: true }));
app.use(express.json('database/config.js'));
app.use(express.static('public'));
app.use('/api', apiRoutes);

async function bootServer() {
  try {
    const mysql = await db.sequelizeDB;
    await mysql.sync();
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

app.route('/api')
  .get(async (req, res) => {
    console.log('GET request detected');
    const data = await fetch('');
    const json = await data.json();
    res.json(json);
  })
  .post(async (req, res) => {
    res.send('Data entered');
  });

bootServer();
