import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';

import { createUser } from './dto/user.dto'
import { IUser } from './interfaces/user.interface'
import { KakaoAPI } from '../core/kakao_API/kakao.service';
import { User } from '../entity/user.entity'

@Injectable()
export class UserService {   

    async signin(authorization: createUser['Authorization']): Promise<IUser>{
        const kakao: KakaoAPI= new KakaoAPI(authorization)
        const kakao_data: object= await kakao.get_kakao_user()

        let user = await User.findOne({kakao_id: kakao_data['id']})
            .catch(err=>{
            err.message = 'DB_ERROR'
            err.status = 400
            throw new Error(err)})

        const userData: IUser= {
            Authorization: "test",
            user_nickname: user.nickname,
            user_profile_img: user.profile_img,
            user_id: user.id  
        }
        return userData
    }
}
