CREATE TABLE IF NOT EXISTS perk (
    id      TEXT    NOT NULL PRIMARY KEY,
    name    TEXT    NOT NULL UNIQUE,
    score   REAL    DEFAULT 0,
    votes   INTEGER DEFAULT 0
);
