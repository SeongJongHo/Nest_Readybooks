import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';

import { Book } from './book.entity'
import { User } from './user.entity'

@Entity({ name: 'order_items' })
export class OrderItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: 'created_at', comment: '생성일' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
    updated_at: Date;

    @ManyToOne(()=>Book, (book)=>book.id, { nullable : false })
    book_id: Book;

    @ManyToOne(()=>User, (user)=>user.id, { nullable : false })
    user_id: User;
}