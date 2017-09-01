import express from 'express';
import config from './config';
import serverRenderer from './serverRenderer';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

const initialContent = serverRenderer();
app.get('/', (req, res) => {
  res.render('index', { initialContent });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
});