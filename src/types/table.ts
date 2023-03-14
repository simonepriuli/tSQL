export class tSQLTable<T> {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  findMany(query?: string): string {
    if (!query) {
      return 'select * from ' + this.name;
    } else {
      return '';
    }
  }
}
