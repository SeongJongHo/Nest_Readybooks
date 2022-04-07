import { Controller, Get, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './dto/user.dto'

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/kakao/signin')
    SignIn(@Headers('Authorization') authorization: User['Authorization']): object{
        
        return this.userService.signin(authorization)
    }
}
