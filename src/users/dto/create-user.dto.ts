import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  // make a validation
  @IsNotEmpty()
  @IsString()
  username: string;
  // make a validation
  @IsNotEmpty()
  @IsNumber()
  age: number;
}
