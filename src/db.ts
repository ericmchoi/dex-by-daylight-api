import Database from 'better-sqlite3';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const DB_FILE = process.env.DB_FILE || '.db/dex-by-daylight.db';

if (!fs.existsSync(path.dirname(DB_FILE))) {
  fs.mkdirSync(path.dirname(DB_FILE));
}

const db = new Database(DB_FILE);

export default db;
