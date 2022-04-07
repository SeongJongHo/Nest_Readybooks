import { Kakao } from './kakao.dto'
import { get } from 'request';

export class KakaoAPI {
    kakao_token: string;
    kakao_url: string;
    headers: object;
    kakao_data: Promise<object>;

    constructor(kakao_token : Kakao['Authorization']){
        this.kakao_token= kakao_token;
    }

    get_kakao_user(): Promise<object>{
        this.kakao_url= "https://kapi.kakao.com/v2/user/me";
        this.headers= {"Authorization":"Bearer " + this.kakao_token};
        
        return new Promise((resolve, reject)=>{
            get({
                method: 'GET',
                url: this.kakao_url,
                headers: this.headers
            },(error: Error, response: any, body: string)=>{
                if(!error) {
                    this.kakao_data= JSON.parse(body)

                    resolve(this.kakao_data)
                }
                else{
                    reject(error)
                }
            })
        }) 
    }
}