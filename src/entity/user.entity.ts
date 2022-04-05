import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
  } from 'typeorm';
  
  @Entity({ name: 'user' })
  @Unique(['kakao_id'])
  export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255, comment: '유저 닉네임' })
    nickname: string;

    @Column({ type: 'bigint', comment: '카카오 id'})
    kakao_id: number;

    @Column({ type: 'varchar', length: 1000, comment: '유저 프로필 이미지'})
    profile_img: string;
  
    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    created_at: Date;
  
    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updated_at: Date;
  }
  