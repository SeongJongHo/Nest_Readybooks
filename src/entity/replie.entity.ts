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
import { User } from './user.entity'

@Entity({ name: 'replies' })
export class Replie extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, comment: '유저 닉네임' })
    book_page: number;

    @Column({ type: 'longtext', comment: '댓글 내용'})
    content: string;

    @CreateDateColumn({ name: 'created_at', comment: '생성일' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
    updated_at: Date;

    @ManyToOne(()=>Book, (book)=>book.id, { cascade : true , nullable : false })
    book_id: Book;

    @ManyToOne(()=>User, (user)=>user.id)
    user_id: User;
}