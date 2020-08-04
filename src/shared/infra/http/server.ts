import 'reflect-metadata';
import express, { json, Request, Response, NextFunction } from 'express';

import 'express-async-errors';

import AppError from '@shared/errors/AppError';
import uploadConfig from '@config/upload';
import routes from './routes/index';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(json());
app.use('/files', express.static(uploadConfig.uploadFolder));
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
