import Express from 'express';
import request from 'superagent';

const router = Express.Router();

const { SKY_API_KEY } = process.env;

const requestSession = () => new Promise((resolve, reject) =>
  request
  .post('http://partners.api.skyscanner.net/apiservices/pricing/v1.0')
  .set('Content-Type', 'application/x-www-form-urlencoded')
  .send({
    apiKey: SKY_API_KEY,
    country: 'BR',
    currency: 'BRL',
    outbounddate: '2016-06-12',
    originplace: 'GRU-sky',
    destinationplace: 'AMS-sky',
    locale: 'pt-BR'
  })
  .end((err, res) => {
    if (err) return reject(err);
    const location = res.header.location;
    setTimeout(() =>
      resolve(location.substring(location.lastIndexOf('/') + 1))
    , 1000);
  })
);

const getFlights = (sesskionKey) => new Promise((resolve, reject) =>
  request
  .get(`http://partners.api.skyscanner.net/apiservices/pricing/v1.0/${sesskionKey}?apiKey=${SKY_API_KEY}`)
  .end((err, res) => {
    if (err) return reject(err);
    resolve(JSON.parse(res.text));
  })
);

router.get('/flights', (req, res) =>
  requestSession()
  .then((sesskionKey) => getFlights(sesskionKey))
  .then((flights) => res.json(flights))
  .catch((err) => res.status(err.status).json(res))
);

export default router;
