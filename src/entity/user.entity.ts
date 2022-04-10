import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
    OneToMany,
} from 'typeorm';

import { Order } from './order.entity';
import { Cart } from './cart.entity';
import { Review } from './review.entity';
import { Replie } from './replie.entity';

@Entity({ name: 'users' })
@Unique(['kakao_id'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, comment: '유저 닉네임' })
    nickname: string;

    @Column({ type: 'bigint', comment: '카카오 id'})
    kakao_id: number;

    @Column({ type: 'varchar', length: 1000, comment: '유저 프로필 이미지'})
    profile_img: string;

    @CreateDateColumn({ name: 'created_at', comment: '생성일' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
    updated_at: Date;

    @OneToMany(()=> Order, (order)=>order.user_id)
    order: Order[]

    @OneToMany(()=> Cart, (cart)=>cart.user_id)
    cart: Cart[]

    @OneToMany(()=> Review, (review)=>review.user_id)
    review: Review[]

    @OneToMany(()=> Replie, (replie)=>replie.user_id)
    replie: Replie[]
}
  