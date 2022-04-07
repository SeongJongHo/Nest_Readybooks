import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto'
import { IUser } from './interfaces/user.interface'
import { KakaoAPI } from '../core/kakao_API/kakao.service';

@Injectable()
export class UserService {                              //IUser로 변경
    async signin(authorization: User['Authorization']): Promise<object>{
        const kakao: KakaoAPI= new KakaoAPI(authorization)
        const data: object = await kakao.get_kakao_user()
        console.log(data)
        return data
    }
}
