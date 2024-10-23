import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // make a validation
  @IsOptional()
  @IsString()
  username?: string;
  // make a validation
  @IsOptional()
  @IsNumber()
  age?: number;
}
