import { DaoInterface } from "./dao.interface";
import { AnimalDao } from "./animal-dao";
import { Animal } from "../aula07-classes/animal";

let dao: DaoInterface = new AnimalDao();

dao.insert(new Animal('Tita'));

let a:[Animal] = dao.findAll();

a[0].move(30);
