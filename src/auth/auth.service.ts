import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>,private jwtService: JwtService) {}

  async signUp(authCredentialsDto: AuthCredentialsDto) {
    const { email, password,name,avatar,xAxis,yAxis,role,phone } = authCredentialsDto;

    // const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({ email, password,name,avatar,xAxis,yAxis,role,phone });

    try {
      const result = await user.save();
      return result;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
    
  }
  async signIn(user: User) {
    const payload = { email: user.email, sub: user._id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userModel.findOne({ username });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(pass, user.password);

    if (valid) {
      return user;
    }

    return null;
  }
}
