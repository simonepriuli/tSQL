import { tSQLTable } from './types/table';

type User = {
  email: string;
  password: string;
};

const UsersTable = new tSQLTable<User>('Users');

export const tSQL = {
  users: UsersTable,
};

//another file

const usersQuery = tSQL.users.findMany();
