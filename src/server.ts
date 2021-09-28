import express from 'express';
import { craetCourse } from './routes';

const app = express();

app.get("/", craetCourse);

app.listen(3333);