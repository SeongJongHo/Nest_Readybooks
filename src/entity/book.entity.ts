import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'books' })
  export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 1000, comment: '썸네일 이미지' })
    thumbnail: string;

    @Column({ type: "decimal", precision: 10, scale: 2, comment: '상품 가격'})
    price: number;

    @Column({ type: 'varchar', length: 1000, comment: '미리보기 파일'})
    preview_file: string;
    
    @Column({ type: 'varchar', length: 1000, comment: '파일'})
    file: string;

    @Column({ type: 'varchar', length: 250, comment: '책 이름'})
    name: string;

    @Column({ type: 'longtext', comment: '책 설명'})
    description: string;

    @CreateDateColumn({ name: 'created_at', comment: '생성일' })
    created_at: Date;
  
    @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
    updated_at: Date;
  }
  