import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'cart' })
  export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'bigint', comment: '유저 아이디'})
    user_id: number;

    @Column({ type: 'bigint', comment: '책 아이디'})
    book_id: number;

    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    created_at: Date;
  
    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updated_at: Date;
  }
  