import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';
import { BookModule } from './book/book.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UserModule, CartModule, BookModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
