// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.

import { UrlObject } from "url";

// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Agenda = {
  id: string;
  design: string;
  price: string;
}

export type Sticker = {
  id: string;
  name: string;
  image: string;
  price: string;
  collection: string;
};

export type AgendaItem = {
  id: string;
  title: string;
  start_time: Date;
  finish_time: Date;
  description: string;
  type: string;
}