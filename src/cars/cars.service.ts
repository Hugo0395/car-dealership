import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import Car from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
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

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`The carId ${id} was not found`);
    }
    return car;
  }
}
