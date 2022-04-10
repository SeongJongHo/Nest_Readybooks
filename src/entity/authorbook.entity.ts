import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';

import { Author } from './author.entity';
import { Book } from './Book.entity';
  
@Entity({ name: 'author_books' })
export class AuthorBook extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Author, (author)=>author.id)
    author_id: Author;

    @ManyToOne(()=>Book, (book)=>book.id)
    book_id: Book;

    @CreateDateColumn({ name: 'created_at', comment: '생성일' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
    updated_at: Date;
}