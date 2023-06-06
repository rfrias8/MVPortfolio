import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import { Users } from './user.model'
import { Movies } from './movies.model'

@Table
export class Favorites extends Model {
    
  
@ForeignKey(() => Users)
    @Column
    user_id: number

@ForeignKey(() => Movies)
    @Column
    movie_id: string

}

//ASSOCIATION REFERNCE
// https://www.npmjs.com/package/sequelize-typescript#many-to-many