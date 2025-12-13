import { IsString, IsInt, Min, IsUUID, IsOptional } from 'class-validator';

export class UpdateCarDto {
  @IsString() // eslint-disable-line @typescript-eslint/no-unsafe-call
  @IsUUID() // eslint-disable-line @typescript-eslint/no-unsafe-call
  @IsOptional() // eslint-disable-line @typescript-eslint/no-unsafe-call
  readonly id?: string;

  @IsString() // eslint-disable-line @typescript-eslint/no-unsafe-call
  @IsOptional() // eslint-disable-line @typescript-eslint/no-unsafe-call
  readonly brand?: string;

  @IsString() // eslint-disable-line @typescript-eslint/no-unsafe-call
  @IsOptional() // eslint-disable-line @typescript-eslint/no-unsafe-call
  readonly model?: string;

  @IsInt() // eslint-disable-line @typescript-eslint/no-unsafe-call
  @Min(1886) // eslint-disable-line @typescript-eslint/no-unsafe-call
  @IsOptional() // eslint-disable-line @typescript-eslint/no-unsafe-call
  readonly year?: number;
}
