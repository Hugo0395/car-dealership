import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import type Car from './interfaces/car.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    // throw new Error('Method not implemented.');
    return this.carsService.findOneById(id);
    // this.carsService.findOneById(parseInt(id)) || { message: 'Car not found' }
    // this.carsService.findOneById(Number(id)) || { message: 'Car not found' }
  }

  @Post()
  createCar(@Body() body: Car) {
    return body;
  }

  @Patch(':id')
  updateCar(@Body() body: Car) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: number) {
    return {
      message: `Car with id ${id} deleted`,
    };
  }
}
