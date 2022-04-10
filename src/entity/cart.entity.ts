import {
    BaseEntity,
    Column,
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

    @ManyToOne((type)=>User, (user)=>user.id)
    user_id: User;

    @ManyToOne((type)=>Book, (book)=>book.id)
    book_id: Book;

    @CreateDateColumn({ name: 'created_at', comment: '생성일' })
    created_at: Date;
  
    @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
    updated_at: Date;
  }
  