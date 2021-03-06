import { IsString, MaxLength, MinLength,IsEmail} from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string;

  @IsString()
  @IsEmail()
  email:string;

  @IsString()
  phone:string

  @IsString()
  avatar:string;

  @IsString()
  xAxis:string;
  @IsString()
  yAxis:string;
  

  @IsString()
  role:string;
}