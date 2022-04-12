import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';
import { BookModule } from './book/book.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, CartModule, BookModule, OrderModule,
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', //Database 설정
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity.{ts,js}'], // Entity 연결
      synchronize: false, //true 값을 설정하면 어플리케이션을 다시 실행할 때 엔티티안에서 수정된 컬럼의 길이 타입 변경값등을 해당 테이블을 Drop한 후 다시 생성해준다.
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
