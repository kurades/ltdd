import { Controller,Post,Body,UseGuards,ValidationPipe,Request,Get } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
@Controller('auth')
export class AuthController {
    constructor( private authService:AuthService){}
    @Post('/signup')
    async signUp(
      @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
    ){
      return await this.authService.signUp(authCredentialsDto);
    }

    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signIn(@Request() req) {
      return this.authService.signIn(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMe(@Request() req) {
      return req.user;
    }
}
