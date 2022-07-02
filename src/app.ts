import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});

app.listen('5000', () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 5000
  ################################################
`);
});
