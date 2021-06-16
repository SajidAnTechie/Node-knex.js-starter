import './db';
import express from 'express';
import * as errorHandler from './middlerwares/errorHandler';
import { privateRouter, publicRouter } from './routes';

import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: __dirname + '/../.env' });

app.set('port', process.env.APP_PORT);
app.set('host', process.env.APP_HOST);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.locals.title = process.env.APP_TITLE;
app.locals.version = process.env.APP_VERSION;

app.use('/api', publicRouter);
app.use('/api', privateRouter);

app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

const server = app.listen(app.get('port'), () =>
  console.log(`Server started at http://${app.get('host')}:${app.get('port')}/api`)
);

//Handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close the server
  server.close(() => process.exit(1));
});
