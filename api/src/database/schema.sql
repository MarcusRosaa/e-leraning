CREATE DATABASE verzel;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS modules (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  title VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS lessons (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  title VARCHAR NOT NULL UNIQUE,
  video_url VARCHAR NOT NULL,
  module_id UUID,
  FOREIGN KEY(module_id) REFERENCES modules(id)
);