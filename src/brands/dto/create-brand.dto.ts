import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString() // eslint-disable-line @typescript-eslint/no-unsafe-call
  @MinLength(1, { message: 'Name must be at least 1 characters long' }) // eslint-disable-line @typescript-eslint/no-unsafe-call
  name: string;
}
