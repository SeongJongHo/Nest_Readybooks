import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto'
import { IUser } from './interfaces/user.interface'
import { KakaoAPI } from '../core/kakao_API/kakao.service';
import { Book } from '../entity/book.entity'

@Injectable()
export class UserService {                              
    async signin(authorization: User['Authorization']): Promise<IUser>{
        const kakao: KakaoAPI= new KakaoAPI(authorization)
        const data: object= await kakao.get_kakao_user()
        const result: IUser= {
            Authorization: "test",
            user_nickname: "test",
            user_profile_img: "test",
            user_id: 1  
        }
        return result
    }
}
