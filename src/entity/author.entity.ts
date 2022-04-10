import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';

import { AuthorBook } from './authorbook.entity'
  
@Entity({ name: 'authors' })
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, comment: '작가' })
    name: string;

    @CreateDateColumn({ name: 'created_at', comment: '생성일' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
    updated_at: Date;

    @OneToMany(()=> AuthorBook, (authorbook)=>authorbook.author_id)
    authorbook: AuthorBook[];
}