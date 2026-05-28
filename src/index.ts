import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/api/v1', routes)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})