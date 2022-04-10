import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';

import { Book } from './book.entity'
import { Order } from './order.entity'

@Entity({ name: 'reviews' })
export class Review extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, comment: '유저 닉네임' })
    nickname: string;

    @Column({ type: "decimal", precision: 10, scale: 2, comment: '별점'})
    rating: number;

    @Column({ type: 'longtext', comment: '리뷰 내용'})
    content: string;

    @CreateDateColumn({ name: 'created_at', comment: '생성일' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
    updated_at: Date;

    @ManyToOne(()=>Book, (book)=>book.id)
    book_id: Book;

    @ManyToOne(()=>Order, (user)=>user.id)
    user_id: Order;
}