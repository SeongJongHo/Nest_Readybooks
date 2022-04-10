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
  
  @Entity({ name: 'orders' })
  export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type)=>User, (user)=>user.id)
    user_id: User;

    @Column({ type: 'varchar', length: 500, comment: '주문번호'})
    order_number: string;

    @CreateDateColumn({ name: 'created_at', comment: '생성일' })
    created_at: Date;
  
    @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
    updated_at: Date;
  }