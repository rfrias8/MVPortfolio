import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript'
import { Users } from './user.model';
import { Favorites } from './favorites.model';


@Table
export class Movies extends Model {
  
  @Column
  url: string

  @Column
  title: string

  @BelongsToMany(() => Users, () => Favorites)
  users: Users[];

}