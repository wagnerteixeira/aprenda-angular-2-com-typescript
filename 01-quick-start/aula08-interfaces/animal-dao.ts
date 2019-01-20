import { DaoInterface } from "./dao.interface";
import { Animal } from '../aula07-classes/animal';

export class AnimalDao implements DaoInterface {

  tableName: string = '';

  insert(object: Animal): boolean {
    console.log('Inserting', object.move(50));
    return true;
  }

  update(object: any): boolean {
    return true;
  }

  delete(id: number): Animal {
    return null;
  }

  find(id: number): Animal {
    return null;
  }

  findAll() : [Animal] {
    return [new Animal('Rex')];
  }

}