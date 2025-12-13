import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import Car from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

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

  create(createCarDto: CreateCarDto) {
    // const car: Car = {
    //   id: uuidv4(),
    //   brand: createCarDto.brand,
    //   model: createCarDto.model,
    //   year: createCarDto.year,
    // };
    const car: Car = {
      id: uuidv4(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new NotFoundException(
        `The carId ${updateCarDto.id} is not valid inside body`,
      );
    }

    // Crear un objeto con solo los campos definidos
    const updates = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(updateCarDto).filter(([_, v]) => v !== undefined),
    );

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB, // datos existentes
          ...updates, // solo campos enviados
          id, // asegurarse de no cambiar el id
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const findCar = this.findOneById(id);

    if (!findCar) {
      throw new NotFoundException(`The carId ${id} was not found`);
    }

    this.cars = this.cars.filter((car) => car.id !== id);
    return {
      message: `Car with id ${id} deleted`,
    };
  }
}
