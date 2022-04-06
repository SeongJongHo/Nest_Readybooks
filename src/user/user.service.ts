import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto'

@Injectable()
export class UserService {
    signin(authorization: User['Authorization']): object{
        return
    }
}
