import './db';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import helmet from 'helmet';
import express from 'express';
import logger from './utils/logger';
import compression from 'compression';
import { privateRouter, publicRouter } from './routes';
import * as errorHandler from './middlerwares/errorHandler';

const app = express();

dotenv.config();

app.set('port', process.env.APP_PORT);
app.set('host', process.env.APP_HOST);

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.locals.title = process.env.APP_TITLE;
app.locals.version = process.env.APP_VERSION;

app.use('/api', publicRouter);
app.use('/api', privateRouter);

app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

const server = app.listen(app.get('port'), () =>
  logger.info(`Server started at http://${app.get('host')}:${app.get('port')}/api`)
);

//Catch unhandled rejections
process.on('unhandledRejection', (err, promise) => {
  logger.error(`${err.message}`);
  //close the server
  server.close(() => process.exit(1));
});

// Catch uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('Uncaught exception');
  logger.error(err.stack);

  server.close(() => process.exit(1));
});
