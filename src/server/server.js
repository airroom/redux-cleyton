import Express from 'express';
import http from 'http';
import morgan from 'morgan';

const app = new Express();
const server = new http.Server(app);

const { PORT: port, NODE_PATH: path } = process.env;

app.use(morgan('dev'));

app.use('/assets', Express.static(`${path}/../assets`));

server.listen(port, () => {
  const host = server.address().address;
  console.log(`♥ Spreading Cleytoness in http://${host}:${port} ♥`);
});
