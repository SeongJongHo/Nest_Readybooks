import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';

import { User } from './user.entity'
import { Book } from './book.entity'

@Entity({ name: 'carts' })
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>User, (user)=>user.id, { cascade : true , nullable : false })
    user_id: User;

    @ManyToOne(()=>Book, (book)=>book.id, { cascade : true , nullable : false })
    book_id: Book;

    @CreateDateColumn({ name: 'created_at', comment: '생성일' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
    updated_at: Date;
}
