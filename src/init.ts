/* eslint-disable no-console */
import fm from 'front-matter';
import fs from 'fs';
import db from './db';

const SCHEMA_FILE = 'src/schema.sql';
const DATA_DIR = 'data/perk';

const seedPerks = () => {
  const perkFiles = fs.readdirSync(DATA_DIR);
  const statement = db.prepare<PerkRow>(
    'INSERT OR IGNORE INTO perk (id, name, score, votes) VALUES (@id, @name, @score, @votes)'
  );

  perkFiles.forEach((perkFile) => {
    console.log(`Processing ${perkFile}`);
    const perk = fs.readFileSync(`${DATA_DIR}/${perkFile}`, 'utf-8');
    const {
      attributes: { id, name, initialScore },
    } = fm<PerkFrontMatter>(perk);

    statement.run({
      id,
      name,
      score: initialScore,
      votes: 1,
    });
  });
};

const main = () => {
  const schema = fs.readFileSync(SCHEMA_FILE, 'utf-8');

  console.log('CREATING DB');
  db.exec(schema);

  console.log('SEEDING ROWS');
  seedPerks();
};

main();
