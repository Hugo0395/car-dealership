import { IsString, IsInt, Min } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Brand is required' }) // eslint-disable-line @typescript-eslint/no-unsafe-call
  readonly brand: string;

  @IsString() // eslint-disable-line @typescript-eslint/no-unsafe-call
  readonly model: string;

  @IsInt() // eslint-disable-line @typescript-eslint/no-unsafe-call
  @Min(1886) // eslint-disable-line @typescript-eslint/no-unsafe-call
  readonly year: number;
}
