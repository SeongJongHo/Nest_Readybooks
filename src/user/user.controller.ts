import { Controller, Get, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './dto/user.dto'

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/kakao/signin')
    async SignIn(@Headers('Authorization') authorization: User['Authorization']){
        if(!authorization) throw new Error("없어 auth")
        return authorization
    }
}
