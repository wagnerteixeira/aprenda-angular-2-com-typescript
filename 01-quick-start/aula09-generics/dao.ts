import { DaoInterface } from "./dao.interface";

export class Dao<T> implements DaoInterface<T> {

  tableName: string = '';

  insert(object: T): boolean { 
    console.log('Inserting');
    return true;
  }

  update(object: T): boolean {
    return true;
  }

  delete(id: number): T {
    return null;
  }

  find(id: number): T {
    return null;
  }

  findAll() : Array<T> {
    return new Array<T>();
  }

}