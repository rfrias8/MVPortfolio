import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript'
import { Favorites } from './favorites.model'
import { Movies } from './movies.model'

@Table
export class Users extends Model {
  
  @Column
  firstName: string

  @Column
  lastName: string

  @Column
  email: string

  @Column
   password: string

  @BelongsToMany(() => Movies, () => Favorites)
  movies: Movies[];
}

