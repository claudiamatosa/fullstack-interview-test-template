import express, {Request, Response, NextFunction} from 'express';
import terminalLink from 'terminal-link';
import {promises as fs} from 'fs'

const app = express();
const port = 5000;

app.get('/players', async (request: Request, response: Response, next: NextFunction) => {
  const players = await fs.readFile(new URL('./data.json', import.meta.url), 'utf8')
  response.send(players)
});

app.listen(port, () => {
    console.log(`\n\nServer running on ${terminalLink(`http://localhost:${port}`, `http://localhost:${port}`)} (ctrl/cmd + click to open).\n\n`);
});
