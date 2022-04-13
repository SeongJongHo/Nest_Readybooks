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
      type: 'mysql', 
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: false, 
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
