import Car from 'src/cars/interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
export const CARS_SEED: Car[] = [
  {
    id: uuidv4(),
    brand: 'toyota',
    model: 'camry',
    year: 2020,
  },
  {
    id: uuidv4(),
    brand: 'ford',
    model: 'mustang',
    year: 2019,
  },
  {
    id: uuidv4(),
    brand: 'bmw',
    model: 'x5',
    year: 2021,
  },
];
