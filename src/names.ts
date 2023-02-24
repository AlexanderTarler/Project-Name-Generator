import Express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const adjectives = fs
  .readFileSync(
    path.join(__dirname.replace('build', 'data'), '/adjectives.txt'),
    'utf-8',
  )
  .split('\n');
const nouns = fs
  .readFileSync(
    path.join(__dirname.replace('build', 'data'), '/nouns.txt'),
    'utf-8',
  )
  .split('\n');

const randomIndex = (length: number): number =>
  Math.floor(Math.random() * length);

export function getName(req: Request, res: Response) {
  const adjective = adjectives[randomIndex(adjectives.length)];
  const noun = nouns[randomIndex(nouns.length)];
  const result = `${adjective} ${noun}`;
  res.status(200).json({ result });
}
