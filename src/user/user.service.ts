import { Injectable } from '@nestjs/common';
import { createUser } from './dto/user.dto'
import { IUser } from './interfaces/user.interface'
import { KakaoAPI } from '../core/kakao_API/kakao.service';
import { User } from '../entity/user.entity'

@Injectable()
export class UserService {                              
    async signin(authorization: createUser['Authorization']): Promise<IUser>{
        const kakao: KakaoAPI= new KakaoAPI(authorization)
        const data: object= await kakao.get_kakao_user()
        // const query: object= User
        //     .createQueryBuilder('users')
        //     .where('users.kakao_id= :kakao_id', data['id'])
        // const user = await User.find({kakao_id:data['id']})
        // console.log(user)
        const result: IUser= {
            Authorization: "test",
            user_nickname: "test",
            user_profile_img: "test",
            user_id: 123  
        }
        return result
    }
}
