import { Table } from '../types/table';

export class tSQL {
  private db: unknown;
  constructor(db: unknown) {
    this.db = db;
  }
  sql(): unknown {
    return this.db;
  }
}

/*

import { tSQL } from "tsql";

type User = {
    name: string
}

const usersTable = new Table<User>();

const db = {
    users: UsersTable
}

const database = new tSQL(db);

const query = database.userstable.findMany();

*/
