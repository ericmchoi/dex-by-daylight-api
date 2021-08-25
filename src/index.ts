import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fm from 'front-matter';
import fs from 'fs';
import Joi from 'joi';
import db from './db';

const DATA_DIR = 'data/perk';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/perks', (req, res) => {
  const statement = db.prepare('SELECT id, score, votes FROM perk ORDER BY name');

  const rows = statement.all() as {
    id: string;
    score: number;
    votes: number;
  }[];

  const perks = rows.map((row) => {
    const perk = fs.readFileSync(`${DATA_DIR}/${row.id}.md`, 'utf-8');
    const { attributes, body } = fm<PerkFrontMatter>(perk);
    return { ...row, ...attributes, description: body };
  });

  res.json(perks);
});

app.get('/ratings', (req, res) => {
  const statement = db.prepare('SELECT id, score, votes FROM perk');

  const rows = statement.all() as {
    id: string;
    score: number;
    votes: number;
  }[];

  const ratings = rows.reduce(
    (acc, perk) => ({
      ...acc,
      [perk.id]: (perk.score / perk.votes).toFixed(2),
    }),
    {}
  );

  res.json(ratings);
});

app.post('/ratings', (req, res) => {
  const schema = Joi.object({
    id: Joi.string().required(),
    rating: Joi.number().integer().min(1).max(5).required(),
  });

  const validated = schema.validate(req.body);

  if (validated.error) {
    res.status(400).json({ error: validated.error.details[0].message });
    return;
  }

  const { id, rating } = validated.value as { id: string; rating: number };

  const statement = db.prepare<{ id: string; rating: number }>(
    'UPDATE perk SET score=score+@rating, votes=votes+1 WHERE id=@id'
  );

  const result = statement.run({ id, rating });

  if (result.changes === 0) {
    res.status(404).json({ error: `perk with id '${id}' not found.` });
    return;
  }

  res.status(204).end();
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
