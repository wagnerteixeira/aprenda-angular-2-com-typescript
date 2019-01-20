import { Animal } from "../aula07-classes/animal";
import { Dao } from "./dao";
import { Cavalo } from "../aula07-classes/cavalo";

let dao: Dao<Animal> = new Dao<Animal>();
let cavalo = new Cavalo('Tita');

dao.insert(new Animal('Rex'));

console.log(dao.findAll());