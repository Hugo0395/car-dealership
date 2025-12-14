// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
import { IsString, MinLength } from 'class-validator';
export class UpdateBrandDto {
  @IsString() // eslint-disable-line @typescript-eslint/no-unsafe-call
  @MinLength(2, { message: 'Name must be at least 2 characters long' }) // eslint-disable-line @typescript-eslint/no-unsafe-call
  name: string;
}
