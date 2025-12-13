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
import { CreateCarDto } from './dto/create-car.dto';

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
  // @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: number) {
    return {
      message: `Car with id ${id} deleted`,
    };
  }
}
