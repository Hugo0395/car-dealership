import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'toyota',
      model: 'camry',
      year: 2020,
    },
    {
      id: 2,
      brand: 'ford',
      model: 'mustang',
      year: 2019,
    },
    {
      id: 3,
      brand: 'bmw',
      model: 'x5',
      year: 2021,
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`The carId ${id} was not found`);
    }
    return car;
  }
}
